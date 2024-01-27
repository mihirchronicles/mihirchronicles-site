---
title: Algorithms To Live By | The Computer Science Of Human Decisions by Brian Christian & Tom Griffiths
date: "2024-01-27"
path: "/bookshelf/algorithms-to-live-by"
---

## I. Brief Summary
A book about maximizing human cognition and decision-making using computer science algorithms. Cognitive load is expensive. The underlying directive of any good algorithm is to minimize the labor of thought. Brian Christian and Tom Griffiths explain these complex algorithms in simple words make it practical to use in your day-to-day life. 

## II. Big Ideas
- **Optimal Stopping**: You have to hire a secretary from a pool of fixed applicants. You have to interview the candidates one by one and make a hire/no-hire decision right after each interview. If you pass on someone, you cannot come back to them. If you hire someone, the process stops and they are your new secretary. How do you maximize your chances to find the best secretary in the group? This is the famous Secretary Problem. 
    - 37% Rule: The optimal strategy involves interviewing and rejecting the first few candidates no matter how good they are just to set up the baseline first and then hiring the best you’ve seen so far after. This optimal point turns out to be about 37%. Reject 37% of the applicants, and then hire the next one better than anyone you’ve seen so far. 
    - Optimal Stopping: It is analogous to a “look-then-leap” scenario. You stop looking too early, you don’t know if someone better isn’t going to come along. You stop too late, you might have passed on the best candidate already. Time is an important factor in decision-making. There is often a cost to taking too much time when making a decision. Consider whether the extra time spent searching all options to find the “best” really better than a slightly less optimal (but still good) decision found in much less time.
- **Explore vs Exploit**: Give yourself enough time to explore. Exploration has a higher payoff than exploitation in the early stages. However, when time is running out, exploit what you know. The value of exploration can only go down over time. The value of exploitation can only go up over time. Explore when you have time to use the resulting knowledge, exploit when you are ready to cash in. Be sensitive to how much time you have left. Explore early, exploit late. 
    - The Gittin's Index: It provides a formal justification for favoring exploration early on, provided we have some opportunity to exploit the results later on. The act of searching is valuable in itself even if the payoff in the short term is not as big as an already found option. The Gittin’s Index shows that, early on, a previously untried option has a higher chance of a payoff than an option that you already know to payout.
    - A/B Testing: It is an example of exploration vs exploitation. You are risking worse performance for some customers in the hope the knowledge you gain will be more beneficial in the long run.
- **Sorting**: Sorting is ubiquitous in our daily lives. You sort something so it can be searched later. When sorting, err on the side of messiness almost perfectly sorted is better than no sorting but significantly quicker than perfect sorting.
    - Bubble sort + Insertion sort: The most common, least efficient sorting, when you put the book in alphabetically against a shelf of books, there is a billion different permutations and options.
    - Mergesort: The next best thing, when you compare two sets against each other and sort each time, then compare them against the next set.
    - Bucketsort: The most efficient, fastest way of a “close” enough solution, putting things into buckets/classifying of course that depends how well you choose your buckets.
    - Single Elimination: It is a terrible way to rank, ie sports teams all it tells you is the 1st place, but all other places in the ranking are not truly representative.
    - Round Robin: Gives you full information, but also requires the most effort as everyone plays everyone
    - Bracket tournaments are the most efficient way of ranking, they are a combination of a bucket and mergesort.
- **Caching**: Caching is about storing something for future use. It is a memory hierarchy, what to keep on top of your mind, and what to delegate to pen and paper or a Notes app. Cache management is to minimize the number of times you can’t find what you’re looking for in the cache and must go to the slower main memory to find it.
    - First In, First Out (FIFO): It’s essentially a queue kicking the oldest things out of the memory.
    - Least Recently Used (LRU): It is the most effective algorithm of caching. Keep documents or items you used recently close to you as you are most likely to use them again in the near future.
    - The Noguchi Filing System: It is simple but surprisingly efficient. Noguchi filing is a left-side insertion rule. Every time you pull out a file to use its content, you put it back as the leftmost file when you return it to the box. The most recently accessed files are fastest to find.
- **Scheduling**: How do you get things done? How do you schedule your day? How do you arrange the tasks so that the most gets done in the least amount of time? How do you handle a situation where a low priority task is blocking a higher priority task Optimal scheduling is hard and sometimes impossible. Identify blockers, beware of context switching overheads and use heuristics to identify which tasks to complete first. Don’t stress about it starting in the wrong order is better than not starting at all. Before you can have a plan, choose a metric, which metric you choose will affect which scheduling approaches are best. Context switching comes with an overhead sometimes it is better to just get what you are currently doing done before moving to another higher priority task.
    - Blocking: It occurs when the main task is blocked because resources are being used by another, less important, task. In which case, the main priority should be to clear the trivial task rather than waiting it out and returning to the main task.
    - Shortest Processing Time: Always do the quickest task you can.
    - Thrashing: It is the point when your interrupted so often and have so much to do that you get no actual work done and at this point you can step back and reevaluate and often just do whatever you can get done and not worry about the optimal way to do it.
    - Batching: Having set times to do things such as only looking at emails first thing in the morning and at night is a good way to keep from being interrupted too often.
