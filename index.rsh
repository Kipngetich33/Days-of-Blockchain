'reach 0.1'

const [isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (handAlice, handBob) => ((handAlice + (4 - handBob)) % 3)

//add assertion to check that the program function works
assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK, ROCK) == DRAW);

forall(UInt, handA => 
    forall(UInt, handB => 
    assert(isOutcome(winner(handA, handB)))))

forall(UInt, (hand) => 
    assert(winner(hand,hand) == DRAW))

const Player = {
    ...hasRandom,
    getHand : Fun([], UInt),
    seeOutcome: Fun([UInt],Null),
    informTimeout: Fun([],Null)
}

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager:UInt,
        deadline:UInt //time delta (blocks/rounds)
    })
    const Bob = Participant('Bob',{
        ...Player,
        acceptWager: Fun([UInt],Null)
    })

    const InformTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout()
        })
    }
    init();

    Alice.only(()=> {
        const wager = declassify(interact.wager)
        const deadline = declassify(interact.deadline)
    })

    Alice.publish(wager,deadline)
        .pay(wager)

    commit()

    Bob.only(() => {
        interact.acceptWager(wager)
    })

    Bob.pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Alice, InformTimeout))

    var outcome = DRAW
    invariant(balance() == 2 * wager && isOutcome(outcome))

    while( outcome == DRAW ){
        //commit bobs changes in the previous step
        commit()
        
        Alice.only(() => {
            const _handAlice = interact.getHand()
            const [ _commitAlice,_saltAlice ] = makeCommitment(interact, _handAlice)
            const commitAlice = declassify(_commitAlice)
        })

        Alice.publish(commitAlice)
            .timeout(relativeTime(deadline), () => closeTo(Alice, InformTimeout))

        //now commit Alice's step
        commit()

        //check that Alice's hand and salt are unknown to Bob before Bob submits his hand
        unknowable(Bob, Alice(_handAlice,_saltAlice))

        Bob.only(() => {
            const handBob =  declassify(interact.getHand())
        })

        Bob.publish(handBob)
            .timeout(relativeTime(deadline), () => closeTo(Bob, InformTimeout))

        //now commit changes in Bob's step
        commit()

        Alice.only(() => {
            const saltAlice = declassify(_saltAlice)
            const handAlice = declassify(_handAlice)
        })

        Alice.publish(saltAlice,handAlice)
            .timeout(relativeTime(deadline), () => closeTo(Alice, InformTimeout))

        //check that the saltAlice and hand Alice matches the commitment
        checkCommitment(commitAlice,saltAlice,handAlice)

        outcome = winner(handAlice,handBob)

        continue
    }

    // check that there can only be one winner and no DRAW
    assert(outcome == A_WINS || outcome == B_WINS)
    transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob)
    commit()

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome)
    })

});