---
title: AlphaStar vs Team Liquid - AI Starcraft II showcase!
date: "2019-01-28"
featuredImage: './featured.jpg'
---

Today I give my take on a new AI leap forward. The first victory of an AI over a professional StarCraft II player.

<!-- end -->

[DeepMind](https://deepmind.com/) is a technology company focused on artificial intelligence was formed in London in 2010 and acquired by Google’s parent company Alphabet in 2014. It gained worldwide acclaim in 2016 when its intelligent agent [AlphaGo defeated Go legend Lee Sedol](https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol) by 4 games to 1 in an exhibition game in Seoul, South Korea. This was seen as a landmark as victory in a game such as Go was deemed to require much more intelligence and reasoning than other AI benchmark games such as chess.

When I read this, I was seriously impressed, but it did leave me thinking. “I wonder if they’ll ever get it to play StarCraft”. They answered my question this weekend.

## Starcraft II

For the uninitiated; Starcraft II is an evolution of the original StarCraft game, launched in 1998 and is widely considered the greatest Real-Time Strategy (RTS) game of all time. Unofficially the national sport of South Korea, this game (and more specifically the original Brood War expansion park) helped cement eSports as an actual thing where people could earn a living. StarCraft II launched in 2010, with two expansions in 2013 and 2015. 

At it its heart, it is a RTS where the object of the game is to develop and army based on finite resources and crush your opponent. Building a successful strategy normally requires a nuanced approach to balancing economy and army, building the correct buildings at the correct time and controlling your combat units to maximise their effectiveness. The units in game normally have a rock-paper-scissors analogy, where some units are highly-effective against others, which in turn have their own weaknesses. Players can choose between the human-based Terrans, the insectoid Zerg or the highly-evolved Psionic Protoss. Each race has its own advantages and disdvantages with Blizzard (the developers) consistently making small changes to the mechanics to ensure balance. 

My preference (when I played, and when I played, I was **not** very good) was Zerg, but everyone has their own favourite.

## AlphaStar

AlphaStar is the intelligence developed by DeepMind, based on neural networks and associated learning techniques to learn how to play and win at StarCraft II. It was developed originally based on human players and playstyles, but it learned most of its techniques in the AlphaStar league, where variations of agents played each other again and again for a human equivalent of 200 years of play. From this the top 5 agents were selected to play two of the best players in the world.

## Team Liquid’s TLO and MaNa

Two of Team Liquid’s best players: Dario "TLO" Wünsch and Grzegorz "MaNa" Komincz agreed to travel to London and play a 5 match series against AlphaStar. All of the replays are available [here](https://deepmind.com/research/alphastar-resources/). Below are my takeaways from watching the matches, along with the commentary from the DeepMind team on the stream [here](https://www.youtube.com/watch?v=cUTMhmVh1qs).

## Mirror Mirror

All of the matches were played as a “mirror matchup”. This means they were played where the two teams were playing the same race; in this case Protoss. This makes sense from a learning perspective, as it makes the game even fairer (as even with balance patches people still say the races are imbalanced). It also means as the agent sees strategies employed against it, the agent will implicitly know how these mechanics work. 

## Fog of War

What makes this leap for DeepMind so interesting, from my perspective is it has moved from a game of *complete information*, to a game where a player does not have information about what his opponent is doing. Everything that the players units or buildings cannot see is covered by the fog of war, a shroud where the player cannot see. This means AlphaStar has to not only anticipate its opponents next move, it has to anticipate its opponents current status including supply count, army size, upgrades etc. 

## Protoss Only

It is interesting they chose Protoss as the race to play. I think a lot of the StarCraft fans across the world will be queuing up with the question: “When will we see AlphaStar play the other races?”. It makes sense they’ve started with Protoss, as Protoss tends to be less reactive and favours higher cost spell-casting units which need micro-management. I would love to see how it plays against (or as) a Zerg player, as that race is much more reactive and can change tech and strategy much more quickly on the fly.

## Birds Eye View

One of the things that becomes obvious when you watch the replays is that AlphaStar doesn’t have a “camera” per-se. When you play at a human you cannot see the whole map at once, so you have to move the camera around to different locations (e.g. your main, natural, army, scouts) as you cannot act on units or buildings if they are not in the field of view. AlphaStar can see the whole map at once, so anything it has vision on, it can see. This was remedied in the live Bo1 match that MaNa played at the end of the stream, which may have affected the result. 

## Micro is the new Macro
One of the things that you learn when you play StarCraft is that the game is a balance of macro and micro. Macro meaning the management of your workers, economy and upgrades and micro meaning the micro-management of individual and groups of army units to maximise their potential. AlphaStar has outstanding micro-management skills, and because it is able to see the whole map at once, it can micro-control many more groups of units than a human could. Even though it’s actions-per-minute (APM) were averaged out as less than a human, the fact it is able to make all those actions count for so much really allowed it to overpower a unit composition (Chargelot/Immortal) that would usually annihilate the weaker composition that could be micro-managed (Blink Stalker).

## Overprobing, the new meta?

One of the things that happened every single game that AlphaStar played was the fact it over-probed in the main. It’s accepted that 16 probes on minerals is the optimal amount, anything more and you should be expanding to a second base. AlphaStar went up to 24 probes on a single base, which seems like an amateur play to most of the commentators. However what is quite interesting is I believe this was AlphaStars optimal answer to the Adept or Oracle early game harass. It decided the best way to defend against losing probes in the early game is to simply accept it, and build more probes. In the eventuality that the harass didn’t come then by the time the natural was taken, it was fully saturated with probes. The icing on the cake for this was when MaNa actually used the same strategy in the final game. A rare example of an AI teaching a human!

## Conclusion

I think this is a great exhibition for where AI has come and where it is going. Big thanks to Blizzard, DeepMind and all those involved for bringing all the detail to the fans. I’ll link the main stream (it’s long, but the first 30 mins can be skipped) and the behind-the-scenes video below. Another shout out to how excellently mannered and friendly all those involved in the StarCraft community are (even if AlphaStar cannot throw out a GG), Dario and Grzegorz are super-awesome and it shows how the politeness of South Korean culture has influenced the fandom around the game.

[2 Hour Stream](https://www.youtube.com/watch?v=cUTMhmVh1qs&feature=youtu.be) (including commentary from [@Artosis](https://twitter.com/Artosis) and [@RotterdaM08](https://twitter.com/RotterdaM08), and Q&A with the DeepMind team, [@LiquidTLO](https://twitter.com/LiquidTLO) and [@Liquid_MaNa](https://twitter.com/Liquid_MaNa))

[Behind the Scenes with AlphaStar](https://www.youtube.com/watch?v=UuhECwm31dM&feature=youtu.be)

[DeepMind Article on how it all works](https://deepmind.com/blog/alphastar-mastering-real-time-strategy-game-starcraft-ii/)