- **Bayes’s Rule**: It’s just a simple way to determine how probable something (A) is given something else (B) has happened, usually denoted as P(A|B). It’s assumed you have good information about the priors: how likely those two things are to happen independently, and you know how likely things are things to occur. This is Bayes's rule. Knowing what distribution you are up against can make all the difference and allow you to make better guesses in the absence of hard data.
    - Copernican Principle: If we want to predict how long something will last, and have no other knowledge about it, the best guess we can make is that it will continue just as long as it has gone on so far.
- **Overfitting**: We can make better decisions by deliberately thinking and doing less (regularization). Considering too many options when making a decision can lead to overfitting. We can make better decisions by applying regularization, deliberately thinking and doing less. Considering more and more factors for a model can actually lead to worse performing models. We should apply this thinking to our daily lives. Over analyzing a situation or decision can actually be counter-productive. Giving yourself more time to decide about something does not necessarily mean you will make a better decision. 
- **Relaxation**: If a problem is difficult, try relaxing the constraints and solve a simpler problem. You can apply these learning to the harder problem or might find that the solution to the simpler problem is sufficient. There are consequences to everything, you just decide whether you want to face those consequences when applying constraints to problems think of the “cost” of the constraint. Is the penalty/cost actually tolerable? There are three effective techniques for relaxing a difficult problem:
    - Constraint Relaxation: Remove or add constraints and make progress on a loser form of the problem before coming back.
    - Continuous Relaxation: Turn discrete or binary choices into continua.
    - Lagrangian Relaxation: Turn impossibilities into penalties (bending the rules), sometimes the penalties are worth it.  
- **Randomness**: Leave it to chance.
    - Sampling: It is a very effective method for learning about an unknown quantity. If you are stuck, try sampling the quantity with trial and error to learn more about it. There will always be an error associated with sampling, but if you take many samples this can be minimized.  Sampling can succeed where analysis fails. You can never be certain, but you can be awfully close.
- **Networking**: Networking in computer science concerns the way computers send messages to each other. For example, which protocol to use TCP/HTTP etc. and how those protocols relay information. Modern technology has meant we are always connected, people can reach us anywhere, anytime. This can lead to communication overload. However, the main problem is not that we are always connected, it is that we are always “buffered.” Then how do you get as many things done as fast as possible? The tactical dropping of balls is a critical part of getting things done under overload. Dropping messages that aren’t important will dramatically reduce cognitive effort and workload.
- **Game Theory**: Reducing the number of options can make decisions less computationally challenging and also lead to better outcomes. Information cascades can lead to rational decision-making. People’s actions are not necessarily their beliefs. When interacting with others where you need them to make a decision, you should narrow their choices to have a higher chance of a quicker response.
    - Leveling: Poker players use it. You only ever want to play one level about your opponent.
        - Level 1: I know.
        - Level 2: You know that I know.
        - Level 3: I know that you know that I know.
    - Prisoner’s Dilemma: An incentive to cheat. The paradox where two individuals acting in their own self-interest does not result in the optimal outcome. Succinctly, think of two prisoners being interrogated by a detective: if they rat each other out, they both have to serve time in the prison, but if only one rats the other out, he gets to walk away free while the other one goes behind the bars. If they both stay loyal to each other, both of them walk away free: but this optimal outcome will never be reached if both the prisoners act in their self-interest which is something you would expect them to do. This is the core problem used to introduce anyone to Game Theory.
    - Tragedy of the Commons: Cheating is easy and nobody will notice, and it’s not going to make a difference in the grand scheme of things. Problem is everyone thinks that way and everyone cheats. For example, climate change.
    - Competition: In Silicon Valley companies started giving unlimited vacations to compete for talent. The problem is everyone wants to take one less day than their peer to show loyalty and their ambition. It is a classic race to 0, so nobody ends up taking any holidays.

## III. Quotes
- But lest you think this is another fluffy brain book, it's actually hard computer programming with the occasional laugh-out-loud line. The team behind it are serious academics who have thought deeply about how computers think and how we can use those algorithms to make our lives easier. Which, when you think about it, isn't so crazy, because who taught the computers to think in the first place? We're just reclaiming tactics that are ours to begin with.
- The best algorithms are all about doing what makes the most sense in the least amount of time, which by no means involves giving careful consideration to every factor and pursuing every computation to the end. Life is just too complicated for that.
- People are almost always confronting what computer science regards as the hard cases. Up against such hard cases, effective algorithms make assumptions, show a bias toward simpler solutions, trade off the costs of error against the costs of delay, and take chances.
- A man with one watch knows what time it is, a man with two never knows.
- The mistakes made by people say more about the intrinsic difficulties of the problem, than the fallibility of the human brain.
- Timely proposals are often accepted, tardy are rarely.
- The best minds of my generation are making people click on ads.
- Tossing things on the top of the pile is the most efficient thing you can do, shy of knowing the future.
- The optimist thinks we are living in the best of all worlds, and the pessimist fears this is true.
- When we talk about decision-making, we usually focus just on the immediate payoff of a single decision—and if you treat every decision as if it were your last, then indeed only exploitation makes sense. But over a lifetime, you’re going to make a lot of decisions. And it’s actually rational to emphasize exploration—the new rather than the best, the exciting rather than the safe, the random rather than the considered—for many of those choices, particularly earlier in life.
- Don’t always consider all your options. Don’t necessarily go for the outcome that seems best every time. Make a mess on occasion. Travel light. Let things wait. Trust your instincts and don’t think too long. Relax. Toss a coin. Forgive, but don’t forget. To thine own self be true.
- Even the best strategy sometimes yields bad results—which is why computer scientists take care to distinguish between “process” and “outcome.” If you followed the best possible process, then you’ve done all you can, and you shouldn’t blame yourself if things didn’t go your way.
- Our judgments betray our expectations, and our expectations betray our experience. What we project about the future reveals a lot—about the world we live in, and about our own past.
- If you want to be a good intuitive Bayesian—if you want to naturally make good predictions, without having to think about what kind of prediction rule is appropriate—you need to protect your priors. Counterintuitively, that might mean turning off the news.
- If changing strategies doesn’t help, you can try to change the game. And if that’s not possible, you can at least exercise some control about which games you choose to play. The road to hell is paved with intractable recursions, bad equilibria, and information cascades. Seek out games where honesty is the dominant strategy. Then just be yourself.
- Sorting something you will never search is a complete waste. Searching something you never sorted is merely inefficient.
- No choice recurs. We may get similar choices again, but never that exact one. Hesitation—inaction—is just as irrevocable as action. What the motorist, locked on the one-way road, is to space, we are to the fourth dimension: we truly pass this way but once.
- To try and fail is at least to learn; to fail to try is to suffer the inestimable loss of what might have been.
- It’s fairly intuitive that never exploring is no way to live. But it’s also worth mentioning that never exploiting can be every bit as bad. In the computer science definition, exploitation actually comes to characterize many of what we consider to be life’s best moments. A family gathering together on the holidays is exploitation. So is a bookworm settling into a reading chair with a hot cup of coffee and a beloved favorite, or a band playing their greatest hits to a crowd of adoring fans, or a couple that has stood the test of time dancing to “their song.”
- The greater the uncertainty, the bigger the gap between what you can measure and what matters, the more you should watch out for overfitting - that is, the more you should prefer simplicity.
- Optimal stopping tells us when to look and when to leap. The explore/exploit tradeoff tells us how to find the balance between trying new things and enjoying our favorites. Sorting theory tells us how (and whether) to arrange our offices. Caching theory tells us how to fill our closets. Scheduling theory tells us how to fill our time.
- They don’t need a therapist; they need an algorithm.
- We say “brain fart” when we should really say “cache miss.” 
- Learning self-control is important, but it’s equally important to grow up in an environment where adults are consistently present and trustworthy.
- Tackling real-world tasks requires being comfortable with chance, trading off time with accuracy, and using approximations.
- In the long run, optimism is the best prevention for regret.
- Instead of thinking about only the next decision you will make, think about all of the decisions you are going to make about the same options in the future. 
- Seizing the day and seizing a lifetime are two entirely different endeavors.
- When balancing favorite experiences and new ones, nothing matters more than the interval over which we plan to enjoy them.
- The old adage tells us that “the grass is always greener on the other side of the fence,” but the math tells us why: the unknown has a chance of being better, even if we actually expect it to be no different, or if it’s just as likely to be worse.
- Explore when you will have time to use the resulting knowledge; exploit when you are ready to cash-in.
- Thrashing is a very recognizable human state. If you've ever had a moment where you wanted to stop doing everything just to have the chance to write down everything you were supposed to be doing, but couldn't spare the time, you've thrashed.
- Exploration in itself has value.
- Forgetting can be as important as remembering.
- How we spend our days is how we spend our lives.
- The best strategy for getting things done might be to slow down.
- If you can’t explain it simply, you don’t understand it well enough.
- The right action can produce a bad outcome. Process is all we have control over, not results.
- We can hope to be fortunate but we should strive to be wise.
- Use thick markers in brainstorming.
- Love is like organized crime.
- Communication is one of those delightful things that work only in practice; in theory it’s impossible.
- When our expectations are uncertain and the data are noisy, the best bet is to paint with a broad brush.
- Unless we have good reason to think otherwise, it seems that our best guide to the future is a mirror image of the past. The nearest thing to clairvoyance is to assume that history repeats itself — backward.
- When the future is foggy, it turns out you don’t need a calendar—just a to-do list.
- Learning the structure of the world around us and forming lasting social relationships are both lifelong tasks.
- Living by the wisdom of computer science doesn’t sound so bad after all. And unlike most advice, it’s backed up by proofs.
- Do the difficult things while they are easy and do the great things while they are small. — Lao Tzu