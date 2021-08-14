const Content = ({ title }) => {
     return (
          <content className = 'content'>
               <p>
                  {`Magic: The Gathering Comprehensive Rules\n

These rules are effective as of April 22, 2021.

Introduction

This document is the ultimate authority for Magic: The Gathering® competitive game play. It consists of a series of numbered rules followed by a glossary. Many of the numbered rules are divided into subrules, and each separate rule and subrule of the game has its own number. (Note that subrules skip the letters “l” and “o” due to potential confusion with the numbers “1” and “0”; subrule 704.5k is followed by 704.5m, then 704.5n, then 704.5p, for example.)

Changes may have been made to this document since its publication. You can download the most recent version from the Magic rules website at Magic.Wizards.com/Rules. If you have questions, you can get the answers from us at Support.Wizards.com.

Contents

1. Game Concepts
100. General
101. The Magic Golden Rules
102. Players
103. Starting the Game
104. Ending the Game
105. Colors
106. Mana
107. Numbers and Symbols
108. Cards
109. Objects
110. Permanents
111. Tokens
112. Spells
113. Abilities
114. Emblems
115. Targets
116. Special Actions
117. Timing and Priority
118. Costs
119. Life
120. Damage
121. Drawing a Card
122. Counters

2. Parts of a Card
200. General
201. Name
202. Mana Cost and Color
203. Illustration
204. Color Indicator
205. Type Line
206. Expansion Symbol
207. Text Box
208. Power/Toughness
209. Loyalty
210. Hand Modifier
211. Life Modifier
212. Information Below the Text Box

3. Card Types
300. General
301. Artifacts
302. Creatures
303. Enchantments
304. Instants
305. Lands
306. Planeswalkers
307. Sorceries
308. Tribals
309. Planes
310. Phenomena
311. Vanguards
312. Schemes
313. Conspiracies

4. Zones
400. General
401. Library
402. Hand
403. Battlefield
404. Graveyard
405. Stack
406. Exile
407. Ante
408. Command

5. Turn Structure
500. General
501. Beginning Phase
502. Untap Step
503. Upkeep Step
504. Draw Step
505. Main Phase
506. Combat Phase
507. Beginning of Combat Step
508. Declare Attackers Step
509. Declare Blockers Step
510. Combat Damage Step
511. End of Combat Step
512. Ending Phase
513. End Step
514. Cleanup Step

6. Spells, Abilities, and Effects
600. General
601. Casting Spells
602. Activating Activated Abilities
603. Handling Triggered Abilities
604. Handling Static Abilities
605. Mana Abilities
606. Loyalty Abilities
607. Linked Abilities
608. Resolving Spells and Abilities
609. Effects
610. One-Shot Effects
611. Continuous Effects
612. Text-Changing Effects
613. Interaction of Continuous Effects
614. Replacement Effects
615. Prevention Effects
616. Interaction of Replacement and/or Prevention Effects

7. Additional Rules
700. General
701. Keyword Actions
702. Keyword Abilities
703. Turn-Based Actions
704. State-Based Actions
705. Flipping a Coin
706. Copying Objects
707. Face-Down Spells and Permanents
708. Split Cards
709. Flip Cards
710. Leveler Cards
711. Double-Faced Cards
712. Meld Cards
713. Substitute Cards
714. Saga Cards
715. Adventurer Cards
716. Controlling Another Player
717. Ending Turns and Phases
718. The Monarch
719. Restarting the Game
720. Subgames
721. Merging with Permanents
722. Taking Shortcuts
723. Handling Illegal Actions

8. Multiplayer Rules
800. General
801. Limited Range of Influence Option
802. Attack Multiple Players Option
803. Attack Left and Attack Right Options
804. Deploy Creatures Option
805. Shared Team Turns Option
806. Free-for-All Variant
807. Grand Melee Variant
808. Team vs. Team Variant
809. Emperor Variant
810. Two-Headed Giant Variant
811. Alternating Teams Variant

9. Casual Variants
900. General
901. Planechase
902. Vanguard
903. Commander
904. Archenemy
905. Conspiracy Draft

Glossary

Credits

1. Game Concepts

100. General

100.1. These Magic rules apply to any Magic game with two or more players, including two-player games and multiplayer games.

100.1a A two-player game is a game that begins with only two players.

100.1b A multiplayer game is a game that begins with more than two players. See section 8, “Multiplayer Rules.”

100.2. To play, each player needs their own deck of traditional Magic cards, small items to represent any tokens and counters, and some way to clearly track life totals.

100.2a In constructed play (a way of playing in which each player creates their own deck ahead of time), each deck has a minimum deck size of 60 cards. A constructed deck may contain any number of basic land cards and no more than four of any card with a particular English name other than basic land cards.

100.2b In limited play (a way of playing in which each player gets the same quantity of unopened Magic product such as booster packs and creates their own deck using only this product and basic land cards), each deck has a minimum deck size of 40 cards. A limited deck may contain as many duplicates of a card as are included with the product.

100.2c Commander decks are subject to additional deckbuilding restrictions and requirements. See rule 903, “Commander,” for details.

100.3. Some casual variants require additional items, such as specially designated cards, nontraditional Magic cards, and dice. See section 9, “Casual Variants.”

100.4. Each player may also have a sideboard, which is a group of additional cards the player may use to modify their deck between games of a match.

100.4a In constructed play, a sideboard may contain no more than fifteen cards. The four-card limit (see rule 100.2a) applies to the combined deck and sideboard.

100.4b In limited play involving individual players, all cards in a player’s card pool not included in their deck are in that player’s sideboard.

100.4c In limited play involving the Two-Headed Giant multiplayer variant, all cards in a team’s card pool but not in either player’s deck are in that team’s sideboard.

100.4d In limited play involving other multiplayer team variants, each card in a team’s card pool but not in any player’s deck is assigned to the sideboard of one of those players. Each player has their own sideboard; cards may not be transferred between players.

100.5. If a deck must contain at least a certain number of cards, that number is referred to as a minimum deck size. There is no maximum deck size for non-Commander decks.

100.6. Most Magic tournaments (organized play activities where players compete against other players to win prizes) have additional rules covered in the Magic: The Gathering Tournament Rules (found at WPN.Wizards.com/en/resources/rules-documents). These rules may limit the use of some cards, including barring all cards from some older sets.

100.6a Tournaments usually consist of a series of matches. A two-player match usually involves playing until one player has won two games. A multiplayer match usually consists of only one game.

100.6b Players can use the Magic Store & Event Locator at Wizards.com/Locator to find tournaments in their area.

100.7. Certain promotional cards and cards in the Unglued, Unhinged, and Unstable sets are printed with a silver border. These cards are intended for casual play and may have features and text that aren’t covered by these rules.

101. The Magic Golden Rules

101.1. Whenever a card’s text directly contradicts these rules, the card takes precedence. The card overrides only the rule that applies to that specific situation. The only exception is that a player can concede the game at any time (see rule 104.3a).

101.2. When a rule or effect allows or directs something to happen, and another effect states that it can’t happen, the “can’t” effect takes precedence.
Example: If one effect reads “You may play an additional land this turn” and another reads “You can’t play lands this turn,” the effect that precludes you from playing lands wins.

101.2a Adding abilities to objects and removing abilities from objects don’t fall under this rule. (See rule 113.10.)

101.3. Any part of an instruction that’s impossible to perform is ignored. (In many cases the card will specify consequences for this; if it doesn’t, there’s no effect.)

101.4. If multiple players would make choices and/or take actions at the same time, the active player (the player whose turn it is) makes any choices required, then the next player in turn order (usually the player seated to the active player’s left) makes any choices required, followed by the remaining nonactive players in turn order. Then the actions happen simultaneously. This rule is often referred to as the “Active Player, Nonactive Player (APNAP) order” rule.
Example: A card reads “Each player sacrifices a creature.” First, the active player chooses a creature they control. Then each of the nonactive players, in turn order, chooses a creature they control. Then all creatures chosen this way are sacrificed simultaneously.

101.4a If an effect has each player choose a card in a hidden zone, such as their hand or library, those cards may remain face down as they’re chosen. However, each player must clearly indicate which face-down card they are choosing.

101.4b A player knows the choices made by the previous players when making their choice, except as specified in 101.4a.

101.4c If a player would make more than one choice at the same time, the player makes the choices in the order specified. If no order is specified, the player chooses the order.

101.4d If a choice made by a nonactive player causes the active player, or a different nonactive player earlier in the turn order, to have to make a choice, APNAP order is restarted for all outstanding choices.

101.4e If multiple players would make choices or take actions while starting the game, the starting player is considered the active player and each other player is considered a nonactive player.

102. Players

102.1. A player is one of the people in the game. The active player is the player whose turn it is. The other players are nonactive players.

102.2. In a two-player game, a player’s opponent is the other player.

102.3. In a multiplayer game between teams, a player’s teammates are the other players on their team, and the player’s opponents are all players not on their team.

102.4. A spell or ability may use the term “your team” as shorthand for “you and/or your teammates.” In a game that isn’t a multiplayer game between teams, “your team” means the same thing as “you.”

103. Starting the Game

103.1. At the start of a game, the players determine which one of them will choose who takes the first turn. In the first game of a match (including a single-game match), the players may use any mutually agreeable method (flipping a coin, rolling dice, etc.) to do so. In a match of several games, the loser of the previous game chooses who takes the first turn. If the previous game was a draw, the player who made the choice in that game makes the choice in this game. The player chosen to take the first turn is the starting player. The game’s default turn order begins with the starting player and proceeds clockwise.

103.1a In a game using the shared team turns option, there is a starting team rather than a starting player.

103.1b In an Archenemy game, these methods aren’t used to determine who takes the first turn. Rather, the archenemy takes the first turn.

103.1c One card (Power Play) states that its controller is the starting player. This effect applies after this determination has happened and supersedes these methods.

103.2. After the starting player has been determined, each player shuffles their deck so that the cards are in a random order. Each player may then shuffle or cut their opponents’ decks. The players’ decks become their libraries.

103.2a If a player is using a sideboard (see rule 100.4) or cards being represented by substitute cards (see rule 713), those cards are set aside before shuffling.

103.2b If a player wishes to reveal a card with a companion ability that they own from outside the game, they may do so after setting aside their sideboard. A player may reveal no more than one card this way, and they may do so only if their deck fulfills the condition of that card’s companion ability. (See rule 702.139, “Companion.”)

103.2c In a Commander game, each player puts their commander from their deck face up into the command zone after having the opportunity to reveal a card with a companion ability and before shuffling. See rule 903.6.

103.2d In a Conspiracy Draft game, each player puts any number of conspiracy cards from their sideboard into the command zone before shuffling. See rule 905.4.

103.3. Each player begins the game with a starting life total of 20. Some variant games have different starting life totals.

103.3a In a Two-Headed Giant game, each team’s starting life total is 30.

103.3b In a Vanguard game, each player’s starting life total is 20 plus or minus the life modifier of their vanguard card.

103.3c In a Commander game, each player’s starting life total is 40.

103.3d In a two-player Brawl game, each player’s starting life total is 25. In a multiplayer Brawl game, each player’s starting life total is 30.

103.3e In an Archenemy game, the archenemy’s starting life total is 40.

103.4. Each player draws a number of cards equal to their starting hand size, which is normally seven. (Some effects can modify a player’s starting hand size.) A player who is dissatisfied with their initial hand may take a mulligan. First, the starting player declares whether they will take a mulligan. Then each other player in turn order does the same. Once each player has made a declaration, all players who decided to take mulligans do so at the same time. To take a mulligan, a player shuffles the cards in their hand back into their library, draws a new hand of cards equal to their starting hand size, then puts a number of those cards equal to the number of times that player has taken a mulligan on the bottom of their library in any order. Once a player chooses not to take a mulligan, the remaining cards become that player’s opening hand, and that player may not take any further mulligans. This process is then repeated until no player takes a mulligan. A player can take mulligans until their opening hand would be zero cards, after which they may not take further mulligans.

103.4a In a Vanguard game, each player’s starting hand size is seven plus or minus the hand modifier of their vanguard card.

103.4b If an effect allows a player to perform an action “any time [that player] could mulligan,” the player may perform that action at a time they would declare whether they will take a mulligan. This need not be in the first round of mulligans. Other players may have already made their mulligan declarations by the time the player has the option to perform this action. If the player performs the action, they then declare whether they will take a mulligan.

103.4c In a multiplayer game and in any Brawl game, the first mulligan a player takes doesn’t count toward the number of cards that player will put on the bottom of their library or the number of mulligans that player may take. Subsequent mulligans are counted toward these numbers as normal.

103.4d In a multiplayer game using the shared team turns option, first each player on the starting team declares whether that player will take a mulligan, then the players on each other team in turn order do the same. Teammates may consult while making their decisions. Then all mulligans are taken at the same time. A player may take a mulligan even after a teammate has decided to keep their opening hand.

103.5. Some cards allow a player to take actions with them from their opening hand. Once the mulligan process (see rule 103.4) is complete, the starting player may take any such actions in any order. Then each other player in turn order may do the same.

103.5a If a card allows a player to begin the game with that card on the battlefield, the player taking this action puts that card onto the battlefield.

103.5b If a card allows a player to reveal it from their opening hand, the player taking this action does so. The card remains revealed until the first turn begins. Each card may be revealed this way only once.

103.5c In a multiplayer game using the shared team turns option, first each player on the starting team, in whatever order that team likes, may take such actions. Teammates may consult while making their decisions. Then each player on each other team in turn order does the same.

103.6. In a Planechase game, the starting player moves the top card of their planar deck off that planar deck and turns it face up. If it’s a phenomenon card, the player puts that card on the bottom of their planar deck and repeats this process until a plane card is turned face up. The face-up plane card becomes the starting plane. (See rule 901, “Planechase.”)

103.7. The starting player takes their first turn.

103.7a In a two-player game, the player who plays first skips the draw step (see rule 504, “Draw Step”) of their first turn.

103.7b In a Two-Headed Giant game, the team who plays first skips the draw step of their first turn.

103.7c In all other multiplayer games, no player skips the draw step of their first turn.

104. Ending the Game

104.1. A game ends immediately when a player wins, when the game is a draw, or when the game is restarted.

104.2. There are several ways to win the game.

104.2a A player still in the game wins the game if that player’s opponents have all left the game. This happens immediately and overrides all effects that would preclude that player from winning the game.

104.2b An effect may state that a player wins the game.

104.2c In a multiplayer game between teams, a team with at least one player still in the game wins the game if all other teams have left the game. Each player on the winning team wins the game, even if one or more of those players had previously lost that game.

104.2d In an Emperor game, a team wins the game if its emperor wins the game. (See rule 809.5.)

104.3. There are several ways to lose the game.

104.3a A player can concede the game at any time. A player who concedes leaves the game immediately. That player loses the game.

104.3b If a player’s life total is 0 or less, that player loses the game the next time a player would receive priority. (This is a state-based action. See rule 704.)

104.3c If a player is required to draw more cards than are left in their library, they draw the remaining cards and then lose the game the next time a player would receive priority. (This is a state-based action. See rule 704.)

104.3d If a player has ten or more poison counters, that player loses the game the next time a player would receive priority. (This is a state-based action. See rule 704.)

104.3e An effect may state that a player loses the game.

104.3f If a player would both win and lose the game simultaneously, that player loses the game.

104.3g In a multiplayer game between teams, a team loses the game if all players on that team have lost the game.

104.3h In a multiplayer game using the limited range of influence option (see rule 801), an effect that states that a player wins the game instead causes all of that player’s opponents within the player’s range of influence to lose the game. This may not cause the game to end.

104.3i In an Emperor game, a team loses the game if its emperor loses the game. (See rule 809.5.)

104.3j In a Commander game, a player that’s been dealt 21 or more combat damage by the same commander over the course of the game loses the game. (This is a state-based action. See rule 704. See also rule 903.10.)

104.3k In a tournament, a player may lose the game as a result of a penalty given by a judge. See rule 100.6.

104.4. There are several ways for the game to be a draw.

104.4a If all the players remaining in a game lose simultaneously, the game is a draw.

104.4b If a game that’s not using the limited range of influence option (including a two-player game) somehow enters a “loop” of mandatory actions, repeating a sequence of events with no way to stop, the game is a draw. Loops that contain an optional action don’t result in a draw.

104.4c An effect may state that the game is a draw.

104.4d In a multiplayer game between teams, the game is a draw if all remaining teams lose simultaneously.

104.4e In a multiplayer game using the limited range of influence option, the effect of a spell or ability that states that the game is a draw causes the game to be a draw for that spell or ability’s controller and all players within their range of influence. Only those players leave the game; the game continues for all other players.

104.4f In a multiplayer game using the limited range of influence option, if the game somehow enters a “loop” of mandatory actions, repeating a sequence of events with no way to stop, the game is a draw for each player who controls an object that’s involved in that loop, as well as for each player within the range of influence of any of those players. Only those players leave the game; the game continues for all other players.

104.4g In a multiplayer game between teams, the game is a draw for a team if the game is a draw for all remaining players on that team.

104.4h In the Emperor variant, the game is a draw for a team if the game is a draw for its emperor. (See rule 809.5.)

104.4i In a tournament, all players in the game may agree to an intentional draw. See rule 100.6.

104.5. If a player loses the game, that player leaves the game. If the game is a draw for a player, that player leaves the game. The multiplayer rules handle what happens when a player leaves the game; see rule 800.4.

104.6. One card (Karn Liberated) restarts the game. All players still in the game when it restarts then immediately begin a new game. See rule 719, “Restarting the Game.”

105. Colors

105.1. There are five colors in the Magic game: white, blue, black, red, and green.

105.2. An object can be one or more of the five colors, or it can be no color at all. An object is the color or colors of the mana symbols in its mana cost, regardless of the color of its frame. An object’s color or colors may also be defined by a color indicator or a characteristic-defining ability. See rule 202.2.

105.2a A monocolored object is exactly one of the five colors.

105.2b A multicolored object is two or more of the five colors.

105.2c A colorless object has no color.

105.3. Effects may change an object’s color or give a color to a colorless object. If an effect gives an object a new color, the new color replaces all previous colors the object had (unless the effect said the object became that color “in addition” to its other colors). Effects may also make a colored object become colorless.

105.4. If a player is asked to choose a color, they must choose one of the five colors. “Multicolored” is not a color. Neither is “colorless.”

105.5. If an effect refers to a color pair, it means exactly two of the five colors. There are ten color pairs: white and blue, white and black, blue and black, blue and red, black and red, black and green, red and green, red and white, green and white, and green and blue.

106. Mana

106.1. Mana is the primary resource in the game. Players spend mana to pay costs, usually when casting spells and activating abilities.

106.1a There are five colors of mana: white, blue, black, red, and green.

106.1b There are six types of mana: white, blue, black, red, green, and colorless.

106.2. Mana is represented by mana symbols (see rule 107.4). Mana symbols also represent mana costs (see rule 202).

106.3. Mana is produced by the effects of mana abilities (see rule 605). It may also be produced by the effects of spells, as well as by the effects of abilities that aren’t mana abilities. A spell or ability that produces mana instructs a player to add that mana. If mana is produced by a spell, the source of that mana is that spell. If mana is produced by an ability, the source of that mana is the source of that ability (see rule 113.7).

106.4. When an effect instructs a player to add mana, that mana goes into a player’s mana pool. From there, it can be used to pay costs immediately, or it can stay in the player’s mana pool as unspent mana. Each player’s mana pool empties at the end of each step and phase, and the player is said to lose this mana. Cards with abilities that produce mana or refer to unspent mana have received errata in the Oracle™ card reference to no longer explicitly refer to the mana pool.

106.4a If any mana remains in a player’s mana pool after mana is spent to pay a cost, that player announces what mana is still there.

106.4b If a player passes priority (see rule 117) while there is mana in their mana pool, that player announces what mana is there.

106.5. If an ability would produce one or more mana of an undefined type, it produces no mana instead.
Example: Meteor Crater has the ability “{T}: Choose a color of a permanent you control. Add one mana of that color.” If you control no colored permanents, activating Meteor Crater’s mana ability produces no mana.

106.6. Some spells or abilities that produce mana restrict how that mana can be spent, have an additional effect that affects the spell or ability that mana is spent on, or create a delayed triggered ability (see rule 603.7a) that triggers when that mana is spent. This doesn’t affect the mana’s type.
Example: A player’s mana pool contains {R}{G} which can be spent only to cast creature spells. That player activates Doubling Cube’s ability, which reads “{3}, {T}: Double the amount of each type of unspent mana you have.” The player’s mana pool now has {R}{R}{G}{G} in it, {R}{G} of which can be spent on anything.

106.6a Some replacement effects increase the amount of mana produced by a spell or ability. In these cases, any restrictions or additional effects created by the spell or ability will apply to all mana produced. If the spell or ability creates a delayed triggered ability that triggers when the mana is spent, a separate delayed triggered ability is created for each mana produced. If the spell or ability creates a continuous effect or replacement effect if the mana is spent, a separate effect is created once for each mana produced.

106.7. Some abilities produce mana based on the type of mana another permanent or permanents “could produce.” The type of mana a permanent could produce at any time includes any type of mana that an ability of that permanent would produce if the ability were to resolve at that time, taking into account any applicable replacement effects in any possible order. Ignore whether any costs of the ability could or could not be paid. If that permanent wouldn’t produce any mana under these conditions, or no type of mana can be defined this way, there’s no type of mana it could produce.
Example: Exotic Orchard has the ability “{T}: Add one mana of any color that a land an opponent controls could produce.” If your opponent controls no lands, activating Exotic Orchard’s mana ability will produce no mana. The same is true if you and your opponent each control no lands other than Exotic Orchards. However, if you control a Forest and an Exotic Orchard, and your opponent controls an Exotic Orchard, then each Exotic Orchard could produce {G}.

106.8. If an effect would add mana represented by a hybrid mana symbol to a player’s mana pool, that player chooses one half of that symbol. If a colored half is chosen, one mana of that color is added to that player’s mana pool. If a generic half is chosen, an amount of colorless mana represented by that half’s number is added to that player’s mana pool.

106.9. If an effect would add mana represented by a Phyrexian mana symbol to a player’s mana pool, one mana of the color of that symbol is added to that player’s mana pool.

106.10. If an effect would add mana represented by a generic mana symbol to a player’s mana pool, that much colorless mana is added to that player’s mana pool.

106.11. If an effect would add mana represented by one or more snow mana symbols to a player’s mana pool, that much colorless mana is added to that player’s mana pool.

106.12. To “tap [a permanent] for mana” is to activate a mana ability of that permanent that includes the {T} symbol in its activation cost. See rule 605, “Mana Abilities.”

106.12a An ability that triggers whenever a permanent “is tapped for mana” or is tapped for mana of a specified type triggers whenever such a mana ability resolves and produces mana or the specified type of mana.

106.12b A replacement effect that applies if a permanent “is tapped for mana” or tapped for mana of a specific type and/or amount modifies the mana production event while such an ability is resolving and producing mana or the specified type and/or amount of mana.

106.13. One card (Drain Power) causes one player to lose unspent mana and another to add “the mana lost this way.” (Note that these may be the same player.) This empties the former player’s mana pool and causes the mana emptied this way to be put into the latter player’s mana pool. Which permanents, spells, and/or abilities produced that mana are unchanged, as are any restrictions or additional effects associated with any of that mana.

107. Numbers and Symbols

107.1. The only numbers the Magic game uses are integers.

107.1a You can’t choose a fractional number, deal fractional damage, gain fractional life, and so on. If a spell or ability could generate a fractional number, the spell or ability will tell you whether to round up or down.

107.1b Most of the time, the Magic game uses only positive numbers and zero. You can’t choose a negative number, deal negative damage, gain negative life, and so on. However, it’s possible for a game value, such as a creature’s power, to be less than zero. If a calculation or comparison needs to use a negative value, it does so. If a calculation that would determine the result of an effect yields a negative number, zero is used instead, unless that effect doubles or sets to a specific value a player’s life total or the power and/or toughness of a creature or creature card.
Example: If a 3/4 creature gets -5/-0, it’s a -2/4 creature. It doesn’t assign damage in combat. Its total power and toughness is 2. Giving it +3/+0 would raise its power to 1.
Example: Viridian Joiner is a 1/2 creature with the ability “{T}: Add an amount of {G} equal to Viridian Joiner’s power.” An effect gives it -2/-0, then its ability is activated. The ability adds no mana to your mana pool.
Example: Chameleon Colossus is a 4/4 creature with the ability “{2}{G}{G}: Chameleon Colossus gets +X/+X until end of turn, where X is its power.” An effect gives it -6/-0, then its ability is activated. It remains a -2/4 creature. It doesn’t become -4/2.

107.1c If a rule or ability instructs a player to choose “any number,” that player may choose any positive number or zero.

107.2. If anything needs to use a number that can’t be determined, either as a result or in a calculation, it uses 0 instead.

107.3. Many objects use the letter X as a placeholder for a number that needs to be determined. Some objects have abilities that define the value of X; the rest let their controller choose the value of X.

107.3a If a spell or activated ability has a mana cost, alternative cost, additional cost, and/or activation cost with an {X}, [-X], or X in it, and the value of X isn’t defined by the text of that spell or ability, the controller of that spell or ability chooses and announces the value of X as part of casting the spell or activating the ability. (See rule 601, “Casting Spells.”) While a spell is on the stack, any X in its mana cost or in any alternative cost or additional cost it has equals the announced value. While an activated ability is on the stack, any X in its activation cost equals the announced value.

107.3b If a player is casting a spell that has an {X} in its mana cost, the value of X isn’t defined by the text of that spell, and an effect lets that player cast that spell while paying neither its mana cost nor an alternative cost that includes X, then the only legal choice for X is 0. This doesn’t apply to effects that only reduce a cost, even if they reduce it to zero. See rule 601, “Casting Spells.”

107.3c If a spell or activated ability has an {X}, [-X], or X in its cost and/or its text, and the value of X is defined by the text of that spell or ability, then that’s the value of X while that spell or ability is on the stack. The controller of that spell or ability doesn’t get to choose the value. Note that the value of X may change while that spell or ability is on the stack.

107.3d If a cost associated with a special action, such as a suspend cost or a morph cost, has an {X} or an X in it, the value of X is chosen by the player taking the special action immediately before they pay that cost.

107.3e If a spell or ability refers to the {X} or X in the mana cost, alternative cost, additional cost, or activation cost of another object, any X in that spell or ability’s text uses the value of X chosen or defined for the other object.

107.3f Sometimes X appears in the text of a spell or ability but not in a mana cost, alternative cost, additional cost, or activation cost. If the value of X isn’t defined, the controller of the spell or ability chooses the value of X at the appropriate time (either as it’s put on the stack or as it resolves).

107.3g If a card in any zone other than the stack has an {X} in its mana cost, the value of {X} is treated as 0, even if the value of X is defined somewhere within its text.

107.3h If an effect instructs a player to pay an object’s mana cost that includes {X}, the value of X is treated as 0 unless the object is a spell on the stack. In that case, the value of X is the value chosen or determined for it as the spell was cast.

107.3i Normally, all instances of X on an object have the same value at any given time.

107.3j If an object gains an ability, the value of X within that ability is the value defined by that ability, or 0 if that ability doesn’t define a value of X. This is an exception to rule 107.3i. This may occur with ability-adding effects, text-changing effects, or copy effects.

107.3k If an object’s activated ability has an {X}, [-X], or X in its activation cost, the value of X for that ability is independent of any other values of X chosen for that object or for other instances of abilities of that object. This is an exception to rule 107.3i.

107.3m If an object’s enters-the-battlefield triggered ability or replacement effect refers to X, and the spell that became that object as it resolved had a value of X chosen for any of its costs, the value of X for that ability is the same as the value of X for that spell, although the value of X for that permanent is 0. This is an exception to rule 107.3i.

107.3n Some objects use the letter Y in addition to the letter X. Y follows the same rules as X.

107.4. The mana symbols are {W}, {U}, {B}, {R}, {G}, and {C}; the numerical symbols {0}, {1}, {2}, {3}, {4}, and so on; the variable symbol {X}; the hybrid symbols {W/U}, {W/B}, {U/B}, {U/R}, {B/R}, {B/G}, {R/G}, {R/W}, {G/W}, and {G/U}; the monocolored hybrid symbols {2/W}, {2/U}, {2/B}, {2/R}, and {2/G}; the Phyrexian mana symbols {W/P}, {U/P}, {B/P}, {R/P}, and {G/P}; and the snow mana symbol {S}.

107.4a There are five primary colored mana symbols: {W} is white, {U} blue, {B} black, {R} red, and {G} green. These symbols are used to represent colored mana, and also to represent colored mana in costs. Colored mana in costs can be paid only with the appropriate color of mana. See rule 202, “Mana Cost and Color.”

107.4b Numerical symbols (such as {1}) and variable symbols (such as {X}) represent generic mana in costs. Generic mana in costs can be paid with any type of mana. For more information about {X}, see rule 107.3.

107.4c The colorless mana symbol {C} is used to represent one colorless mana, and also to represent a cost that can be paid only with one colorless mana.

107.4d The symbol {0} represents zero mana and is used as a placeholder for a cost that can be paid with no resources. (See rule 118.5.)

107.4e Hybrid mana symbols are also colored mana symbols. Each one represents a cost that can be paid in one of two ways, as represented by the two halves of the symbol. A hybrid symbol such as {W/U} can be paid with either white or blue mana, and a monocolored hybrid symbol such as {2/B} can be paid with either one black mana or two mana of any type. A hybrid mana symbol is all of its component colors.
Example: {G/W}{G/W} can be paid by spending {G}{G}, {G}{W}, or {W}{W}.

107.4f Phyrexian mana symbols are colored mana symbols: {W/P} is white, {U/P} is blue, {B/P} is black, {R/P} is red, and {G/P} is green. A Phyrexian mana symbol represents a cost that can be paid either with one mana of its color or by paying 2 life.
Example: {W/P}{W/P} can be paid by spending {W}{W}, by spending {W} and paying 2 life, or by paying 4 life.

107.4g In rules text, the Phyrexian symbol {P} with no colored background means any of the five Phyrexian mana symbols.

107.4h When used in a cost, the snow mana symbol {S} represents a cost that can be paid with one mana of any type produced by a snow source (see rule 106.3). Effects that reduce the amount of generic mana you pay don’t affect {S} costs. The {S} symbol can also be used to refer to mana of any type produced by a snow source spent to pay a cost. Snow is neither a color nor a type of mana.

107.5. The tap symbol is {T}. The tap symbol in an activation cost means “Tap this permanent.” A permanent that’s already tapped can’t be tapped again to pay the cost. A creature’s activated ability with the tap symbol in its activation cost can’t be activated unless the creature has been under its controller’s control continuously since their most recent turn began. See rule 302.6.

107.6. The untap symbol is {Q}. The untap symbol in an activation cost means “Untap this permanent.” A permanent that’s already untapped can’t be untapped again to pay the cost. A creature’s activated ability with the untap symbol in its activation cost can’t be activated unless the creature has been under its controller’s control continuously since their most recent turn began. See rule 302.6.

107.7. Each activated ability of a planeswalker has a loyalty symbol in its cost. Positive loyalty symbols point upward and feature a plus sign followed by a number. Negative loyalty symbols point downward and feature a minus sign followed by a number or an X. Neutral loyalty symbols don’t point in either direction and feature a 0. [+N] means “Put N loyalty counters on this permanent,” [-N] means “Remove N loyalty counters from this permanent,” and [0] means “Put zero loyalty counters on this permanent.”

107.8. The text box of a leveler card contains two level symbols, each of which is a keyword ability that represents a static ability. The level symbol includes either a range of numbers, indicated here as “N1-N2,” or a single number followed by a plus sign, indicated here as “N3+.” Any abilities printed within the same text box striation as a level symbol are part of its static ability. The same is true of the power/toughness box printed within that striation, indicated here as “[P/T].” See rule 710, “Leveler Cards.”

107.8a “{LEVEL N1-N2} [Abilities] [P/T]” means “As long as this creature has at least N1 level counters on it, but no more than N2 level counters on it, it has base power and toughness [P/T] and has [abilities].”

107.8b “{LEVEL N3+} [Abilities] [P/T]” means “As long as this creature has N3 or more level counters on it, it has base power and toughness [P/T] and has [abilities].”

107.9. A tombstone icon appears to the left of the name of many Odyssey™ block cards with abilities that are relevant in a player’s graveyard. The purpose of the icon is to make those cards stand out when they’re in a graveyard. This icon has no effect on game play.

107.10. A type icon appears in the upper left corner of each card from the Future Sight® set printed with an alternate “timeshifted” frame. If the card has a single card type, this icon indicates what it is: claw marks for creature, a flame for sorcery, a lightning bolt for instant, a sunrise for enchantment, a chalice for artifact, and a pair of mountain peaks for land. If the card has multiple card types, that’s indicated by a black and white cross. This icon has no effect on game play.

107.11. The Planeswalker symbol is {PW}. It appears on one face of the planar die used in the Planechase casual variant. See rule 901, “Planechase.”

107.12. The chaos symbol is {CHAOS}. It appears on one face of the planar die used in the Planechase casual variant, as well as in abilities that refer to the results of rolling the planar die. See rule 901, “Planechase.”

107.13. A color indicator is a circular symbol that appears to the left of the type line on some cards. The color of the symbol defines the card’s color or colors. See rule 202, “Mana Cost and Color.”

107.14. The energy symbol is {E}. It represents one energy counter. To pay {E}, a player removes one energy counter from themselves.

107.15. The text box of a Saga card contains chapter symbols, each of which is a keyword ability that represents a triggered ability. A chapter symbol includes a Roman numeral, indicated here as “rN”. The text printed in the text box striation to the right of a chapter symbol is the effect of the triggered ability it represents. See rule 714, “Saga Cards.”

107.15a “{rN}—[Effect]” means “When one or more lore counters are put onto this Saga, if the number of lore counters on it was less than N and became at least N, [effect].”

107.15b “{rN1}, {rN2}—[Effect]” is the same as “{rN1}—[Effect]” and “{rN2}—[Effect].”

108. Cards

108.1. Use the Oracle card reference when determining a card’s wording. A card’s Oracle text can be found using the Gatherer card database at Gatherer.Wizards.com.

108.2. When a rule or text on a card refers to a “card,” it means only a Magic card or an object represented by a Magic card.

108.2a Most Magic games use only traditional Magic cards, which measure approximately 2.5 inches (6.3 cm) by 3.5 inches (8.8 cm). Certain formats also use nontraditional Magic cards, oversized cards that may have different backs.

108.2b Tokens aren’t considered cards—even a card-sized game supplement that represents a token isn’t considered a card for rules purposes.

108.3. The owner of a card in the game is the player who started the game with it in their deck. If a card is brought into the game from outside the game rather than starting in a player’s deck, its owner is the player who brought it into the game. If a card starts the game in the command zone, its owner is the player who put it into the command zone to start the game. Legal ownership of a card in the game is irrelevant to the game rules except for the rules for ante. (See rule 407.)

108.3a In a Planechase game using the single planar deck option, the planar controller is considered to be the owner of all cards in the planar deck. See rule 901.6.

108.3b Some spells and abilities allow a player to take cards they own from outside the game and bring them into the game. (See rule 400.11b.) If a card outside that game is involved in a Magic game, its owner is determined as described in rule 108.3. If a card outside that game is in the sideboard of a Magic game (see rule 100.4), its owner is considered to be the player who started the game with it in their sideboard. In all other cases, the owner of a card outside the game is its legal owner.

108.4. A card doesn’t have a controller unless that card represents a permanent or spell; in those cases, its controller is determined by the rules for permanents or spells. See rules 110.2 and 112.2.

108.4a If anything asks for the controller of a card that doesn’t have one (because it’s not a permanent or spell), use its owner instead.

108.5. Nontraditional Magic cards can’t start the game in any zone other than the command zone (see rule 408). If an effect would bring a nontraditional Magic card into the game from outside the game, it doesn’t; that card remains outside the game.

108.6. For more information about cards, see section 2, “Parts of a Card.”

109. Objects

109.1. An object is an ability on the stack, a card, a copy of a card, a token, a spell, a permanent, or an emblem.

109.2. If a spell or ability uses a description of an object that includes a card type or subtype, but doesn’t include the word “card,” “spell,” “source,” or “scheme,” it means a permanent of that card type or subtype on the battlefield.

109.2a If a spell or ability uses a description of an object that includes the word “card” and the name of a zone, it means a card matching that description in the stated zone.

109.2b If a spell or ability uses a description of an object that includes the word “spell,” it means a spell matching that description on the stack.

109.2c If a spell or ability uses a description of an object that includes the word “source,” it means a source matching that description—a source of an ability, of damage, or of mana—in any zone. See rules 113.7 and 609.7.

109.2d If an ability of a scheme card includes the text “this scheme,” it means the scheme card in the command zone on which that ability is printed.

109.3. An object’s characteristics are name, mana cost, color, color indicator, card type, subtype, supertype, rules text, abilities, power, toughness, loyalty, hand modifier, and life modifier. Objects can have some or all of these characteristics. Any other information about an object isn’t a characteristic. For example, characteristics don’t include whether a permanent is tapped, a spell’s target, an object’s owner or controller, what an Aura enchants, and so on.

109.4. Only objects on the stack or on the battlefield have a controller. Objects that are neither on the stack nor on the battlefield aren’t controlled by any player. See rule 108.4. There are six exceptions to this rule:

109.4a The controller of a mana ability is determined as though it were on the stack. See rule 605, “Mana Abilities.”

109.4b An emblem is controlled by the player that puts it into the command zone. See rule 114, “Emblems.”

109.4c In a Planechase game, a face-up plane or phenomenon card is controlled by the player designated as the planar controller. This is usually the active player. See rule 901.6.

109.4d In a Vanguard game, each vanguard card is controlled by its owner. See rule 902.6.

109.4e In an Archenemy game, each scheme card is controlled by its owner. See rule 904.7.

109.4f In a Conspiracy Draft game, each conspiracy card is controlled by its owner. See rule 905.5.

109.5. The words “you” and “your” on an object refer to the object’s controller, its would-be controller (if a player is attempting to play, cast, or activate it), or its owner (if it has no controller). For a static ability, this is the current controller of the object it’s on. For an activated ability, this is the player who activated the ability. For a triggered ability, this is the controller of the object when the ability triggered, unless it’s a delayed triggered ability. To determine the controller of a delayed triggered ability, see rules 603.7d–f.

110. Permanents

110.1. A permanent is a card or token on the battlefield. A permanent remains on the battlefield indefinitely. A card or token becomes a permanent as it enters the battlefield and it stops being a permanent as it’s moved to another zone by an effect or rule.

110.2. A permanent’s owner is the same as the owner of the card that represents it (unless it’s a token; see rule 111.2). A permanent’s controller is, by default, the player under whose control it entered the battlefield. Every permanent has a controller.

110.2a If an effect instructs a player to put an object onto the battlefield, that object enters the battlefield under that player’s control unless the effect states otherwise.

110.2b If an effect causes a player to gain control of another player’s permanent spell, the first player controls the permanent that spell becomes, but the permanent’s controller by default is the player who put that spell onto the stack. (This distinction is relevant in multiplayer games; see rule 800.4c.)

110.3. A nontoken permanent’s characteristics are the same as those printed on its card, as modified by any continuous effects. See rule 613, “Interaction of Continuous Effects.”

110.4. There are five permanent types: artifact, creature, enchantment, land, and planeswalker. Instant and sorcery cards can’t enter the battlefield and thus can’t be permanents. Some tribal cards can enter the battlefield and some can’t, depending on their other card types. See section 3, “Card Types.”

110.4a The term “permanent card” is used to refer to a card that could be put onto the battlefield. Specifically, it means an artifact, creature, enchantment, land, or planeswalker card.

110.4b The term “permanent spell” is used to refer to a spell that will enter the battlefield as a permanent as part of its resolution. Specifically, it means an artifact, creature, enchantment, or planeswalker spell.

110.4c If a permanent somehow loses all its permanent types, it remains on the battlefield. It’s still a permanent.

110.5. A permanent’s status is its physical state. There are four status categories, each of which has two possible values: tapped/untapped, flipped/unflipped, face up/face down, and phased in/phased out. Each permanent always has one of these values for each of these categories.

110.5a Status is not a characteristic, though it may affect a permanent’s characteristics.

110.5b Permanents enter the battlefield untapped, unflipped, face up, and phased in unless a spell or ability says otherwise.

110.5c A permanent retains its status until a spell, ability, or turn-based action changes it, even if that status is not relevant to it.
Example: Dimir Doppelganger says “{1}{U}{B}: Exile target creature card from a graveyard. Dimir Doppelganger becomes a copy of that card and gains this ability.” It becomes a copy of Jushi Apprentice, a flip card. Through use of Jushi Apprentice’s ability, this creature flips, making it a copy of Tomoya the Revealer with the Dimir Doppelganger ability. If this permanent then becomes a copy of Runeclaw Bear, it will retain its flipped status even though that has no relevance to Runeclaw Bear. If its copy ability is activated again, this time targeting a Nezumi Shortfang card (another flip card), this permanent’s flipped status means it will have the characteristics of Stabwhisker the Odious (the flipped version of Nezumi Shortfang) with the Dimir Doppelganger ability.

110.5d Only permanents have status. Cards not on the battlefield do not. Although an exiled card may be face down, this has no correlation to the face-down status of a permanent. Similarly, cards not on the battlefield are neither tapped nor untapped, regardless of their physical state.

111. Tokens

111.1. Some effects put tokens onto the battlefield. A token is a marker used to represent any permanent that isn’t represented by a card.

111.2. The player who creates a token is its owner. The token enters the battlefield under that player’s control.

111.3. The spell or ability that creates a token may define the values of any number of characteristics for the token. This becomes the token’s “text.” The characteristic values defined this way are functionally equivalent to the characteristic values that are printed on a card; for example, they define the token’s copiable values. A token doesn’t have any characteristics not defined by the spell or ability that created it.
Example: Jade Mage has the ability “{2}{G}: Create a 1/1 green Saproling creature token.” The resulting token has no mana cost, supertypes, rules text, or abilities.

111.4. A spell or ability that creates a token sets both its name and its subtype(s). If the spell or ability doesn’t specify the name of the token, its name is the same as its subtype(s). A “Goblin Scout creature token,” for example, is named “Goblin Scout” and has the creature subtypes Goblin and Scout. Once a token is on the battlefield, changing its name doesn’t change its subtype, and vice versa.

111.5. If a spell or ability would create a token, but a rule or effect states that a permanent with one or more of that token’s characteristics can’t enter the battlefield, the token is not created.

111.6. A token is subject to anything that affects permanents in general or that affects the token’s card type or subtype. A token isn’t a card (even if represented by a card that has a Magic back or that came from a Magic booster pack).

111.7. A token that’s in a zone other than the battlefield ceases to exist. This is a state-based action; see rule 704. (Note that if a token changes zones, applicable triggered abilities will trigger before the token ceases to exist.)

111.8. A token that has left the battlefield can’t move to another zone or come back onto the battlefield. If such a token would change zones, it remains in its current zone instead. It ceases to exist the next time state-based actions are checked; see rule 704.

111.9. Some effects instruct a player to create a legendary token. These may be written “create [name], a . . .” and list characteristics for the token. This is the same as an instruction to create a token with the listed characteristics that has the given name. 

111.10. Some effects instruct a player to create a predefined token. These effects use the definition below to determine the characteristics the token is created with. The effect that creates a predefined token may also modify or add to the predefined characteristics.

111.10a A Treasure token is a colorless Treasure artifact token with “{T}, Sacrifice this artifact: Add one mana of any color.”

111.10b A Food token is a colorless Food artifact token with “{2}, {T}, Sacrifice this artifact: You gain 3 life.”

111.10c A Gold token is a colorless Gold artifact token with “Sacrifice this artifact: Add one mana of any color.”

111.10d A Walker token is a 2/2 black Zombie creature token named Walker.

111.10e A Shard token is a colorless enchantment token with “{2}, Sacrifice this enchantment: Scry 1, then draw a card.”

111.11. A copy of a permanent spell becomes a token as it resolves. The token has the characteristics of the spell that became that token. The token is not “created” for the purposes of any replacement effects or triggered abilities that refer to creating a token.

112. Spells

112.1. A spell is a card on the stack. As the first step of being cast (see rule 601, “Casting Spells”), the card becomes a spell and is moved to the top of the stack from the zone it was in, which is usually its owner’s hand. (See rule 405, “Stack.”) A spell remains on the stack as a spell until it resolves (see rule 608, “Resolving Spells and Abilities”), is countered (see rule 701.5), or otherwise leaves the stack. For more information, see section 6, “Spells, Abilities, and Effects.”

112.1a A copy of a spell is also a spell, even if it has no card associated with it. See rule 706.10.

112.1b Some effects allow a player to cast a copy of a card; if the player does, that copy is a spell as well. See rule 706.12.

112.2. A spell’s owner is the same as the owner of the card that represents it, unless it’s a copy. In that case, the owner of the spell is the player under whose control it was put on the stack. A spell’s controller is, by default, the player who put it on the stack. Every spell has a controller.

112.3. A noncopy spell’s characteristics are the same as those printed on its card, as modified by any continuous effects. See rule 613, “Interaction of Continuous Effects.”

112.4. If an effect changes any characteristics of a permanent spell, the effect continues to apply to the permanent when the spell resolves. See rule 400.7.
Example: If an effect changes a black creature spell to white, the creature is white when it enters the battlefield and remains white for the duration of the effect changing its color.

113. Abilities

113.1. An ability can be one of three things:

113.1a An ability can be a characteristic an object has that lets it affect the game. An object’s abilities are defined by its rules text or by the effect that created it. Abilities can also be granted to objects by rules or effects. (Effects that grant abilities usually use the words “has,” “have,” “gains,” or “gain.”) Abilities generate effects. (See rule 609, “Effects.”)

113.1b An ability can be something that a player has that changes how the game affects the player. A player normally has no abilities unless granted to that player by effects.

113.1c An ability can be an activated or triggered ability on the stack. This kind of ability is an object. (See section 6, “Spells, Abilities, and Effects.”)

113.2. Abilities can affect the objects they’re on. They can also affect other objects and/or players.

113.2a Abilities can be beneficial or detrimental.
Example: “[This creature] can’t block” is an ability.

113.2b An additional cost or alternative cost to cast a card is an ability of the card.

113.2c An object may have multiple abilities. If the object is represented by a card, then aside from certain defined abilities that may be strung together on a single line (see rule 702, “Keyword Abilities”), each paragraph break in a card’s text marks a separate ability. If the object is not represented by a card, the effect that created it may have given it multiple abilities. An object may also be granted additional abilities by a spell or ability. If an object has multiple instances of the same ability, each instance functions independently. This may or may not produce more effects than a single instance; refer to the specific ability for more information.

113.2d Abilities can generate one-shot effects or continuous effects. Some continuous effects are replacement effects or prevention effects. See rule 609, “Effects.”

113.3. There are four general categories of abilities:

113.3a Spell abilities are abilities that are followed as instructions while an instant or sorcery spell is resolving. Any text on an instant or sorcery spell is a spell ability unless it’s an activated ability, a triggered ability, or a static ability that fits the criteria described in rule 113.6.

113.3b Activated abilities have a cost and an effect. They are written as “[Cost]: [Effect.] [Activation instructions (if any).]” A player may activate such an ability whenever they have priority. Doing so puts it on the stack, where it remains until it’s countered, it resolves, or it otherwise leaves the stack. See rule 602, “Activating Activated Abilities.”

113.3c Triggered abilities have a trigger condition and an effect. They are written as “[Trigger condition], [effect],” and include (and usually begin with) the word “when,” “whenever,” or “at.” Whenever the trigger event occurs, the ability is put on the stack the next time a player would receive priority and stays there until it’s countered, it resolves, or it otherwise leaves the stack. See rule 603, “Handling Triggered Abilities.”

113.3d Static abilities are written as statements. They’re simply true. Static abilities create continuous effects which are active while the permanent with the ability is on the battlefield and has the ability, or while the object with the ability is in the appropriate zone. See rule 604, “Handling Static Abilities.”

113.4. Some activated abilities and some triggered abilities are mana abilities. Mana abilities follow special rules: They don’t use the stack, and, under certain circumstances, a player can activate mana abilities even if they don’t have priority. See rule 605, “Mana Abilities.”

113.5. Some activated abilities are loyalty abilities. Loyalty abilities follow special rules: A player may activate a loyalty ability of a permanent they control any time they have priority and the stack is empty during a main phase of their turn, but only if no player has previously activated a loyalty ability of that permanent that turn. See rule 606, “Loyalty Abilities.”

113.6. Abilities of an instant or sorcery spell usually function only while that object is on the stack. Abilities of all other objects usually function only while that object is on the battlefield. The exceptions are as follows:

113.6a Characteristic-defining abilities function everywhere, even outside the game. (See rule 604.3.)

113.6b An ability that states which zones it functions in functions only from those zones.

113.6c An object’s ability that allows a player to pay an alternative cost rather than its mana cost or otherwise modifies what that particular object costs to cast functions on the stack.

113.6d An object’s ability that restricts or modifies how that particular object can be played or cast functions in any zone from which it could be played or cast and also on the stack. An object’s ability that grants it another ability that restricts or modifies how that particular object can be played or cast functions only on the stack.

113.6e An object’s ability that restricts or modifies what zones that particular object can be played or cast from functions everywhere, even outside the game.

113.6f An object’s ability that states it can’t be countered functions on the stack.

113.6g An object’s ability that modifies how that particular object enters the battlefield functions as that object is entering the battlefield. See rule 614.12.

113.6h An object’s ability that states counters can’t be put on that object functions as that object is entering the battlefield in addition to functioning while that object is on the battlefield.

113.6i An object’s activated ability that has a cost that can’t be paid while the object is on the battlefield functions from any zone in which its cost can be paid.

113.6j A trigger condition that can’t trigger from the battlefield functions in all zones it can trigger from. Other trigger conditions of the same triggered ability may function in different zones.
Example: Absolver Thrull has the ability “When Absolver Thrull enters the battlefield or the creature it haunts dies, destroy target enchantment.” The first trigger condition functions from the battlefield and the second trigger condition functions from the exile zone. (See rule 702.55, “Haunt.”)

113.6k An ability whose cost or effect specifies that it moves the object it’s on out of a particular zone functions only in that zone, unless its trigger condition or a previous part of its cost or effect specifies that the object is put into that zone or, if the object is an Aura, that the object it enchants leaves the battlefield. The same is true if the effect of that ability creates a delayed triggered ability whose effect moves the object out of a particular zone.
Example: Reassembling Skeleton says “{1}{B}: Return Reassembling Skeleton from your graveyard to the battlefield tapped.” A player may activate this ability only if Reassembling Skeleton is in their graveyard.

113.6m An ability that modifies the rules for deck construction functions before the game begins. Such an ability modifies not just the Comprehensive Rules, but also the Magic: The Gathering Tournament Rules and any other documents that set the deck construction rules for a specific format. However, such an ability can’t affect the format legality of a card, including whether it’s banned or restricted. The current Magic: The Gathering Tournament Rules can be found at WPN.Wizards.com/en/resources/rules-documents.

113.6n Abilities of emblems, plane cards, vanguard cards, scheme cards, and conspiracy cards function in the command zone. See rule 114, “Emblems”; rule 901, “Planechase”; rule 902, “Vanguard”; rule 904, “Archenemy”; and rule 905, “Conspiracy Draft.”

113.7. The source of an ability is the object that generated it. The source of an activated ability on the stack is the object whose ability was activated. The source of a triggered ability (other than a delayed triggered ability) on the stack, or one that has triggered and is waiting to be put on the stack, is the object whose ability triggered. To determine the source of a delayed triggered ability, see rules 603.7d–f.

113.7a Once activated or triggered, an ability exists on the stack independently of its source. Destruction or removal of the source after that time won’t affect the ability. Note that some abilities cause a source to do something (for example, “Prodigal Pyromancer deals 1 damage to any target”) rather than the ability doing anything directly. In these cases, any activated or triggered ability that references information about the source for use while announcing an activated ability or putting a triggered ability on the stack checks that information when the ability is put onto the stack. Otherwise, it will check that information when it resolves. In both instances, if the source is no longer in the zone it’s expected to be in at that time, its last known information is used. The source can still perform the action even though it no longer exists.

113.8. The controller of an activated ability on the stack is the player who activated it. The controller of a triggered ability on the stack (other than a delayed triggered ability) is the player who controlled the ability’s source when it triggered, or, if it had no controller, the player who owned the ability’s source when it triggered. To determine the controller of a delayed triggered ability, see rules 603.7d–f.

113.9. Activated and triggered abilities on the stack aren’t spells, and therefore can’t be countered by anything that counters only spells. Activated and triggered abilities on the stack can be countered by effects that specifically counter abilities. Static abilities don’t use the stack and thus can’t be countered at all.

113.10. Effects can add or remove abilities of objects. An effect that adds an ability will state that the object “gains” or “has” that ability, or similar. An effect that removes an ability will state that the object “loses” that ability.

113.10a An effect that adds an activated ability may include activation instructions for that ability. These instructions become part of the ability that’s added to the object.

113.10b Effects that remove an ability remove all instances of it.

113.10c If two or more effects add and remove the same ability, in general the most recent one prevails. See rule 613 for more information about the interaction of continuous effects.

113.11. Effects can stop an object from having a specified ability. These effects say that the object “can’t have” that ability. If the object has that ability, it loses it. It’s also impossible for an effect or keyword counter to add that ability to the object. If a resolving spell or ability creates a continuous effect that would add the specified ability to such an object, that part of that continuous effect does not apply; however, other parts of that continuous effect will still apply, and that resolving spell or ability can still create other continuous effects. Continuous effects created by static abilities that would add the specified ability won’t apply to that object.

113.12. An effect that sets an object’s characteristic, or simply states a quality of that object, is different from an ability granted by an effect. When an object “gains” or “has” an ability, that ability can be removed by another effect. If an effect defines a characteristic of the object (“[permanent] is [characteristic value]”), it’s not granting an ability. (See rule 604.3.) Similarly, if an effect states a quality of that object (“[creature] can’t be blocked,” for example), it’s neither granting an ability nor setting a characteristic.
Example: Muraganda Petroglyphs reads, “Creatures with no abilities get +2/+2.” A Runeclaw Bear (a creature with no abilities) enchanted by an Aura that says “Enchanted creature has flying” would not get +2/+2. A Runeclaw Bear enchanted by an Aura that says “Enchanted creature is red” or “Enchanted creature can’t be blocked” would get +2/+2.

114. Emblems

114.1. Some effects put emblems into the command zone. An emblem is a marker used to represent an object that has one or more abilities, but no other characteristics.

114.2. An effect that creates an emblem is written “[Player] gets an emblem with [ability].” This means that [player] puts an emblem with [ability] into the command zone. The emblem is both owned and controlled by that player.

114.3. An emblem has no characteristics other than the abilities defined by the effect that created it. In particular, an emblem has no name, no types, no mana cost, and no color.

114.4. Abilities of emblems function in the command zone.

114.5. An emblem is neither a card nor a permanent. Emblem isn’t a card type.

115. Targets

115.1. Some spells and abilities require their controller to choose one or more targets for them. The targets are object(s) and/or player(s) the spell or ability will affect. These targets are declared as part of the process of putting the spell or ability on the stack. The targets can’t be changed except by another spell or ability that explicitly says it can do so.

115.1a An instant or sorcery spell is targeted if its spell ability identifies something it will affect by using the phrase “target [something],” where the “something” is a phrase that describes an object and/or player. The target(s) are chosen as the spell is cast; see rule 601.2c. (If an activated or triggered ability of an instant or sorcery uses the word target, that ability is targeted, but the spell is not.)
Example: A sorcery card has the ability “When you cycle this card, target creature gets -1/-1 until end of turn.” This triggered ability is targeted, but that doesn’t make the card it’s on targeted.

115.1b Aura spells are always targeted. An Aura’s target is specified by its enchant keyword ability (see rule 702.5, “Enchant”). The target is chosen as the spell is cast; see rule 601.2c. An Aura permanent doesn’t target anything; only the spell is targeted. (An activated or triggered ability of an Aura permanent can also be targeted.)

115.1c An activated ability is targeted if it identifies something it will affect by using the phrase “target [something],” where the “something” is a phrase that describes an object and/or player. The target(s) are chosen as the ability is activated; see rule 602.2b.

115.1d A triggered ability is targeted if it identifies something it will affect by using the phrase “target [something],” where the “something” is a phrase that describes an object and/or player. The target(s) are chosen as the ability is put on the stack; see rule 603.3d.

115.1e Some keyword abilities, such as equip and modular, represent targeted activated or triggered abilities, and some keyword abilities, such as mutate, cause spells to have targets. In those cases, the phrase “target [something]” appears in the rule for that keyword ability rather than in the ability itself. (The keyword’s reminder text will often contain the word “target.”) See rule 702, “Keyword Abilities.”

115.2. Only permanents are legal targets for spells and abilities, unless a spell or ability (a) specifies that it can target an object in another zone or a player, or (b) targets an object that can’t exist on the battlefield, such as a spell or ability. See also rule 115.4.

115.3. The same target can’t be chosen multiple times for any one instance of the word “target” on a spell or ability. If the spell or ability uses the word “target” in multiple places, the same object or player can be chosen once for each instance of the word “target” (as long as it fits the targeting criteria). This rule applies both when choosing targets for a spell or ability and when changing targets or choosing new targets for a spell or ability (see rule 115.7).

115.4. Some spells and abilities that refer to damage require “any target,” “another target,” “two targets,” or similar rather than “target [something].” These targets may be creatures, players, or planeswalkers. Other game objects, such as noncreature artifacts or spells, can’t be chosen.

115.5. A spell or ability on the stack is an illegal target for itself.

115.6. A spell or ability that requires targets may allow zero targets to be chosen. Such a spell or ability is still said to require targets, but that spell or ability is targeted only if one or more targets have been chosen for it.

115.7. Some effects allow a player to change the target(s) of a spell or ability, and other effects allow a player to choose new targets for a spell or ability.

115.7a If an effect allows a player to “change the target(s)” of a spell or ability, each target can be changed only to another legal target. If a target can’t be changed to another legal target, the original target is unchanged, even if the original target is itself illegal by then. If all the targets aren’t changed to other legal targets, none of them are changed.

115.7b If an effect allows a player to “change a target” of a spell or ability, the process described in rule 115.7a is followed, except that only one of those targets may be changed (rather than all of them or none of them).

115.7c If an effect allows a player to “change any targets” of a spell or ability, the process described in rule 115.7a is followed, except that any number of those targets may be changed (rather than all of them or none of them).

115.7d If an effect allows a player to “choose new targets” for a spell or ability, the player may leave any number of the targets unchanged, even if those targets would be illegal. If the player chooses to change some or all of the targets, the new targets must be legal and must not cause any unchanged targets to become illegal.

115.7e When changing targets or choosing new targets for a spell or ability, only the final set of targets is evaluated to determine whether the change is legal.
Example: Arc Trail is a sorcery that reads “Arc Trail deals 2 damage to any target and 1 damage to another target.” The current targets of Arc Trail are Runeclaw Bear and Llanowar Elves, in that order. You cast Redirect, an instant that reads “You may choose new targets for target spell,” targeting Arc Trail. You can change the first target to Llanowar Elves and change the second target to Runeclaw Bear.

115.7f A spell or ability may “divide” or “distribute” an effect (such as damage or counters) among one or more targets. When changing targets or choosing new targets for that spell or ability, the original division can’t be changed.

115.8. Modal spells and abilities may have different targeting requirements for each mode. An effect that allows a player to change the target(s) of a modal spell or ability, or to choose new targets for a modal spell or ability, doesn’t allow that player to change its mode. (See rule 700.2.)

115.9. Some objects check what another spell or ability is targeting. Depending on the wording, these may check the current state of the targets, the state of the targets at the time they were selected, or both.

115.9a An object that looks for a “[spell or ability] with a single target” checks the number of times any object or player was chosen as the target of that spell or ability when it was put on the stack, not the number of its targets that are currently legal. If the same object or player became a target more than once, each of those instances is counted separately.

115.9b An object that looks for a “[spell or ability] that targets [something]” checks the current state of that spell or ability’s targets. If an object it targets is still in the zone it’s expected to be in or a player it targets is still in the game, that target’s current information is used, even if it’s not currently legal for that spell or ability. If an object it targets is no longer in the zone it’s expected to be in or a player it targets is no longer in the game, that target is ignored; its last known information is not used.

115.9c An object that looks for a “[spell or ability] that targets only [something]” checks the number of different objects or players that were chosen as targets of that spell or ability when it was put on the stack (as modified by effects that changed those targets), not the number of those objects or players that are currently legal targets. If that number is one (even if the spell or ability targets that object or player multiple times), the current state of that spell or ability’s target is checked as described in rule 115.9b.

115.10. Spells and abilities can affect objects and players they don’t target. In general, those objects and players aren’t chosen until the spell or ability resolves. See rule 608, “Resolving Spells and Abilities.”

115.10a Just because an object or player is being affected by a spell or ability doesn’t make that object or player a target of that spell or ability. Unless that object or player is identified by the word “target” in the text of that spell or ability, or the rule for that keyword ability, it’s not a target.

115.10b In particular, the word “you” in an object’s text doesn’t indicate a target.

116. Special Actions

116.1. Special actions are actions a player may take when they have priority that don’t use the stack. These are not to be confused with turn-based actions and state-based actions, which the game generates automatically. (See rule 703, “Turn-Based Actions,” and rule 704, “State-Based Actions.”)

116.2. There are ten special actions:

116.2a Playing a land is a special action. To play a land, a player puts that land onto the battlefield from the zone it was in (usually that player’s hand). By default, a player can take this action only once during each of their turns. A player can take this action any time they have priority and the stack is empty during a main phase of their turn. See rule 305, “Lands.”

116.2b Turning a face-down creature face up is a special action. A player can take this action any time they have priority. See rule 707, “Face-Down Spells and Permanents.”

116.2c Some effects allow a player to take an action at a later time, usually to end a continuous effect or to stop a delayed triggered ability from triggering. Doing so is a special action. A player can take such an action any time they have priority, unless that effect specifies another timing restriction, for as long as the effect allows it.

116.2d Some effects from static abilities allow a player to take an action to ignore the effect from that ability for a duration. Doing so is a special action. A player can take such an action any time they have priority.

116.2e One card (Circling Vultures) has the ability “You may discard Circling Vultures any time you could cast an instant.” Doing so is a special action. A player can take such an action any time they have priority.

116.2f A player who has a card with suspend in their hand may exile that card. This is a special action. A player can take this action any time they have priority, but only if they could begin to cast that card by putting it onto the stack. See rule 702.62, “Suspend.”

116.2g A player who has chosen a companion may pay {3} to put that card from outside the game into their hand. This is a special action. A player can take this action any time they have priority and the stack is empty during a main phase of their turn, but only if they haven’t done so yet this game. (See rule 702.139, “Companion.”)

116.2h A player who has a card with foretell in their hand may pay {2} and exile that card face down. This is a special action. A player may take this action any time they have priority during their turn. See rule 702.143, “Foretell.”

116.2i In a Planechase game, rolling the planar die is a special action. A player can take this action any time they have priority and the stack is empty during a main phase of their turn. Taking this action costs a player an amount of mana equal to the number of times they have previously taken this action on that turn. Note that this number won’t be equal to the number of times the player has rolled the planar die that turn if an effect has caused the player to roll the planar die that turn. See rule 901, “Planechase.”

116.2j In a Conspiracy Draft game, turning a face-down conspiracy card in the command zone face up is a special action. A player can take this action any time they have priority. See rule 905.4a.

116.3. If a player takes a special action, that player receives priority afterward.

117. Timing and Priority

117.1. Unless a spell or ability is instructing a player to take an action, which player can take actions at any given time is determined by a system of priority. The player with priority may cast spells, activate abilities, and take special actions.

117.1a A player may cast an instant spell any time they have priority. A player may cast a noninstant spell during their main phase any time they have priority and the stack is empty.

117.1b A player may activate an activated ability any time they have priority.

117.1c A player may take some special actions any time they have priority. A player may take other special actions during their main phase any time they have priority and the stack is empty. See rule 116, “Special Actions.”

117.1d A player may activate a mana ability whenever they have priority, whenever they are casting a spell or activating an ability that requires a mana payment, or whenever a rule or effect asks for a mana payment (even in the middle of casting or resolving a spell or activating or resolving an ability).

117.2. Other kinds of abilities and actions are automatically generated or performed by the game rules, or are performed by players without receiving priority.

117.2a Triggered abilities can trigger at any time, including while a spell is being cast, an ability is being activated, or a spell or ability is resolving. (See rule 603, “Handling Triggered Abilities.”) However, nothing actually happens at the time an ability triggers. Each time a player would receive priority, each ability that has triggered but hasn’t yet been put on the stack is put on the stack. See rule 117.5.

117.2b Static abilities continuously affect the game. Priority doesn’t apply to them. (See rule 604, “Handling Static Abilities,” and rule 611, “Continuous Effects.”)

117.2c Turn-based actions happen automatically when certain steps or phases begin. They’re dealt with before a player would receive priority. See rule 117.3a. Turn-based actions also happen automatically when each step and phase ends; no player receives priority afterward. See rule 703, “Turn-Based Actions.”

117.2d State-based actions happen automatically when certain conditions are met. See rule 704. They’re dealt with before a player would receive priority. See rule 117.5.

117.2e Resolving spells and abilities may instruct players to make choices or take actions, or may allow players to activate mana abilities. Even if a player is doing so, no player has priority while a spell or ability is resolving. See rule 608, “Resolving Spells and Abilities.”

117.3. Which player has priority is determined by the following rules:

117.3a The active player receives priority at the beginning of most steps and phases, after any turn-based actions (such as drawing a card during the draw step; see rule 703) have been dealt with and abilities that trigger at the beginning of that phase or step have been put on the stack. No player receives priority during the untap step. Players usually don’t get priority during the cleanup step (see rule 514.3).

117.3b The active player receives priority after a spell or ability (other than a mana ability) resolves.

117.3c If a player has priority when they cast a spell, activate an ability, or take a special action, that player receives priority afterward.

117.3d If a player has priority and chooses not to take any actions, that player passes. If any mana is in that player’s mana pool, they announce what mana is there. Then the next player in turn order receives priority.

117.4. If all players pass in succession (that is, if all players pass without taking any actions in between passing), the spell or ability on top of the stack resolves or, if the stack is empty, the phase or step ends.

117.5. Each time a player would get priority, the game first performs all applicable state-based actions as a single event (see rule 704, “State-Based Actions”), then repeats this process until no state-based actions are performed. Then triggered abilities are put on the stack (see rule 603, “Handling Triggered Abilities”). These steps repeat in order until no further state-based actions are performed and no abilities trigger. Then the player who would have received priority does so.

117.6. In a multiplayer game using the shared team turns option, teams rather than individual players have priority. See rule 805, “Shared Team Turns Option.”

117.7. If a player with priority casts a spell or activates an activated ability while another spell or ability is already on the stack, the new spell or ability has been cast or activated “in response to” the earlier spell or ability. The new spell or ability will resolve first. See rule 608, “Resolving Spells and Abilities.”

118. Costs

118.1. A cost is an action or payment necessary to take another action or to stop another action from taking place. To pay a cost, a player carries out the instructions specified by the spell, ability, or effect that contains that cost.

118.2. If a cost includes a mana payment, the player paying the cost has a chance to activate mana abilities. Paying the cost to cast a spell or activate an activated ability follows the steps in rules 601.2f–h.

118.3. A player can’t pay a cost without having the necessary resources to pay it fully. For example, a player with only 1 life can’t pay a cost of 2 life, and a permanent that’s already tapped can’t be tapped to pay a cost. See rule 202, “Mana Cost and Color,” and rule 602, “Activating Activated Abilities.”

118.3a Paying mana is done by removing the indicated mana from a player’s mana pool. (Players can always pay 0 mana.) If excess mana remains in that player’s mana pool after making that payment, the player announces what mana is still there.

118.3b Paying life is done by subtracting the indicated amount of life from a player’s life total. (Players can always pay 0 life.)

118.3c Activating mana abilities is not mandatory, even if paying a cost is.
Example: A player controls Lodestone Golem, which says “Nonartifact spells cost {1} more to cast.” Another player removes the last time counter from a suspended sorcery card. That player must cast that spell if able, but doing so costs {1}. The player is forced to pay that cost if enough mana is in their mana pool, but the player isn’t forced to activate a mana ability to produce that mana. If they don’t, the card simply remains exiled.

118.4. Some costs include an {X} or an X. See rule 107.3.

118.5. Some costs are represented by {0}, or are reduced to {0}. The action necessary for a player to pay such a cost is the player’s acknowledgment that they are paying it. Even though such a cost requires no resources, it’s not automatically paid.

118.5a A spell whose mana cost is {0} must still be cast the same way as one with a cost greater than zero; it won’t cast itself automatically. The same is true for an activated ability whose cost is {0}.

118.6. Some objects have no mana cost. This represents an unpayable cost. An ability can also have an unpayable cost if its cost is based on the mana cost of an object with no mana cost. Attempting to cast a spell or activate an ability that has an unpayable cost is a legal action. However, attempting to pay an unpayable cost is an illegal action.

118.6a If an unpayable cost is increased by an effect or an additional cost is imposed, the cost is still unpayable. If an alternative cost is applied to an unpayable cost, including an effect that allows a player to cast a spell without paying its mana cost, the alternative cost may be paid.

118.7. What a player actually needs to do to pay a cost may be changed or reduced by effects. If the mana component of a cost is reduced to nothing by cost reduction effects, it’s considered to be {0}. Paying a cost changed or reduced by an effect counts as paying the original cost.

118.7a Effects that reduce a cost by an amount of generic mana affect only the generic mana component of that cost. They can’t affect the colored or colorless mana components of that cost.

118.7b If a cost is reduced by an amount of colored or colorless mana, but the cost doesn’t require mana of that type, the cost is reduced by that amount of generic mana.

118.7c If a cost is reduced by an amount of colored mana that exceeds its mana component of that color, the cost’s mana component of that color is reduced to nothing and the cost’s generic mana component is reduced by the difference.

118.7d If a cost is reduced by an amount of colorless mana that exceeds its colorless mana component, the cost’s colorless mana component is reduced to nothing and the cost’s generic mana component is reduced by the difference.

118.7e If a cost is reduced by an amount of mana represented by a hybrid mana symbol, the player paying that cost chooses one half of that symbol at the time the cost reduction is applied (see rule 601.2f). If a colored half is chosen, the cost is reduced by one mana of that color. If a generic half is chosen, the cost is reduced by an amount of generic mana equal to that half’s number.

118.7f If a cost is reduced by an amount of mana represented by a Phyrexian mana symbol, the cost is reduced by one mana of that symbol’s color.

118.7g If a cost is reduced by an amount of mana represented by one or more snow mana symbols, the cost is reduced by that much generic mana.

118.8. Some spells and abilities have additional costs. An additional cost is a cost listed in a spell’s rules text, or applied to a spell or ability from another effect, that its controller must pay at the same time they pay the spell’s mana cost or the ability’s activation cost. Note that some additional costs are listed in keywords; see rule 702.

118.8a Any number of additional costs may be applied to a spell as it’s being cast or to an ability as it’s being activated. The controller of the spell or ability announces their intentions to pay any or all of those costs as described in rule 601.2b.

118.8b Some additional costs are optional.

118.8c If an effect instructs a player to cast a spell “if able,” and that spell has a mandatory additional cost that includes actions involving cards with a stated quality in a hidden zone, the player isn’t required to cast that spell, even if those cards are present in that zone.

118.8d Additional costs don’t change a spell’s mana cost, only what its controller has to pay to cast it. Spells and abilities that ask for that spell’s mana cost still see the original value.

118.9. Some spells have alternative costs. An alternative cost is a cost listed in a spell’s text, or applied to it from another effect, that its controller may pay rather than paying the spell’s mana cost. Alternative costs are usually phrased, “You may [action] rather than pay [this object’s] mana cost,” or “You may cast [this object] without paying its mana cost.” Note that some alternative costs are listed in keywords; see rule 702.

118.9a Only one alternative cost can be applied to any one spell as it’s being cast. The controller of the spell announces their intentions to pay that cost as described in rule 601.2b.

118.9b Alternative costs are generally optional. An effect that allows you to cast a spell may require a certain alternative cost to be paid.

118.9c An alternative cost doesn’t change a spell’s mana cost, only what its controller has to pay to cast it. Spells and abilities that ask for that spell’s mana cost still see the original value.

118.9d If an alternative cost is being paid to cast a spell, any additional costs, cost increases, and cost reductions that affect that spell are applied to that alternative cost. (See rule 601.2f.)

118.10. Each payment of a cost applies to only one spell, ability, or effect. For example, a player can’t sacrifice just one creature to activate the activated abilities of two permanents that each require sacrificing a creature as a cost. Also, the resolution of a spell or ability doesn’t pay another spell or ability’s cost, even if part of its effect is doing the same thing the other cost asks for.

118.11. The actions performed when paying a cost may be modified by effects. Even if they are, meaning the actions that are performed don’t match the actions that are called for, the cost has still been paid.
Example: A player controls Psychic Vortex, an enchantment with a cumulative upkeep cost of “Draw a card,” and Obstinate Familiar, a creature that says “If you would draw a card, you may skip that draw instead.” The player may decide to pay Psychic Vortex’s cumulative upkeep cost and then draw no cards instead of drawing the appropriate amount. The cumulative upkeep cost has still been paid.

118.12. Some spells, activated abilities, and triggered abilities read, “[Do something]. If [a player] [does, doesn’t, or can’t], [effect].” or “[A player] may [do something]. If [that player] [does, doesn’t, or can’t], [effect].” The action [do something] is a cost, paid when the spell or ability resolves. The “If [a player] [does, doesn’t, or can’t]” clause checks whether the player chose to pay an optional cost or started to pay a mandatory cost, regardless of what events actually occurred.
Example: You control Standstill, an enchantment that says “When a player casts a spell, sacrifice Standstill. If you do, each of that player’s opponents draws three cards.” A spell is cast, causing Standstill’s ability to trigger. Then an ability is activated that exiles Standstill. When Standstill’s ability resolves, you’re unable to pay the “sacrifice Standstill” cost. No player will draw cards.
Example: Your opponent has cast Gather Specimens, a spell that says “If a creature would enter the battlefield under an opponent’s control this turn, it enters the battlefield under your control instead.” You control a face-down Dermoplasm, a creature with morph that says “When Dermoplasm is turned face up, you may put a creature card with morph from your hand onto the battlefield face up. If you do, return Dermoplasm to its owner’s hand.” You turn Dermoplasm face up, and you choose to put a creature card with morph from your hand onto the battlefield. Due to Gather Specimens, it enters the battlefield under your opponent’s control instead of yours. However, since you chose to pay the cost, Dermoplasm is still returned to its owner’s hand.

118.12a Some spells, activated abilities, and triggered abilities read, “[Do something] unless [a player does something else].” This means the same thing as “[A player may do something else]. If [that player doesn’t], [do something].”

118.12b Some effects offer a player a choice to search a zone and take additional actions with the cards found in that zone, followed by an “If [a player] does” clause. This clause checks whether the player chose to search, not whether the player took any of the additional actions.

118.13. Some costs contain mana symbols that can be paid in multiple ways. These include hybrid mana symbols and Phyrexian mana symbols.

118.13a If the mana cost of a spell or the activation cost of an activated ability contains a mana symbol that can be paid in multiple ways, the choice of how to pay for that symbol is made as its controller proposes that spell or ability (see rule 601.2b).

118.13b If a cost paid during the resolution of a spell or ability contains a mana symbol that can be paid in multiple ways, the player paying that cost chooses how to pay for that symbol immediately before they pay that cost.

118.13c If the cost associated with a special action contains a mana symbol that can be paid in multiple ways, the player taking the special action chooses how to pay for that symbol immediately before they pay that cost.

119. Life

119.1. Each player begins the game with a starting life total of 20. Some variant games have different starting life totals.

119.1a In a Two-Headed Giant game, each team’s starting life total is 30. See rule 810, “Two-Headed Giant Variant.”

119.1b In a Vanguard game, each player’s starting life total is 20 plus or minus the life modifier of their vanguard card. See rule 902, “Vanguard.”

119.1c In a Commander game, each player’s starting life total is 40. See rule 903, “Commander.”

119.1d. In a two-player Brawl game, each player’s starting life total is 25. In a multiplayer Brawl game, each player’s starting life total is 30. See rule 903.12, “Brawl Option.”

119.1e In an Archenemy game, the archenemy’s starting life total is 40. See rule 904, “Archenemy.”

119.2. Damage dealt to a player normally causes that player to lose that much life. See rule 120.3.

119.3. If an effect causes a player to gain life or lose life, that player’s life total is adjusted accordingly.

119.4. If a cost or effect allows a player to pay an amount of life greater than 0, the player may do so only if their life total is greater than or equal to the amount of the payment. If a player pays life, the payment is subtracted from their life total; in other words, the player loses that much life.

119.4a If a cost or effect allows a player to pay an amount of life greater than 0 in a Two-Headed Giant game, the player may do so only if their team’s life total is greater than or equal to the total amount of life both team members are paying for that cost or effect. If a player pays life, the payment is subtracted from their team’s life total.

119.4b Players can always pay 0 life, no matter what their (or their team’s) life total is, and even if an effect says players can’t pay life.

119.5. If an effect sets a player’s life total to a specific number, the player gains or loses the necessary amount of life to end up with the new total.

119.6. If a player has 0 or less life, that player loses the game as a state-based action. See rule 704.

119.7. If an effect says that a player can’t gain life, that player can’t make an exchange such that the player’s life total would become higher; in that case, the exchange won’t happen. Similarly, if an effect redistributes life totals, a player can’t receive a new life total such that the player’s life total would become higher. In addition, a cost that involves having that player gain life can’t be paid, and a replacement effect that would replace a life gain event affecting that player won’t do anything.

119.8. If an effect says that a player can’t lose life, that player can’t make an exchange such that the player’s life total would become lower; in that case, the exchange won’t happen. Similarly, if an effect redistributes life totals, a player can’t receive a new life total such that the player’s life total would become lower. In addition, a cost that involves having that player pay life can’t be paid.

119.9. Some triggered abilities are written, “Whenever [a player] gains life, . . . .” Such abilities are treated as though they are written, “Whenever a source causes [a player] to gain life, . . . .” If a player gains 0 life, no life gain event has occurred, and these abilities won’t trigger.

119.10. Some replacement effects are written, “If [a player] would gain life, . . . .” Such abilities are treated as though they are written, “If a source would cause [a player] to gain life, . . . .” If a player gains 0 life, no life gain event would occur, and these effects won’t apply.

120. Damage

120.1. Objects can deal damage to creatures, planeswalkers, and players. This is generally detrimental to the object or player that receives that damage. An object that deals damage is the source of that damage.

120.1a Damage can’t be dealt to an object that’s neither a creature nor a planeswalker.

120.2. Any object can deal damage.

120.2a Damage may be dealt as a result of combat. Each attacking and blocking creature deals combat damage equal to its power during the combat damage step.

120.2b Damage may be dealt as an effect of a spell or ability. The spell or ability will specify which object deals that damage.

120.3. Damage may have one or more of the following results, depending on whether the recipient of the damage is a player or permanent, the characteristics of the damage’s source, and the characteristics of the damage’s recipient (if it’s a permanent).

120.3a Damage dealt to a player by a source without infect causes that player to lose that much life.

120.3b Damage dealt to a player by a source with infect causes that source’s controller to give the player that many poison counters.

120.3c Damage dealt to a planeswalker causes that many loyalty counters to be removed from that planeswalker.

120.3d Damage dealt to a creature by a source with wither and/or infect causes that source’s controller to put that many -1/-1 counters on that creature.

120.3e Damage dealt to a creature by a source with neither wither nor infect causes that much damage to be marked on that creature.

120.3f Damage dealt by a source with lifelink causes that source’s controller to gain that much life, in addition to the damage’s other results.

120.4. Damage is processed in a four-part sequence.

120.4a First, if an effect that’s causing damage to be dealt states that excess damage that would be dealt to a permanent is dealt to another permanent or player instead, the damage event is modified accordingly. If the first permanent is a creature, the excess damage is the amount of damage in excess of what would be lethal damage, taking into account damage already marked on the creature and damage from other sources that would be dealt at the same time. (See rule 120.6.) Any amount of damage greater than 1 is excess damage if the source dealing that damage to a creature has deathtouch. (See rule 702.2.) If the first permanent is a planeswalker, the excess damage is the amount of damage in excess of that planeswalker’s loyalty, taking into account damage from other sources that would be dealt at the same time. If the first permanent is both a creature and a planeswalker, the excess damage is the greater of those two amounts.

120.4b Second, damage is dealt, as modified by replacement and prevention effects that interact with damage. (See rule 614, “Replacement Effects,” and rule 615, “Prevention Effects.”) Abilities that trigger when damage is dealt trigger now and wait to be put on the stack.

120.4c Third, damage that’s been dealt is processed into its results, as modified by replacement effects that interact with those results (such as life loss or counters).

120.4d Finally, the damage event occurs.
Example: A player who controls Boon Reflection, an enchantment that says “If you would gain life, you gain twice that much life instead,” attacks with a 3/3 creature with wither and lifelink. It’s blocked by a 2/2 creature, and the defending player casts a spell that prevents the next 2 damage that would be dealt to the blocking creature. The damage event starts out as [3 damage is dealt to the 2/2 creature, 2 damage is dealt to the 3/3 creature]. The prevention effect is applied, so the damage event becomes [1 damage is dealt to the 2/2 creature, 2 damage is dealt to the 3/3 creature]. That’s processed into its results, so the damage event is now [one -1/-1 counter is put on the 2/2 creature, the active player gains 1 life, 2 damage is marked on the 3/3 creature]. Boon Reflection’s effect is applied, so the damage event becomes [one -1/-1 counter is put on the 2/2 creature, the active player gains 2 life, 2 damage is marked on the 3/3 creature]. Then the damage event occurs.
Example: The defending player controls a creature and Worship, an enchantment that says “If you control a creature, damage that would reduce your life total to less than 1 reduces it to 1 instead.” That player is at 2 life, and is being attacked by two unblocked 5/5 creatures. The player casts Awe Strike, which says “The next time target creature would deal damage this turn, prevent that damage. You gain life equal to the damage prevented this way,” targeting one of the attackers. The damage event starts out as [10 damage is dealt to the defending player]. Awe Strike’s effect is applied, so the damage event becomes [5 damage is dealt to the defending player, the defending player gains 5 life]. That’s processed into its results, so the damage event is now [the defending player loses 5 life, the defending player gains 5 life]. Worship’s effect sees that the damage event would not reduce the player’s life total to less than 1, so Worship’s effect is not applied. Then the damage event occurs.

120.5. Damage dealt to a creature or planeswalker doesn’t destroy it. Likewise, the source of that damage doesn’t destroy it. Rather, state-based actions may destroy a creature or planeswalker, or otherwise put it into its owner’s graveyard, due to the results of the damage dealt to that permanent. See rule 704.
Example: A player casts Lightning Bolt, an instant that says “Lightning Bolt deals 3 damage to any target,” targeting a 2/2 creature. After Lightning Bolt deals 3 damage to that creature, the creature is destroyed as a state-based action. Neither Lightning Bolt nor the damage dealt by Lightning Bolt destroyed that creature.

120.6. Damage marked on a creature remains until the cleanup step, even if that permanent stops being a creature. If the total damage marked on a creature is greater than or equal to its toughness, that creature has been dealt lethal damage and is destroyed as a state-based action (see rule 704). All damage marked on a permanent is removed when it regenerates (see rule 701.15, “Regenerate”) and during the cleanup step (see rule 514.2).

120.7. The source of damage is the object that dealt it. If an effect requires a player to choose a source of damage, they may choose a permanent; a spell on the stack (including a permanent spell); any object referred to by an object on the stack, by a prevention or replacement effect that’s waiting to apply, or by a delayed triggered ability that’s waiting to trigger (even if that object is no longer in the zone it used to be in); or a face-up object in the command zone. A source doesn’t need to be capable of dealing damage to be a legal choice. See rule 609.7, “Sources of Damage.”

120.8. If a source would deal 0 damage, it does not deal damage at all. That means abilities that trigger on damage being dealt won’t trigger. It also means that replacement effects that would increase the damage dealt by that source, or would have that source deal that damage to a different object or player, have no event to replace, so they have no effect.

120.9. If an ability triggers on damage being dealt by a specific source or sources, and the effect refers to the “damage dealt,” it refers only to the damage dealt by the specified sources and not to any damage dealt at the same time by other sources.

120.10. Some triggered abilities check whether a permanent has been dealt excess damage. These abilities check after the permanent has been dealt damage by one or more sources. If those sources together dealt an amount of damage to a creature greater than lethal damage, excess damage equal to the difference was dealt to that creature. If those sources together dealt an amount of damage to a planeswalker greater than that planeswalker’s loyalty before the damage was dealt, excess damage equal to the difference was dealt to that planeswalker. If a permanent is both a creature and a planeswalker, the excess damage dealt to that permanent is the greater of those two amounts.

121. Drawing a Card

121.1. A player draws a card by putting the top card of their library into their hand. This is done as a turn-based action during each player’s draw step. It may also be done as part of a cost or effect of a spell or ability.

121.2. Cards may only be drawn one at a time. If a player is instructed to draw multiple cards, that player performs that many individual card draws.

121.2a An instruction to draw multiple cards can be modified by replacement effects that refer to the number of cards drawn. This modification occurs before considering any of the individual card draws. See rule 616.1f.

121.2b Some effects say that a player can’t draw more than one card each turn. Such an effect applies to individual card draws. Instructions to draw multiple cards may still be partially carried out. However, if an effect offers the player a choice to draw multiple cards, the affected player can’t choose to do so. Similarly, the player can’t pay a cost that includes drawing multiple cards.

121.2c If more than one player is instructed to draw cards, the active player performs all of their draws first, then each other player in turn order does the same.

121.2d If more than one player is instructed to draw cards in a game that’s using the shared team turns option (such as a Two-Headed Giant game), first each player on the active team, in whatever order that team likes, performs their draws, then each player on each nonactive team in turn order does the same.

121.3. If there are no cards in a player’s library and an effect offers that player the choice to draw a card, that player can choose to do so. However, if an effect says that a player can’t draw cards and another effect offers that player the choice to draw a card, that player can’t choose to do so.

121.3a The same principles apply if the player who’s making the choice is not the player who would draw the card. If the latter player has no cards in their library, the choice can be taken. If an effect says that the latter player can’t draw a card, the choice can’t be taken.

121.4. A player who attempts to draw a card from a library with no cards in it loses the game the next time a player would receive priority. (This is a state-based action. See rule 704.)

121.5. If an effect moves cards from a player’s library to that player’s hand without using the word “draw,” the player has not drawn those cards. This makes a difference for abilities that trigger on drawing cards and effects that replace card draws, as well as if the player’s library is empty.

121.6. Some effects replace card draws.

121.6a An effect that replaces a card draw is applied even if no cards could be drawn because there are no cards in the affected player’s library.

121.6b If an effect replaces a draw within a sequence of card draws, the replacement effect is completed before resuming the sequence.

121.6c Some effects perform additional actions on a card after it’s drawn. If the draw is replaced, the additional action is not performed on any cards that are drawn as a result of that replacement effect or any subsequent replacement effects.

121.7. Some replacement effects and prevention effects result in one or more card draws. In such a case, if there are any parts of the original event that haven’t been replaced, those parts occur first, then the card draws happen one at a time.

121.8. If a spell or ability causes a card to be drawn while another spell is being cast, the drawn card is kept face down until that spell becomes cast (see rule 601.2i) or until the casting process is reversed (see rule 723, “Handling Illegal Actions”). The same is true with relation to another ability being activated. If an effect allows or instructs a player to reveal the card as it’s being drawn, it’s revealed after the spell becomes cast or the ability becomes activated. While face down, the drawn card is considered to have no characteristics and can’t be used to pay any part of the cost of the spell or ability that would require the card to have specific characteristics.

121.9. If an effect gives a player the option to reveal a card as they draw it, that player may look at that card as they draw it before choosing whether to reveal it.

122. Counters

122.1. A counter is a marker placed on an object or player that modifies its characteristics and/or interacts with a rule, ability, or effect. Counters are not objects and have no characteristics. Notably, a counter is not a token, and a token is not a counter. Counters with the same name or description are interchangeable.

122.1a A +X/+Y counter on a creature or on a creature card in a zone other than the battlefield, where X and Y are numbers, adds X to that object’s power and Y to that object’s toughness. Similarly, -X/-Y counters subtract from power and toughness. See rule 613.4c.

122.1b A keyword counter on a permanent or on a card in a zone other than the battlefield causes that object to gain that keyword. The keywords that a keyword counter can be are flying, first strike, double strike, deathtouch, haste, hexproof, indestructible, lifelink, menace, reach, trample, and vigilance, as well as any variants of those keywords. See rule 613.1f.

122.1c The number of loyalty counters on a planeswalker on the battlefield indicates how much loyalty it has. A planeswalker with 0 loyalty is put into its owner’s graveyard as a state-based action. See rule 704.

122.1d If a player has ten or more poison counters, that player loses the game as a state-based action. See rule 704. A player is “poisoned” if they have one or more poison counters. (See rule 810 for additional rules for Two-Headed Giant games.)

122.2. Counters on an object are not retained if that object moves from one zone to another. The counters are not “removed”; they simply cease to exist. See rule 400.7.

122.3. If a permanent has both a +1/+1 counter and a -1/-1 counter on it, N +1/+1 and N -1/-1 counters are removed from it as a state-based action, where N is the smaller of the number of +1/+1 and -1/-1 counters on it. See rule 704.

122.4. If a permanent with an ability that says it can’t have more than N counters of a certain kind on it has more than N counters of that kind on it, all but N of those counters are removed from it as a state-based action. See rule 704.

122.5. If an effect says to “move” a counter, it means to remove that counter from the object it’s currently on and put it onto a second object. If either of these actions isn’t possible, it’s not possible to move a counter, and no counter is removed from or put onto anything. This may occur if the first and second objects are the same object; if the first object doesn’t have the appropriate kind of counter on it; if the second object can’t have counters put onto it; or if either object is no longer in the correct zone.

122.6. Some spells and abilities refer to counters being put on an object. This refers to putting counters on that object while it’s on the battlefield and also to an object that’s given counters as it enters the battlefield.

122.6a If an object enters the battlefield with counters on it, the effect causing the object to be given counters may specify which player puts those counters on it. If the effect doesn’t specify a player, the object’s controller puts those counters on it.

122.7. An ability that triggers “When/Whenever the Nth [kind] counter” is put on an object triggers when one or more counters of the appropriate kind are put on the object such that the object had fewer than N counters on it before the counters were put on it and N or more counters on it after.

122.8. If a triggered ability instructs a player to put one object’s counters on another object and that ability’s trigger condition or effect checks that the object with those counters left the battlefield, the player doesn’t move counters from one object to the other. Rather, the player puts the same number of each kind of counter the first object had onto the second object.

2. Parts of a Card

200. General

200.1. The parts of a card are name, mana cost, illustration, color indicator, type line, expansion symbol, text box, power and toughness, loyalty, hand modifier, life modifier, illustration credit, legal text, and collector number. Some cards may have more than one of any or all of these parts.

200.2. Some parts of a card are also characteristics of the object that has them. See rule 109.3.

200.3. Some objects that aren’t cards (tokens, copies of cards, and copies of spells) have some of the parts of a card, but only the ones that are also characteristics. See rule 111 and rule 706.

201. Name

201.1. The name of a card is printed on its upper left corner.

201.2. A card’s name is always considered to be the English version of its name, regardless of printed language.

201.2a Two or more objects have the same name if they have at least one name in common, even if one or more of those objects have additional names. An object with no name doesn’t have the same name as any other object, including another object with no name.

201.2b Some spells and abilities refer to two or more objects with different names. Those objects have different names only if each of them has at least one name and no two objects in that group have a name in common.
Example: A player controls Liliana’s Contract, which says, in part, “At the beginning of your upkeep, if you control four or more Demons with different names, you win the game.” That player controls three Demons with different names and a face-down creature with no name, with an effect making it a Demon. Because the four creatures include one with no name, those four creatures don’t count as four Demons with different names. The ability of Liliana’s Contract won’t trigger.

201.2c Some spells or abilities check if one object has a different name than a second object or group of objects. The first object has a different name than those objects if the first object has at least one name and has no names in common with any of the other objects, even if one or more of the other objects have no names. If the first object has no name, it does not have a different name than any of the other objects, even if those other objects themselves have names.

201.3. If an effect instructs a player to choose a card name, the player must choose the name of a card in the Oracle card reference. (See rule 108.1.) A player may not choose the name of a token unless it’s also the name of a card.

201.3a If a player is instructed to choose a card name with certain characteristics, the player must choose the name of a card whose Oracle text matches those characteristics. (See rule 108.1.)
Example: Dispossess reads, in part, “Choose an artifact card name.” The player can choose the name of any artifact card, even one that’s not legal in the format of the current game. The player can’t choose Island, even if an Island on the battlefield has been turned into artifact by some effect.

201.3b If a player wants to choose the name of a split card, the player must choose the name of one of its halves, but not both. (See rule 708.) If a player is instructed to choose a card name with certain characteristics, use only that half’s characteristics to determine if this name can be chosen.

201.3c If a player wants to choose a flip card’s alternative name, the player may do so. (See rule 709.) If a player is instructed to choose a card name with certain characteristics, use the card’s characteristics as modified by its alternative characteristics to determine if this name can be chosen.

201.3d If a player wants to choose the name of the back face of a double-faced card, the player may do so. (See rule 711.) If a player is instructed to choose a card name with certain characteristics, use only the characteristics of the back face to determine if this name can be chosen.

201.3e If a player wants to choose the name of the combined back face of a meld pair, the player may do so. (See rule 712.) If a player is instructed to choose a card name with certain characteristics, use only the characteristics of the combined back face to determine if this name can be chosen.

201.3f If a player wants to choose an adventurer card’s alternative name, the player may do so. (See rule 715.) If a player is instructed to choose a card name with certain characteristics, use the card’s characteristics as modified by its alternative characteristics to determine if this name can be chosen.

201.4. Text that refers to the object it’s on by name means just that particular object and not any other objects with that name, regardless of any name changes caused by game effects.

201.4a If an ability’s effect grants another ability to an object, and that second ability refers to that first ability’s source by name, the name refers only to the specific object which is that first ability’s source. The second ability does not refer to any other object with the same name as the first ability’s source. However, if the second ability also moved the first ability’s source to a different public zone, the name refers to the object the source became in its new zone. This is also true if the second ability is copied onto a new object.
Example: Gutter Grime has an ability that reads “Whenever a nontoken creature you control dies, put a slime counter on Gutter Grime, then create a green Ooze creature token with ‘This creature’s power and toughness are each equal to the number of slime counters on Gutter Grime.’” The ability granted to the token only looks at the Gutter Grime that created the token, not at any other Gutter Grime on the battlefield. A copy of that token would also have an ability that referred only to the Gutter Grime that created the original token.

201.4b If an ability of an object refers to that object by name, and an object with a different name gains that ability, each instance of the first name in the gained ability that refers to the first object by name should be treated as the second name.
Example: Quicksilver Elemental says, in part, “{U}: Quicksilver Elemental gains all activated abilities of target creature until end of turn.” If it gains an ability that says “{G}: Regenerate Cudgel Troll,” activating that ability will regenerate Quicksilver Elemental, not the Cudgel Troll it gained the ability from.
Example: Glacial Ray is an instant with splice onto Arcane that says “Glacial Ray deals 2 damage to any target.” If it’s spliced onto a Kodama’s Reach, that Kodama’s Reach deals 2 damage to the target.
Example: Dimir Doppelganger says “{1}{U}{B}: Exile target creature card from a graveyard. Dimir Doppelganger becomes a copy of that card and gains this ability.” Dimir Doppelganger’s ability is activated targeting a Runeclaw Bear card. The Doppelganger becomes a copy of Runeclaw Bear and gains an ability that should be treated as saying “{1}{U}{B}: Exile target creature card from a graveyard. Runeclaw Bear becomes a copy of that card and gains this ability.”

201.4c Text printed on some legendary cards refers to that card by a shortened version of its name. Instances of a card’s shortened name used in this manner are treated as though they used the card’s full name.

201.5. Some versions of Ikoria™: Lair of Behemoths cards and other promotional cards feature a name other than their own in the upper left corner, with their normal name in a secondary title bar below it. These cards have only the card name specified in the secondary title bar, not the name printed where a card’s name would normally appear. That name is considered flavor text and has no effect on game play.

202. Mana Cost and Color

202.1. A card’s mana cost is indicated by mana symbols near the top of the card. (See rule 107.4.) On most cards, these symbols are printed in the upper right corner. Some cards from the Future Sight set have alternate frames in which the mana symbols appear to the left of the illustration.

202.1a The mana cost of an object represents what a player must spend from their mana pool to cast that card. Unless an object’s mana cost includes Phyrexian mana symbols (see rule 107.4f), paying that mana cost requires matching the type of any colored or colorless mana symbols as well as paying the generic mana indicated in the cost.

202.1b Some objects have no mana cost. This normally includes all land cards, any other cards that have no mana symbols where their mana cost would appear, tokens (unless the effect that creates them specifies otherwise), and nontraditional Magic cards. Having no mana cost represents an unpayable cost (see rule 118.6). Note that lands are played without paying any costs (see rule 305, “Lands”).

202.2. An object is the color or colors of the mana symbols in its mana cost, regardless of the color of its frame.

202.2a The five colors are white, blue, black, red, and green. The white mana symbol is represented by {W}, blue by {U}, black by {B}, red by {R}, and green by {G}.
Example: An object with a mana cost of {2}{W} is white, an object with a mana cost of {2} is colorless, and one with a mana cost of {2}{W}{B} is both white and black.

202.2b Objects with no colored mana symbols in their mana costs are colorless.

202.2c An object with two or more different colored mana symbols in its mana cost is each of the colors of those mana symbols. Most multicolored cards are printed with a gold frame, but this is not a requirement for a card to be multicolored.

202.2d An object with one or more hybrid mana symbols and/or Phyrexian mana symbols in its mana cost is all of the colors of those mana symbols, in addition to any other colors the object might be. (Most cards with hybrid mana symbols in their mana costs are printed in a two-tone frame. See rule 107.4e.)

202.2e An object may have a color indicator printed to the left of the type line. That object is each color denoted by that color indicator. (See rule 204.)

202.2f Effects may change an object’s color, give a color to a colorless object, or make a colored object become colorless; see rule 105.3.

202.3. The mana value of an object is a number equal to the total amount of mana in its mana cost, regardless of color.
Example: A mana cost of {3}{U}{U} translates to a mana value of 5.

202.3a The mana value of an object with no mana cost is 0, unless that object is the back face of a transforming double-faced permanent or is a melded permanent.

202.3b The mana value of a transforming double-faced permanent’s back face is calculated as though it had the mana cost of its front face. If a permanent is a copy of the back face of a transforming double-faced card (even if the card representing that copy is itself a double-faced card), the mana value of that permanent is 0.
Example: Huntmaster of the Fells is a transforming double-faced card with mana cost {2}{R}{G}. Its mana value is 4. After it transforms to its other face (Ravager of the Fells), its mana value remains 4.
Example: A Clone enters the battlefield as a copy of Ravager of the Fells. Its mana value is 0.
Example: Insectile Aberration is the back face of a transforming double-faced card whose front face has mana cost {U}. It becomes a copy of Ravager of the Fells. Its mana value becomes 0.

202.3c The mana value of a melded permanent is calculated as though it had the combined mana cost of the front faces of each card that represents it. If a permanent is a copy of a melded permanent (even if that copy is represented by two other meld cards), the mana value of the copy is 0.

202.3d The mana value of a split card not on the stack or of a fused split spell on the stack is determined from the combined mana costs of its halves. Otherwise, while a split card is on the stack, the mana value of the spell is determined by the mana cost of the half that was chosen to be cast. See rule 708, “Split Cards.”

202.3e When calculating the mana value of an object with an {X} in its mana cost, X is treated as 0 while the object is not on the stack, and X is treated as the number chosen for it while the object is on the stack.

202.3f When calculating the mana value of an object with a hybrid mana symbol in its mana cost, use the largest component of each hybrid symbol.
Example: The mana value of a card with mana cost {1}{W/U}{W/U} is 3.
Example: The mana value of a card with mana cost {2/B}{2/B}{2/B} is 6.

202.3g Each Phyrexian mana symbol in a card’s mana cost contributes 1 to its mana value.
Example: The mana value of a card with mana cost {1}{W/P}{W/P} is 3.

202.4. Any additional cost listed in an object’s rules text or imposed by an effect isn’t part of the mana cost. (See rule 601, “Casting Spells.”) Such costs are paid at the same time as the spell’s other costs.

203. Illustration

203.1. The illustration is printed on the upper half of a card and has no effect on game play. For example, a creature doesn’t have the flying ability unless stated in its rules text, even if it’s depicted as flying.

204. Color Indicator

204.1. The color indicator is printed to the left of the type line directly below the illustration. It consists of a circular symbol filled in with one or more colors. A color indicator is usually found on nonland cards without a mana cost.

204.2. An object with a color indicator is each color denoted by that color indicator.

205. Type Line

205.1. The type line is printed directly below the illustration. It contains the card’s card type(s). It also contains the card’s subtype(s) and supertype(s), if applicable.

205.1a Some effects set an object’s card type. In such cases, the new card type(s) replaces any existing card types. Counters, effects, and damage marked on the object remain with it, even if they are meaningless to the new card type. Similarly, when an effect sets one or more of an object’s subtypes, the new subtype(s) replaces any existing subtypes from the appropriate set (creature types, land types, artifact types, enchantment types, planeswalker types, or spell types). If an object’s card type is removed, the subtypes correlated with that card type will remain if they are also the subtypes of a card type the object currently has; otherwise, they are also removed for the entire time the object’s card type is removed. Removing an object’s subtype doesn’t affect its card types at all.

205.1b Some effects change an object’s card type, supertype, or subtype but specify that the object retains a prior card type, supertype, or subtype. In such cases, all the object’s prior card types, supertypes, and subtypes are retained. This rule applies to effects that use the phrase “in addition to its types” or that state that something is “still a [type, supertype, or subtype].” Some effects state that an object becomes an “artifact creature”; these effects also allow the object to retain all of its prior card types and subtypes. Some effects state that an object becomes a “[creature type or types] artifact creature”; these effects also allow the object to retain all of its prior card types and subtypes other than creature types, but replace any existing creature types.
Example: An ability reads, “All lands are 1/1 creatures that are still lands.” The affected lands now have two card types: creature and land. If there were any lands that were also artifacts before the ability’s effect applied to them, those lands would become “artifact land creatures,” not just “creatures,” or “land creatures.” The effect allows them to retain both the artifact and land card types. In addition, each land affected by the ability retains any land types and supertypes it had before the ability took effect.
Example: An ability reads, “All artifacts are 1/1 artifact creatures.” If a permanent is both an artifact and an enchantment, it will become an artifact enchantment creature.

205.2. Card Types

205.2a The card types are artifact, conspiracy, creature, enchantment, instant, land, phenomenon, plane, planeswalker, scheme, sorcery, tribal, and vanguard. See section 3, “Card Types.”

205.2b Some objects have more than one card type (for example, an artifact creature). Such objects satisfy the criteria for any effect that applies to any of their card types.

205.2c Tokens have card types even though they aren’t cards. The same is true of copies of spells and copies of cards.

205.3. Subtypes

205.3a A card can have one or more subtypes printed on its type line.

205.3b Subtypes of each card type except plane are always single words and are listed after a long dash. Each word after the dash is a separate subtype; such objects may have multiple types. Subtypes of planes are also listed after a long dash, but may be multiple words; all words after the dash are, collectively, a single subtype.
Example: “Basic Land — Mountain” means the card is a land with the subtype Mountain. “Creature — Goblin Wizard” means the card is a creature with the subtypes Goblin and Wizard. “Artifact — Equipment” means the card is an artifact with the subtype Equipment.

205.3c If a card with multiple card types has one or more subtypes, each subtype is correlated to its appropriate card type.
Example: Dryad Arbor’s type line says “Land Creature — Forest Dryad.” Forest is a land type, and Dryad is a creature type.

205.3d An object can’t gain a subtype that doesn’t correspond to one of that object’s types.

205.3e If an effect instructs a player to choose a subtype, that player must choose one, and only one, existing subtype, and the subtype must be for the appropriate card type. For example, the player can’t choose a land type if an instruction requires choosing a creature type.
Example: When choosing a creature type, “Merfolk” or “Wizard” is acceptable, but “Merfolk Wizard” is not. Words like “artifact,” “opponent,” “Swamp,” or “truck” can’t be chosen because they aren’t creature types.

205.3f Many cards were printed with subtypes that are now obsolete. Many cards have retroactively received subtypes. Use the Oracle card reference to determine what a card’s subtypes are. (See rule 108.1.)

205.3g Artifacts have their own unique set of subtypes; these subtypes are called artifact types. The artifact types are Clue, Contraption, Equipment (see rule 301.5), Food, Fortification (see rule 301.6), Gold, Treasure, and Vehicle (see rule 301.7).

205.3h Enchantments have their own unique set of subtypes; these subtypes are called enchantment types. The enchantment types are Aura (see rule 303.4), Cartouche, Curse, Rune, Saga (see rule 714), Shard, and Shrine.

205.3i Lands have their own unique set of subtypes; these subtypes are called land types. The land types are Desert, Forest, Gate, Island, Lair, Locus, Mine, Mountain, Plains, Power-Plant, Swamp, Tower, and Urza’s.
     Of that list, Forest, Island, Mountain, Plains, and Swamp are the basic land types. See rule 305.6.

205.3j Planeswalkers have their own unique set of subtypes; these subtypes are called planeswalker types. The planeswalker types are Ajani, Aminatou, Angrath, Arlinn, Ashiok, Basri, Bolas, Calix, Chandra, Dack, Daretti, Davriel, Domri, Dovin, Elspeth, Estrid, Freyalise, Garruk, Gideon, Huatli, Jace, Jaya, Jeska, Karn, Kasmina, Kaya, Kiora, Koth, Liliana, Lukka, Nahiri, Narset, Niko, Nissa, Nixilis, Oko, Ral, Rowan, Saheeli, Samut, Sarkhan, Serra, Sorin, Szat, Tamiyo, Teferi, Teyo, Tezzeret, Tibalt, Tyvar, Ugin, Venser, Vivien, Vraska, Will, Windgrace, Wrenn, Xenagos, Yanggu, and Yanling.

205.3k Instants and sorceries share their lists of subtypes; these subtypes are called spell types. The spell types are Adventure, Arcane, Lesson, and Trap.

205.3m Creatures and tribals share their lists of subtypes; these subtypes are called creature types. The creature types are Advisor, Aetherborn, Ally, Angel, Antelope, Ape, Archer, Archon, Army, Artificer, Assassin, Assembly-Worker, Atog, Aurochs, Avatar, Azra, Badger, Barbarian, Basilisk, Bat, Bear, Beast, Beeble, Berserker, Bird, Blinkmoth, Boar, Bringer, Brushwagg, Camarid, Camel, Caribou, Carrier, Cat, Centaur, Cephalid, Chimera, Citizen, Cleric, Cockatrice, Construct, Coward, Crab, Crocodile, Cyclops, Dauthi, Demigod, Demon, Deserter, Devil, Dinosaur, Djinn, Dog, Dragon, Drake, Dreadnought, Drone, Druid, Dryad, Dwarf, Efreet, Egg, Elder, Eldrazi, Elemental, Elephant, Elf, Elk, Eye, Faerie, Ferret, Fish, Flagbearer, Fox, Fractal, Frog, Fungus, Gargoyle, Germ, Giant, Gnome, Goat, Goblin, God, Golem, Gorgon, Graveborn, Gremlin, Griffin, Hag, Harpy, Hellion, Hippo, Hippogriff, Homarid, Homunculus, Horror, Horse, Human, Hydra, Hyena, Illusion, Imp, Incarnation, Inkling, Insect, Jackal, Jellyfish, Juggernaut, Kavu, Kirin, Kithkin, Knight, Kobold, Kor, Kraken, Lamia, Lammasu, Leech, Leviathan, Lhurgoyf, Licid, Lizard, Manticore, Masticore, Mercenary, Merfolk, Metathran, Minion, Minotaur, Mole, Monger, Mongoose, Monk, Monkey, Moonfolk, Mouse, Mutant, Myr, Mystic, Naga, Nautilus, Nephilim, Nightmare, Nightstalker, Ninja, Noble, Noggle, Nomad, Nymph, Octopus, Ogre, Ooze, Orb, Orc, Orgg, Otter, Ouphe, Ox, Oyster, Pangolin, Peasant, Pegasus, Pentavite, Pest, Phelddagrif, Phoenix, Phyrexian, Pilot, Pincher, Pirate, Plant, Praetor, Prism, Processor, Rabbit, Rat, Rebel, Reflection, Rhino, Rigger, Rogue, Sable, Salamander, Samurai, Sand, Saproling, Satyr, Scarecrow, Scion, Scorpion, Scout, Sculpture, Serf, Serpent, Servo, Shade, Shaman, Shapeshifter, Shark, Sheep, Siren, Skeleton, Slith, Sliver, Slug, Snake, Soldier, Soltari, Spawn, Specter, Spellshaper, Sphinx, Spider, Spike, Spirit, Splinter, Sponge, Squid, Squirrel, Starfish, Surrakar, Survivor, Tentacle, Tetravite, Thalakos, Thopter, Thrull, Treefolk, Trilobite, Triskelavite, Troll, Turtle, Unicorn, Vampire, Vedalken, Viashino, Volver, Wall, Warlock, Warrior, Weird, Werewolf, Whale, Wizard, Wolf, Wolverine, Wombat, Worm, Wraith, Wurm, Yeti, Zombie, and Zubera.

205.3n Planes have their own unique set of subtypes; these subtypes are called planar types. The planar types are Alara, Arkhos, Azgol, Belenon, Bolas’s Meditation Realm, Dominaria, Equilor, Ergamon, Fabacin, Innistrad, Iquatana, Ir, Kaldheim, Kamigawa, Karsus, Kephalai, Kinshala, Kolbahan, Kyneth, Lorwyn, Luvion, Mercadia, Mirrodin, Moag, Mongseng, Muraganda, New Phyrexia, Phyrexia, Pyrulea, Rabiah, Rath, Ravnica, Regatha, Segovia, Serra’s Realm, Shadowmoor, Shandalar, Ulgrotha, Valla, Vryn, Wildfire, Xerex, and Zendikar.

205.3p Phenomenon cards, scheme cards, vanguard cards, and conspiracy cards have no subtypes.

205.4. Supertypes

205.4a An object can have one or more supertypes. A card’s supertypes are printed directly before its card types. The supertypes are basic, legendary, ongoing, snow, and world.

205.4b An object’s supertype is independent of its card type and subtype, even though some supertypes are closely identified with specific card types. Changing an object’s card types or subtypes won’t change its supertypes. Changing an object’s supertypes won’t change its card types or subtypes. When an object gains or loses a supertype, it retains any other supertypes it had.
Example: An ability reads, “All lands are 1/1 creatures that are still lands.” If any of the affected lands were legendary, they are still legendary.

205.4c Any land with the supertype “basic” is a basic land. Any land that doesn’t have this supertype is a nonbasic land, even if it has a basic land type.
     Cards printed in sets prior to the Eighth Edition core set didn’t use the word “basic” to indicate a basic land. Cards from those sets with the following names are basic lands and have received errata in the Oracle card reference accordingly: Forest, Island, Mountain, Plains, Swamp, Snow-Covered Forest, Snow-Covered Island, Snow-Covered Mountain, Snow-Covered Plains, and Snow-Covered Swamp.

205.4d Any permanent with the supertype “legendary” is subject to the state-based action for legendary permanents, also called the “legend rule” (see rule 704.5j).

205.4e Any instant or sorcery spell with the supertype “legendary” is subject to a casting restriction. A player can’t cast a legendary instant or sorcery spell unless that player controls a legendary creature or a legendary planeswalker.

205.4f Any permanent with the supertype “world” is subject to the state-based action for world permanents, also called the “world rule” (see rule 704.5k).

205.4g Any permanent with the supertype “snow” is a snow permanent. Any permanent that doesn’t have this supertype is a nonsnow permanent, regardless of its name.

205.4h Any scheme card with the supertype “ongoing” is exempt from the state-based action for schemes (see rule 704.6e).

206. Expansion Symbol

206.1. The expansion symbol indicates which Magic set a card is from. It’s a small icon normally printed below the right edge of the illustration. It has no effect on game play.

206.2. The color of the expansion symbol indicates the rarity of the card within its set. A red-orange symbol indicates the card is mythic rare. A gold symbol indicates the card is rare. A silver symbol indicates the card is uncommon. A black or white symbol indicates the card is common or is a basic land. A purple symbol signifies a special rarity; to date, only the Time Spiral® “timeshifted” cards, which were rarer than that set’s rare cards, have had purple expansion symbols. (Prior to the Exodus™ set, all expansion symbols were black, regardless of rarity. Also, prior to the Sixth Edition core set, with the exception of the Simplified Chinese Fifth Edition core set, Magic core sets didn’t have expansion symbols at all.)

206.3. Previously, a spell or ability that affected cards from a particular set checked for that set’s expansion symbol. These cards have received errata in the Oracle card reference to say they affect cards “with a name originally printed” in a particular set.

206.3a One card (City in a Bottle) refers to permanents and cards with a name originally printed in the Arabian Nights™ expansion. Those names are Abu Ja’far, Aladdin, Aladdin’s Lamp, Aladdin’s Ring, Ali Baba, Ali from Cairo, Army of Allah, Bazaar of Baghdad, Bird Maiden, Bottle of Suleiman, Brass Man, Camel, City in a Bottle, City of Brass, Cuombajj Witches, Cyclone, Dancing Scimitar, Dandân, Desert, Desert Nomads, Desert Twister, Diamond Valley, Drop of Honey, Ebony Horse, Elephant Graveyard, El-Hajjâj, Erg Raiders, Erhnam Djinn, Eye for an Eye, Fishliver Oil, Flying Carpet, Flying Men, Ghazbán Ogre, Giant Tortoise, Guardian Beast, Hasran Ogress, Hurr Jackal, Ifh-Biff Efreet, Island Fish Jasconius, Island of Wak-Wak, Jandor’s Ring, Jandor’s Saddlebags, Jeweled Bird, Jihad, Junún Efreet, Juzám Djinn, Khabál Ghoul, King Suleiman, Kird Ape, Library of Alexandria, Magnetic Mountain, Merchant Ship, Metamorphosis, Mijae Djinn, Moorish Cavalry, Nafs Asp, Oasis, Old Man of the Sea, Oubliette, Piety, Pyramids, Repentant Blacksmith, Ring of Ma’rûf, Rukh Egg, Sandals of Abdallah, Sandstorm, Serendib Djinn, Serendib Efreet, Shahrazad, Sindbad, Singing Tree, Sorceress Queen, Stone-Throwing Devils, Unstable Mutation, War Elephant, Wyluli Wolf, and Ydwen Efreet.

206.3b One card (Golgothian Sylex) refers to permanents with a name originally printed in the Antiquities™ expansion. Those names are Amulet of Kroog, Argivian Archaeologist, Argivian Blacksmith, Argothian Pixies, Argothian Treefolk, Armageddon Clock, Artifact Blast, Artifact Possession, Artifact Ward, Ashnod’s Altar, Ashnod’s Battle Gear, Ashnod’s Transmogrant, Atog, Battering Ram, Bronze Tablet, Candelabra of Tawnos, Circle of Protection: Artifacts, Citanul Druid, Clay Statue, Clockwork Avian, Colossus of Sardia, Coral Helm, Crumble, Cursed Rack, Damping Field, Detonate, Drafna’s Restoration, Dragon Engine, Dwarven Weaponsmith, Energy Flux, Feldon’s Cane, Gaea’s Avenger, Gate to Phyrexia, Goblin Artisans, Golgothian Sylex, Grapeshot Catapult, Haunting Wind, Hurkyl’s Recall, Ivory Tower, Jalum Tome, Martyrs of Korlis, Mightstone, Millstone, Mishra’s Factory, Mishra’s War Machine, Mishra’s Workshop, Obelisk of Undoing, Onulet, Orcish Mechanics, Ornithopter, Phyrexian Gremlins, Power Artifact, Powerleech, Priest of Yawgmoth, Primal Clay, The Rack, Rakalite, Reconstruction, Reverse Polarity, Rocket Launcher, Sage of Lat-Nam, Shapeshifter, Shatterstorm, Staff of Zegon, Strip Mine, Su-Chi, Tablet of Epityr, Tawnos’s Coffin, Tawnos’s Wand, Tawnos’s Weaponry, Tetravus, Titania’s Song, Transmute Artifact, Triskelion, Urza’s Avenger, Urza’s Chalice, Urza’s Mine, Urza’s Miter, Urza’s Power Plant, Urza’s Tower, Wall of Spears, Weakstone, Xenic Poltergeist, Yawgmoth Demon, and Yotian Soldier.

206.3c One card (Apocalypse Chime) refers to permanents with a name originally printed in the Homelands™ expansion. Those names are Abbey Gargoyles; Abbey Matron; Aether Storm; Aliban’s Tower; Ambush; Ambush Party; Anaba Ancestor; Anaba Bodyguard; Anaba Shaman; Anaba Spirit Crafter; An-Havva Constable; An-Havva Inn; An-Havva Township; An-Zerrin Ruins; Apocalypse Chime; Autumn Willow; Aysen Abbey; Aysen Bureaucrats; Aysen Crusader; Aysen Highway; Baki’s Curse; Baron Sengir; Beast Walkers; Black Carriage; Broken Visage; Carapace; Castle Sengir; Cemetery Gate; Chain Stasis; Chandler; Clockwork Gnomes; Clockwork Steed; Clockwork Swarm; Coral Reef; Dark Maze; Daughter of Autumn; Death Speakers; Didgeridoo; Drudge Spell; Dry Spell; Dwarven Pony; Dwarven Sea Clan; Dwarven Trader; Ebony Rhino; Eron the Relentless; Evaporate; Faerie Noble; Feast of the Unicorn; Feroz’s Ban; Folk of An-Havva; Forget; Funeral March; Ghost Hounds; Giant Albatross; Giant Oyster; Grandmother Sengir; Greater Werewolf; Hazduhr the Abbot; Headstone; Heart Wolf; Hungry Mist; Ihsan’s Shade; Irini Sengir; Ironclaw Curse; Jinx; Joven; Joven’s Ferrets; Joven’s Tools; Koskun Falls; Koskun Keep; Labyrinth Minotaur; Leaping Lizard; Leeches; Mammoth Harness; Marjhan; Memory Lapse; Merchant Scroll; Mesa Falcon; Mystic Decree; Narwhal; Orcish Mine; Primal Order; Prophecy; Rashka the Slayer; Reef Pirates; Renewal; Retribution; Reveka, Wizard Savant; Root Spider; Roots; Roterothopter; Rysorian Badger; Samite Alchemist; Sea Sprite; Sea Troll; Sengir Autocrat; Sengir Bats; Serra Aviary; Serra Bestiary; Serra Inquisitors; Serra Paladin; Serrated Arrows; Shrink; Soraya the Falconer; Spectral Bears; Timmerian Fiends; Torture; Trade Caravan; Truce; Veldrane of Sengir; Wall of Kelp; Willow Faerie; Willow Priestess; Winter Sky; and Wizards’ School.

206.4. Players may include cards from any printing in their constructed decks if those cards appear in sets allowed in that format (or those cards are specifically allowed by the Magic: The Gathering Tournament Rules). See the Magic: The Gathering Tournament Rules for the current definitions of the constructed formats (WPN.Wizards.com/en/resources/rules-documents).

206.5. The full list of expansions and expansion symbols can be found in the Card Set Archive section of the Magic website (Magic.Wizards.com/en/game-info/products/card-set-archive).

207. Text Box

207.1. The text box is printed on the lower half of the card. It usually contains rules text defining the card’s abilities.

207.2. The text box may also contain italicized text that has no game function.

207.2a Reminder text is italicized text within parentheses that summarizes a rule that applies to that card. It usually appears on the same line as the ability it’s relevant to, but it may appear on its own line if it applies to an aspect of the card other than an ability.

207.2b Flavor text is italicized text that, like the illustration, adds artistic appeal to the game. It appears below the rules text.

207.2c An ability word appears in italics at the beginning of some abilities. Ability words are similar to keywords in that they tie together cards that have similar functionality, but they have no special rules meaning and no individual entries in the Comprehensive Rules. The ability words are adamant, addendum, battalion, bloodrush, channel, chroma, cohort, constellation, converge, council’s dilemma, delirium, domain, eminence, enrage, fateful hour, ferocious, formidable, grandeur, hellbent, heroic, imprint, inspired, join forces, kinship, landfall, lieutenant, magecraft, metalcraft, morbid, parley, radiance, raid, rally, revolt, spell mastery, strive, sweep, tempting offer, threshold, undergrowth, and will of the council.

207.3. Some cards have decorative icons in the background of their text boxes. For example, a guild icon appears in the text box of many cards associated with the guilds of Ravnica, and a faction icon appears in the text box of most Scars of Mirrodin™ block cards. Similarly, many promotional cards include decorative icons. These icons have no effect on game play.

207.4. The chaos symbol {CHAOS} appears in the text box of each plane card to the left of a triggered ability that triggers whenever {CHAOS} is rolled on the planar die. The symbol itself has no special rules meaning.

208. Power/Toughness

208.1. A creature card has two numbers separated by a slash printed in its lower right corner. The first number is its power (the amount of damage it deals in combat); the second is its toughness (the amount of damage needed to destroy it). For example, 2/3 means the object has power 2 and toughness 3. Power and toughness can be modified or set to particular values by effects.

208.2. Rather than a fixed number, some creature cards have power and/or toughness that includes a star (*).

208.2a The card may have a characteristic-defining ability that sets its power and/or toughness according to some stated condition. (See rule 604.3.) Such an ability is worded “[This creature’s] [power or toughness] is equal to . . .” or “[This creature’s] power and toughness are each equal to . . .” This ability functions everywhere, even outside the game. If the ability needs to use a number that can’t be determined, including inside a calculation, use 0 instead of that number.
Example: Lost Order of Jarkeld has power and toughness each equal to 1+*. It has the abilities “As Lost Order of Jarkeld enters the battlefield, choose an opponent” and “Lost Order of Jarkeld’s power and toughness are each equal to 1 plus the number of creatures the chosen player controls.” While Lost Order of Jarkeld isn’t on the battlefield, there won’t be a chosen player. Its power and toughness will each be equal to 1 plus 0, so it’s 1/1.

208.2b The card may have a static ability that creates a replacement effect that sets the creature’s power and toughness to one of a number of specific values as it enters the battlefield or is turned face up. (See rule 614, “Replacement Effects.”) Such an ability is worded “As [this creature] enters the battlefield . . . ,” “As [this creature] is turned face up . . . ,” or “[This creature] enters the battlefield as . . .” and lists two or more specific power and toughness values (and may also list additional characteristics). The characteristics chosen or determined with these effects affect the creature’s copiable values. (See rule 706.2.) While the card isn’t on the battlefield, its power and toughness are each considered to be 0.

208.3. A noncreature permanent has no power or toughness, even if it’s a card with a power and toughness printed on it (such as a Vehicle). A noncreature object not on the battlefield has power or toughness only if it has a power and toughness printed on it.

208.3a If an effect would be created that affects the power and/or toughness of a noncreature permanent, that effect is created even though it doesn’t do anything unless that permanent becomes a creature.
Example: Veteran Motorist has the ability “Whenever Veteran Motorist crews a Vehicle, that Vehicle gets +1/+1 until end of turn,” and it’s tapped to pay the crew cost of a Vehicle. This triggered ability resolves while the Vehicle it crewed isn’t yet a creature. The continuous effect is created and will apply to the Vehicle once it becomes a creature.

208.4. Effects that set a creature’s power and/or toughness to specific values may refer to that creature’s “base power,” “base toughness,” or “base power and toughness.” Other continuous effects may further modify the creature’s power and toughness. See rule 613, “Interaction of Continuous Effects.”

208.5. If a creature somehow has no value for its power, its power is 0. The same is true for toughness.

209. Loyalty

209.1. Each planeswalker card has a loyalty number printed in its lower right corner. This indicates its loyalty while it’s not on the battlefield, and it also indicates that the planeswalker enters the battlefield with that many loyalty counters on it.

209.2. An activated ability with a loyalty symbol in its cost is a loyalty ability. Loyalty abilities follow special rules: A player may activate a loyalty ability of a permanent they control any time they have priority and the stack is empty during a main phase of their turn, but only if none of that permanent’s loyalty abilities have been activated that turn. See rule 606, “Loyalty Abilities.”

210. Hand Modifier

210.1. Each vanguard card has a hand modifier printed in its lower left corner. This is a number preceded by a plus sign, a number preceded by a minus sign, or a zero. This modifier is applied as the starting hand size and the maximum hand size of the vanguard card’s owner are determined. See rule 103.4.

211. Life Modifier

211.1. Each vanguard card has a life modifier printed in its lower right corner. This is a number preceded by a plus sign, a number preceded by a minus sign, or a zero. This modifier is applied as the starting life total of the vanguard card’s owner is determined. See rule 103.3.

212. Information Below the Text Box

212.1. Each card features text printed below the text box that has no effect on game play. Not all card sets were printed with all of the information listed below on each card.

212.1a Most card sets feature collector numbers. This information is printed in the form [card number]/[total cards in the set] or simply [card number]. Some cards, such as unique cards in Planeswalker Decks, have card numbers that exceed the listed total number of cards.

212.1b A card’s rarity is indicated with a single letter following the collector number.

212.1c Some promotional cards include information to indicate the specific promotion the card is associated with.

212.1d The three-character code representing the set in which a card is printed and the two-character code representing the language in which a card is printed are separated by a bullet point. If a card is premium, these codes are instead separated by a star.

212.1e The illustration credit for a card follows the paintbrush icon or, on older cards, the abbreviation “Illus.”

212.1f Legal text (the fine print at the bottom or bottom-right of the card) lists the trademark and copyright information.

3. Card Types

300. General

300.1. The card types are artifact, conspiracy, creature, enchantment, instant, land, phenomenon, plane, planeswalker, scheme, sorcery, tribal, and vanguard.

300.2. Some objects have more than one card type (for example, an artifact creature). Such objects combine the aspects of each of those card types, and are subject to spells and abilities that affect either or all of those card types.

300.2a An object that’s both a land and another card type (for example, an artifact land) can only be played as a land. It can’t be cast as a spell.

300.2b Each tribal card has another card type. Casting and resolving a tribal card follow the rules for casting and resolving a card of the other card type.

301. Artifacts

301.1. A player who has priority may cast an artifact card from their hand during a main phase of their turn when the stack is empty. Casting an artifact as a spell uses the stack. (See rule 601, “Casting Spells.”)

301.2. When an artifact spell resolves, its controller puts it onto the battlefield under their control.

301.3. Artifact subtypes are always a single word and are listed after a long dash: “Artifact — Equipment.” Artifact subtypes are also called artifact types. Artifacts may have multiple subtypes. See rule 205.3g for the complete list of artifact types.

301.4. Artifacts have no characteristics specific to their card type. Most artifacts have no colored mana symbols in their mana costs, and are therefore colorless. However, there is no correlation between being colorless and being an artifact: artifacts may be colored, and colorless objects may be card types other than artifact.

301.5. Some artifacts have the subtype “Equipment.” An Equipment can be attached to a creature. It can’t legally be attached to anything that isn’t a creature.

301.5a The creature an Equipment is attached to is called the “equipped creature.” The Equipment is attached to, or “equips,” that creature.

301.5b An Equipment is cast and enters the battlefield just like any other artifact. An Equipment doesn’t enter the battlefield attached to a creature. The equip keyword ability attaches the Equipment to a creature you control (see rule 702.6, “Equip”). Control of the creature matters only when the equip ability is activated and when it resolves. Spells and other abilities may also attach an Equipment to a creature. If an effect attempts to attach an Equipment to an object that can’t be equipped by it, the Equipment doesn’t move.

301.5c An Equipment that’s also a creature can’t equip a creature. An Equipment that loses the subtype “Equipment” can’t equip a creature. An Equipment can’t equip itself. An Equipment that equips an illegal or nonexistent permanent becomes unattached from that permanent but remains on the battlefield. (This is a state-based action. See rule 704.) An Equipment can’t equip more than one creature. If a spell or ability would cause an Equipment to equip more than one creature, the Equipment’s controller chooses which creature it equips.

301.5d An Equipment’s controller is separate from the equipped creature’s controller; the two need not be the same. Changing control of the creature doesn’t change control of the Equipment, and vice versa. Only the Equipment’s controller can activate its abilities. However, if the Equipment grants an ability to the equipped creature (with “gains” or “has”), the equipped creature’s controller is the only one who can activate that ability.

301.5e An ability of a permanent that refers to the “equipped creature” refers to whatever creature that permanent is attached to, even if the permanent with the ability isn’t an Equipment.

301.6. Some artifacts have the subtype “Fortification.” A Fortification can be attached to a land. It can’t legally be attached to an object that isn’t a land. Fortification’s analog to the equip keyword ability is the fortify keyword ability. Rules 301.5a–e apply to Fortifications in relation to lands just as they apply to Equipment in relation to creatures, with one clarification relating to rule 301.5c: a Fortification that’s also a creature (not a land) can’t fortify a land. (See rule 702.67, “Fortify.”)

301.7. Some artifacts have the subtype “Vehicle.” Vehicles have a crew ability, which allows them to become artifact creatures. See rule 702.122, “Crew.”

301.7a Each Vehicle has a printed power and toughness, but it has these characteristics only if it’s also a creature. See rule 208.3.

301.7b If a Vehicle becomes a creature, it immediately has its printed power and toughness. Other effects, including the effect that makes it a creature, may modify these values or set them to different values.

302. Creatures

302.1. A player who has priority may cast a creature card from their hand during a main phase of their turn when the stack is empty. Casting a creature as a spell uses the stack. (See rule 601, “Casting Spells.”)

302.2. When a creature spell resolves, its controller puts it onto the battlefield under their control.

302.3. Creature subtypes are always a single word and are listed after a long dash: “Creature — Human Soldier,” “Artifact Creature — Golem,” and so on. Creature subtypes are also called creature types. Creatures may have multiple subtypes. See rule 205.3m for the complete list of creature types.
Example: “Creature — Goblin Wizard” means the card is a creature with the subtypes Goblin and Wizard.

302.4. Power and toughness are characteristics only creatures have.

302.4a A creature’s power is the amount of damage it deals in combat.

302.4b A creature’s toughness is the amount of damage needed to destroy it.

302.4c To determine a creature’s power and toughness, start with the numbers printed in its lower right corner, then apply any applicable continuous effects. (See rule 613, “Interaction of Continuous Effects.”)

302.5. Creatures can attack and block. (See rule 508, “Declare Attackers Step,” and rule 509, “Declare Blockers Step.”)

302.6. A creature’s activated ability with the tap symbol or the untap symbol in its activation cost can’t be activated unless the creature has been under its controller’s control continuously since their most recent turn began. A creature can’t attack unless it has been under its controller’s control continuously since their most recent turn began. This rule is informally called the “summoning sickness” rule.

302.7. Damage dealt to a creature by a source with neither wither nor infect is marked on that creature (see rule 120.3). If the total damage marked on that creature is greater than or equal to its toughness, that creature has been dealt lethal damage and is destroyed as a state-based action (see rule 704). All damage marked on a creature is removed when it regenerates (see rule 701.15, “Regenerate”) and during the cleanup step (see rule 514.2).

303. Enchantments

303.1. A player who has priority may cast an enchantment card from their hand during a main phase of their turn when the stack is empty. Casting an enchantment as a spell uses the stack. (See rule 601, “Casting Spells.”)

303.2. When an enchantment spell resolves, its controller puts it onto the battlefield under their control.

303.3. Enchantment subtypes are always a single word and are listed after a long dash: “Enchantment — Shrine.” Each word after the dash is a separate subtype. Enchantment subtypes are also called enchantment types. Enchantments may have multiple subtypes. See rule 205.3h for the complete list of enchantment types.

303.4. Some enchantments have the subtype “Aura.” An Aura enters the battlefield attached to an object or player. What an Aura can be attached to is defined by its enchant keyword ability (see rule 702.5, “Enchant”). Other effects can limit what a permanent can be enchanted by.

303.4a An Aura spell requires a target, which is defined by its enchant ability.

303.4b The object or player an Aura is attached to is called enchanted. The Aura is attached to, or “enchants,” that object or player.

303.4c If an Aura is enchanting an illegal object or player as defined by its enchant ability and other applicable effects, the object it was attached to no longer exists, or the player it was attached to has left the game, the Aura is put into its owner’s graveyard. (This is a state-based action. See rule 704.)

303.4d An Aura can’t enchant itself. If this occurs somehow, the Aura is put into its owner’s graveyard. An Aura that’s also a creature can’t enchant anything. If this occurs somehow, the Aura becomes unattached, then is put into its owner’s graveyard. (These are state-based actions. See rule 704.) An Aura can’t enchant more than one object or player. If a spell or ability would cause an Aura to become attached to more than one object or player, the Aura’s controller chooses which object or player it becomes attached to.

303.4e An Aura’s controller is separate from the enchanted object’s controller or the enchanted player; the two need not be the same. If an Aura enchants an object, changing control of the object doesn’t change control of the Aura, and vice versa. Only the Aura’s controller can activate its abilities. However, if the Aura grants an ability to the enchanted object (with “gains” or “has”), the enchanted object’s controller is the only one who can activate that ability.

303.4f If an Aura is entering the battlefield under a player’s control by any means other than by resolving as an Aura spell, and the effect putting it onto the battlefield doesn’t specify the object or player the Aura will enchant, that player chooses what it will enchant as the Aura enters the battlefield. The player must choose a legal object or player according to the Aura’s enchant ability and any other applicable effects.

303.4g If an Aura is entering the battlefield and there is no legal object or player for it to enchant, the Aura remains in its current zone, unless that zone is the stack. In that case, the Aura is put into its owner’s graveyard instead of entering the battlefield.

303.4h If an effect attempts to put a permanent that isn’t an Aura, Equipment, or Fortification onto the battlefield attached to an object or player, it enters the battlefield unattached.

303.4i If an effect attempts to put an Aura onto the battlefield attached to an object or player it can’t legally enchant, the Aura remains in its current zone, unless that zone is the stack. In that case, the Aura is put into its owner’s graveyard instead of entering the battlefield. If the Aura is a token, it isn’t created.

303.4j If an effect attempts to attach an Aura on the battlefield to an object or player it can’t legally enchant, the Aura doesn’t move.

303.4k If an effect allows an Aura that’s being turned face up to become attached to an object or player, the Aura’s controller considers the characteristics of that Aura as it would exist if it were face up to determine what it may be attached to, and they must choose a legal object or player according to the Aura’s enchant ability and any other applicable effects.

303.4m An ability of a permanent that refers to the “enchanted [object or player]” refers to whatever object or player that permanent is attached to, even if the permanent with the ability isn’t an Aura.

303.5. Some enchantments have the subtype “Saga.” See rule 714 for more information about Saga cards.

304. Instants

304.1. A player who has priority may cast an instant card from their hand. Casting an instant as a spell uses the stack. (See rule 601, “Casting Spells.”)

304.2. When an instant spell resolves, the actions stated in its rules text are followed. Then it’s put into its owner’s graveyard.

304.3. Instant subtypes are always a single word and are listed after a long dash: “Instant — Arcane.” Each word after the dash is a separate subtype. The set of instant subtypes is the same as the set of sorcery subtypes; these subtypes are called spell types. Instants may have multiple subtypes. See rule 205.3k for the complete list of spell types.

304.4. Instants can’t enter the battlefield. If an instant would enter the battlefield, it remains in its previous zone instead.

304.5. If text states that a player may do something “any time they could cast an instant” or “only as an instant,” it means only that the player must have priority. The player doesn’t need to have an instant card they could cast. Effects that would preclude that player from casting an instant spell don’t affect the player’s capability to perform that action (unless the action is actually casting an instant spell).

305. Lands

305.1. A player who has priority may play a land card from their hand during a main phase of their turn when the stack is empty. Playing a land is a special action; it doesn’t use the stack (see rule 116). Rather, the player simply puts the land onto the battlefield. Since the land doesn’t go on the stack, it is never a spell, and players can’t respond to it with instants or activated abilities.

305.2. A player can normally play one land during their turn; however, continuous effects may increase this number.

305.2a To determine whether a player can play a land, compare the number of lands the player can play this turn with the number of lands they have already played this turn (including lands played as special actions and lands played during the resolution of spells and abilities). If the number of lands the player can play is greater, the play is legal.

305.2b A player can’t play a land, for any reason, if the number of lands the player can play this turn is equal to or less than the number of lands they have already played this turn. Ignore any part of an effect that instructs a player to do so.

305.3. A player can’t play a land, for any reason, if it isn’t their turn. Ignore any part of an effect that instructs a player to do so.

305.4. Effects may also allow players to “put” lands onto the battlefield. This isn’t the same as “playing a land” and doesn’t count as a land played during the current turn.

305.5. Land subtypes are always a single word and are listed after a long dash. Land subtypes are also called land types. Lands may have multiple subtypes. See rule 205.3i for the complete list of land types.
Example: “Basic Land — Mountain” means the card is a land with the subtype Mountain.

305.6. The basic land types are Plains, Island, Swamp, Mountain, and Forest. If an object uses the words “basic land type,” it’s referring to one of these subtypes. An object with the land card type and a basic land type has the intrinsic ability “{T}: Add [mana symbol],” even if the text box doesn’t actually contain that text or the object has no text box. For Plains, [mana symbol] is {W}; for Islands, {U}; for Swamps, {B}; for Mountains, {R}; and for Forests, {G}. See rule 107.4a. See also rule 605, “Mana Abilities.”

305.7. If an effect sets a land’s subtype to one or more of the basic land types, the land no longer has its old land type. It loses all abilities generated from its rules text, its old land types, and any copy effects affecting that land, and it gains the appropriate mana ability for each new basic land type. Note that this doesn’t remove any abilities that were granted to the land by other effects. Setting a land’s subtype doesn’t add or remove any card types (such as creature) or supertypes (such as basic, legendary, and snow) the land may have. If a land gains one or more land types in addition to its own, it keeps its land types and rules text, and it gains the new land types and mana abilities.

305.8. Any land with the supertype “basic” is a basic land. Any land that doesn’t have this supertype is a nonbasic land, even if it has a basic land type.

305.9. If an object is both a land and another card type, it can be played only as a land. It can’t be cast as a spell.

306. Planeswalkers

306.1. A player who has priority may cast a planeswalker card from their hand during a main phase of their turn when the stack is empty. Casting a planeswalker as a spell uses the stack. (See rule 601, “Casting Spells.”)

306.2. When a planeswalker spell resolves, its controller puts it onto the battlefield under their control.

306.3. Planeswalker subtypes are always a single word and are listed after a long dash: “Planeswalker — Jace.” Each word after the dash is a separate subtype. Planeswalker subtypes are also called planeswalker types. Planeswalkers may have multiple subtypes. See rule 205.3j for the complete list of planeswalker types.

306.4. Previously, planeswalkers were subject to a “planeswalker uniqueness rule” that stopped a player from controlling two planeswalkers of the same planeswalker type. This rule has been removed and planeswalker cards printed before this change have received errata in the Oracle card reference to have the legendary supertype. Like other legendary permanents, they are subject to the “legend rule” (see rule 704.5j).

306.5. Loyalty is a characteristic only planeswalkers have.

306.5a The loyalty of a planeswalker card not on the battlefield is equal to the number printed in its lower right corner.

306.5b A planeswalker has the intrinsic ability “This permanent enters the battlefield with a number of loyalty counters on it equal to its printed loyalty number.” This ability creates a replacement effect (see rule 614.1c).

306.5c The loyalty of a planeswalker on the battlefield is equal to the number of loyalty counters on it.

306.5d Each planeswalker has a number of loyalty abilities, which are activated abilities with loyalty symbols in their costs. Loyalty abilities follow special rules: A player may activate a loyalty ability of a permanent they control any time they have priority and the stack is empty during a main phase of their turn, but only if none of that permanent’s loyalty abilities have been activated that turn. See rule 606, “Loyalty Abilities.”

306.6. Planeswalkers can be attacked. (See rule 508, “Declare Attackers Step.”)

306.7. Previously, planeswalkers were subject to a redirection effect that allowed a player to have noncombat damage that would be dealt to an opponent be dealt to a planeswalker under that opponent’s control instead. This rule has been removed and certain cards have received errata in the Oracle card reference to deal damage directly to planeswalkers.

306.8. Damage dealt to a planeswalker results in that many loyalty counters being removed from it.

306.9. If a planeswalker’s loyalty is 0, it’s put into its owner’s graveyard. (This is a state-based action. See rule 704.)

307. Sorceries

307.1. A player who has priority may cast a sorcery card from their hand during a main phase of their turn when the stack is empty. Casting a sorcery as a spell uses the stack. (See rule 601, “Casting Spells.”)

307.2. When a sorcery spell resolves, the actions stated in its rules text are followed. Then it’s put into its owner’s graveyard.

307.3. Sorcery subtypes are always a single word and are listed after a long dash: “Sorcery — Arcane.” Each word after the dash is a separate subtype. The set of sorcery subtypes is the same as the set of instant subtypes; these subtypes are called spell types. Sorceries may have multiple subtypes. See rule 205.3k for the complete list of spell types.

307.4. Sorceries can’t enter the battlefield. If a sorcery would enter the battlefield, it remains in its previous zone instead.

307.5. If a spell, ability, or effect states that a player can do something only “any time they could cast a sorcery” or “only as a sorcery,” it means only that the player must have priority, it must be during the main phase of their turn, and the stack must be empty. The player doesn’t need to have a sorcery card they could cast. Effects that would preclude that player from casting a sorcery spell don’t affect the player’s capability to perform that action (unless the action is actually casting a sorcery spell).

307.5a Similarly, if an effect checks to see if a spell was cast “any time a sorcery couldn’t have been cast,” it’s checking only whether the spell’s controller cast it without having priority, during a phase other than their main phase, or while another object was on the stack.

308. Tribals

308.1. Each tribal card has another card type. Casting and resolving a tribal card follows the rules for casting and resolving a card of the other card type.

308.2. Tribal subtypes are always a single word and are listed after a long dash: “Tribal Enchantment — Merfolk.” The set of tribal subtypes is the same as the set of creature subtypes; these subtypes are called creature types. Tribals may have multiple subtypes. See rule 205.3m for the complete list of creature types.

309. Planes

309.1. Plane is a card type seen only on nontraditional Magic cards. Only the Planechase casual variant uses plane cards. See rule 901, “Planechase.”

309.2. Plane cards remain in the command zone throughout the game, both while they’re part of a planar deck and while they’re face up. They’re not permanents. They can’t be cast. If a plane card would leave the command zone, it remains in the command zone.

309.3. Plane subtypes are listed after a long dash, and may be multiple words: “Plane — Serra’s Realm.” All words after the dash are, collectively, a single subtype. Planar subtypes are called planar types. A plane can have only one subtype. See rule 205.3n for the complete list of planar types.

309.4. A plane card may have any number of static, triggered, and/or activated abilities. As long as a plane card is face up in the command zone, its static abilities affect the game, its triggered abilities may trigger, and its activated abilities may be activated.

309.5. The controller of a face-up plane card is the player designated as the planar controller. Normally, the planar controller is whoever the active player is. However, if the current planar controller would leave the game, instead the next player in turn order that wouldn’t leave the game becomes the planar controller, then the old planar controller leaves the game. The new planar controller retains that designation until they leave the game or a different player becomes the active player, whichever comes first.

309.6. A face-up plane card that’s turned face down becomes a new object.

309.7. Each plane card has a triggered ability that triggers “Whenever you roll {CHAOS}.” These are called “chaos abilities.” Each one is indicated by a {CHAOS} to its left, though the symbol itself has no special rules meaning.

310. Phenomena

310.1. Phenomenon is a card type seen only on nontraditional Magic cards. Only the Planechase casual variant uses phenomenon cards. See rule 901, “Planechase.”

310.2. Phenomenon cards remain in the command zone throughout the game, both while they’re part of a planar deck and while they’re face up. They’re not permanents. They can’t be cast. If a phenomenon card would leave the command zone, it remains in the command zone.

310.3. Phenomenon cards have no subtypes.

310.4. The controller of a face-up phenomenon card is the player designated as the planar controller. Normally, the planar controller is whoever the active player is. However, if the current planar controller would leave the game, instead the next player in turn order that wouldn’t leave the game becomes the planar controller, then the old planar controller leaves the game. The new planar controller retains that designation until they leave the game or a different player becomes the active player, whichever comes first.

310.5. Each phenomenon card has a triggered ability that triggers when you encounter it. “When you encounter [this phenomenon]” means “When you move this card off a planar deck and turn it face up.”

310.6. A face-up phenomenon card that’s turned face down becomes a new object.

310.7. If a phenomenon card is face up in the command zone, and it isn’t the source of a triggered ability that has triggered but not yet left the stack, the planar controller planeswalks the next time a player would receive priority. (This is a state-based action; see rule 704. See also rule 701.24, “Planeswalk.”)

311. Vanguards

311.1. Vanguard is a card type seen only on nontraditional Magic cards. Only the Vanguard casual variant uses vanguard cards. See rule 902, “Vanguard.”

311.2. Vanguard cards remain in the command zone throughout the game. They’re not permanents. They can’t be cast. If a vanguard card would leave the command zone, it remains in the command zone.

311.3. Vanguard cards have no subtypes.

311.4. A vanguard card may have any number of static, triggered, and/or activated abilities. As long as a vanguard card is in the command zone, its static abilities affect the game, its triggered abilities may trigger, and its activated abilities may be activated.

311.5. The owner of a vanguard card is the player who started the game with it in the command zone. The controller of a face-up vanguard card is its owner.

311.6. Each vanguard card has a hand modifier printed in its lower left corner. This is a number preceded by a plus sign, a number preceded by a minus sign, or a zero. This modifier is applied to the starting hand size and maximum hand size of the vanguard card’s owner (normally seven). The resulting number is both how many cards that player draws at the beginning of the game and their maximum hand size.

311.7. Each vanguard card has a life modifier printed in its lower right corner. This is a number preceded by a plus sign, a number preceded by a minus sign, or a zero. This modifier is applied as the starting life total of the vanguard card’s owner (normally 20) to is determined. See rule 103.3.

312. Schemes

312.1. Scheme is a card type seen only on nontraditional Magic cards. Only the Archenemy casual variant uses scheme cards. See rule 904, “Archenemy.”

312.2. Scheme cards remain in the command zone throughout the game, both while they’re part of a scheme deck and while they’re face up. They’re not permanents. They can’t be cast. If a scheme card would leave the command zone, it remains in the command zone.

312.3. Scheme cards have no subtypes.

312.4. A scheme card may have any number of static, triggered, and/or activated abilities. As long as a scheme card is face up in the command zone, its static abilities affect the game, its triggered abilities may trigger, and its activated abilities may be activated.

312.5. The owner of a scheme card is the player who started the game with it in the command zone. The controller of a face-up scheme card is its owner.

312.6. If a non-ongoing scheme card is face up in the command zone, and no triggered abilities of any scheme are on the stack or waiting to be put on the stack, that scheme card is turned face down and put on the bottom of its owner’s scheme deck the next time a player would receive priority. (This is a state-based action. See rule 704.)

312.7. If an ability of a scheme card includes the text “this scheme,” it means the scheme card in the command zone that’s the source of that ability. This is an exception to rule 109.2.

313. Conspiracies

313.1. Conspiracy cards are used only in limited play, particularly in the Conspiracy Draft variant (see rule 905). Conspiracy cards aren’t used in constructed play.

313.2. At the start of a game, before decks are shuffled, each player may put any number of conspiracy cards from their sideboard into the command zone. Conspiracy cards with hidden agenda are put into the command zone face down. (See rule 702.106, “Hidden Agenda.”)

313.3. Conspiracy cards remain in the command zone throughout the game. They’re not permanents. They can’t be cast or included in a deck. If a conspiracy card would leave the command zone, it remains in the command zone. Conspiracy cards that aren’t in the game can’t be brought into the game.

313.4. Conspiracy cards have no subtypes.

313.5. Conspiracy cards may have any number of static or triggered abilities. As long as a conspiracy card is face up in the command zone, its static abilities affect the game, and its triggered abilities may trigger.

313.5a Abilities of conspiracy cards may affect the start-of-game procedure.

313.5b Face-down conspiracy cards have no characteristics.

313.6. The owner of a conspiracy card is the player who put it into the command zone at the start of the game. The controller of a conspiracy card is its owner.

313.7. At any time, you may look at a face-down conspiracy card you control. You can’t look at face-down conspiracy cards controlled by other players.


4. Zones

400. General

400.1. A zone is a place where objects can be during a game. There are normally seven zones: library, hand, battlefield, graveyard, stack, exile, and command. Some older cards also use the ante zone. Each player has their own library, hand, and graveyard. The other zones are shared by all players.

400.2. Public zones are zones in which all players can see the cards’ faces, except for those cards that some rule or effect specifically allow to be face down. Graveyard, battlefield, stack, exile, ante, and command are public zones. Hidden zones are zones in which not all players can be expected to see the cards’ faces. Library and hand are hidden zones, even if all the cards in one such zone happen to be revealed.

400.3. If an object would go to any library, graveyard, or hand other than its owner’s, it goes to its owner’s corresponding zone.

400.4. Cards with certain card types can’t enter certain zones.

400.4a If an instant or sorcery card would enter the battlefield, it remains in its previous zone.

400.4b If a conspiracy, phenomenon, plane, scheme, or vanguard card would leave the command zone, it remains in the command zone.

400.5. The order of objects in a library, in a graveyard, or on the stack can’t be changed except when effects or rules allow it. The same is true for objects arranged in face-down piles in other zones. Other objects in other zones can be arranged however their owners wish, although who controls those objects, whether they’re tapped or flipped, and what other objects are attached to them must remain clear to all players.

400.6. If an object would move from one zone to another, determine what event is moving the object. If the object is moving to a public zone and its owner will be able to look at it in that zone, its owner looks at it to see if it has any abilities that would affect the move. If the object is moving to the battlefield, each other player who will be able to look at it in that zone does so. Then any appropriate replacement effects, whether they come from that object or from elsewhere, are applied to that event. If any effects or rules try to do two or more contradictory or mutually exclusive things to a particular object, that object’s controller—or its owner if it has no controller—chooses which effect to apply, and what that effect does. (Note that multiple instances of the same thing may be mutually exclusive; for example, two simultaneous “destroy” effects.) Then the event moves the object.
Example: Exquisite Archangel has an ability which reads “If you would lose the game, instead exile Exquisite Archangel and your life total becomes equal to your starting life total.” A spell deals 5 damage to a player with 5 life and 5 damage to an Exquisite Archangel under that player’s control. As state-based actions are performed, that player’s life total becomes equal to their starting life total, and that player chooses whether Exquisite Archangel moves to its owner’s graveyard or to exile.

400.7. An object that moves from one zone to another becomes a new object with no memory of, or relation to, its previous existence. There are nine exceptions to this rule:

400.7a Effects from spells, activated abilities, and triggered abilities that change the characteristics or controller of a permanent spell on the stack continue to apply to the permanent that spell becomes.

400.7b Prevention effects that apply to damage from a permanent spell on the stack continue to apply to damage from the permanent that spell becomes.

400.7c An ability of a permanent can reference information about the spell that became that permanent as it resolved, including what costs were paid to cast that spell or what mana was spent to pay those costs.

400.7d Abilities that trigger when an object moves from one zone to another (for example, “When Rancor is put into a graveyard from the battlefield”) can find the new object that it became in the zone it moved to when the ability triggered, if that zone is a public zone.

400.7e Abilities of Auras that trigger when the enchanted permanent leaves the battlefield can find the new object that Aura became in its owner’s graveyard if it was put into that graveyard at the same time the enchanted permanent left the battlefield. It can also find the new object that Aura became in its owner’s graveyard as a result of being put there as a state-based action for not being attached to a permanent. (See rule 704.5m.)

400.7f If an effect grants a nonland card an ability that allows it to be cast, that ability will continue to apply to the new object that card became after it moved to the stack as a result of being cast this way.

400.7g If an effect allows a nonland card to be cast, other parts of that effect can find the new object that card becomes after it moves to the stack as a result of being cast this way.

400.7h If an effect causes an object to move to a public zone, other parts of that effect can find that object. If the cost of a spell or ability causes an object to move to a public zone, that spell or ability’s effects can find that object.

400.7i After resolving a madness triggered ability (see rule 702.35), if the exiled card wasn’t cast and was moved to a public zone, effects referencing the discarded card can find that object.

400.8. If an object in the exile zone is exiled, it doesn’t change zones, but it becomes a new object that has just been exiled.

400.9. If a face-up object in the command zone is turned face down, it becomes a new object.

400.10. If an object in the command zone is put into the command zone, it doesn’t change zones, but it becomes a new object that has just entered the command zone.

400.11. An object is outside the game if it isn’t in any of the game’s zones. Outside the game is not a zone.

400.11a Cards in a player’s sideboard are outside the game. See rule 100.4.

400.11b Some effects bring cards into a game from outside of it. Those cards remain in the game until it ends or their owner leaves the game, whichever comes first.

400.11c Cards outside the game can’t be affected by spells or abilities, except for characteristic-defining abilities printed on them (see rule 604.3) and spells and abilities that allow those cards to be brought into the game.

400.12. Some effects instruct a player to do something to a zone (such as “Shuffle your hand into your library”). That action is performed on all cards in that zone. The zone itself is not affected.

401. Library

401.1. When a game begins, each player’s deck becomes their library.

401.2. Each library must be kept in a single face-down pile. Players can’t look at or change the order of cards in a library.

401.3. Any player may count the number of cards remaining in any player’s library at any time.

401.4. If an effect puts two or more cards in a specific position in a library at the same time, the owner of those cards may arrange them in any order. That library’s owner doesn’t reveal the order in which the cards go into the library.

401.5. Some effects tell a player to play with the top card of their library revealed, or say that a player may look at the top card of their library. If the top card of the player’s library changes while a spell is being cast, the new top card won’t be revealed and can’t be looked at until the spell becomes cast (see rule 601.2i). The same is true with relation to an ability being activated.

401.6. If an effect causes a player to play with the top card of their library revealed, and that particular card stops being revealed for any length of time before being revealed again, it becomes a new object.

401.7. If an effect causes a player to put a card into a library “Nth from the top,” and that library has fewer than N cards in it, the player puts that card on the bottom of that library.

402. Hand

402.1. The hand is where a player holds cards that have been drawn. Cards can be put into a player’s hand by other effects as well. At the beginning of the game, each player draws a number of cards equal to that player’s starting hand size, normally seven. (See rule 103, “Starting the Game.”)

402.2. Each player has a maximum hand size, which is normally seven cards. A player may have any number of cards in their hand, but as part of their cleanup step, the player must discard excess cards down to the maximum hand size.

402.3. A player may arrange their hand in any convenient fashion and look at it at any time. A player can’t look at the cards in another player’s hand but may count those cards at any time.

403. Battlefield

403.1. Most of the area between the players represents the battlefield. The battlefield starts out empty. Permanents a player controls are normally kept in front of them on the battlefield, though there are some cases (such as an Aura attached to another player’s permanent) when a permanent one player controls is kept closer to a different player.

403.2. A spell or ability affects and checks only the battlefield unless it specifically mentions a player or another zone.

403.3. Permanents exist only on the battlefield. Every object on the battlefield is a permanent. See rule 110, “Permanents.”

403.4. Whenever a permanent enters the battlefield, it becomes a new object and has no relationship to any previous permanent represented by the same card, except for the cases listed in rule 400.7. (This is also true for any objects entering any zone.)

403.5. Previously, the battlefield was called the “in-play zone.” Cards that were printed with text that contains the phrases “in play,” “from play,” “into play,” or the like are referring to the battlefield. Cards that were printed with that text have received errata in the Oracle card reference.

404. Graveyard

404.1. A player’s graveyard is their discard pile. Any object that’s countered, discarded, destroyed, or sacrificed is put on top of its owner’s graveyard, as is any instant or sorcery spell that’s finished resolving. Each player’s graveyard starts out empty.

404.2. Each graveyard is kept in a single face-up pile. A player can examine the cards in any graveyard at any time but normally can’t change their order. Additional rules applying to sanctioned tournaments may allow a player to change the order of cards in their graveyard.

404.3. If an effect or rule puts two or more cards into the same graveyard at the same time, the owner of those cards may arrange them in any order.

405. Stack

405.1. When a spell is cast, the physical card is put on the stack (see rule 601.2a). When an ability is activated or triggers, it goes on top of the stack without any card associated with it (see rules 602.2a and 603.3).

405.2. The stack keeps track of the order that spells and/or abilities were added to it. Each time an object is put on the stack, it’s put on top of all objects already there.

405.3. If an effect puts two or more objects on the stack at the same time, those controlled by the active player are put on lowest, followed by each other player’s objects in APNAP order (see rule 101.4). If a player controls more than one of these objects, that player chooses their relative order on the stack.

405.4. Each spell has all the characteristics of the card associated with it. Each activated or triggered ability that’s on the stack has the text of the ability that created it and no other characteristics. The controller of a spell is the person who cast it. The controller of an activated ability is the player who activated it. The controller of a triggered ability is the player who controlled the ability’s source when it triggered, unless it’s a delayed triggered ability. To determine the controller of a delayed triggered ability, see rules 603.7d–f.

405.5. When all players pass in succession, the top (last-added) spell or ability on the stack resolves. If the stack is empty when all players pass, the current step or phase ends and the next begins.

405.6. Some things that happen during the game don’t use the stack.

405.6a Effects don’t go on the stack; they’re the result of spells and abilities resolving. Effects may create delayed triggered abilities, however, and these may go on the stack when they trigger (see rule 603.7).

405.6b Static abilities continuously generate effects and don’t go on the stack. (See rule 604, “Handling Static Abilities.”) This includes characteristic-defining abilities such as “[This object] is red” (see rule 604.3).

405.6c Mana abilities resolve immediately. If a mana ability both produces mana and has another effect, the mana is produced and the other effect happens immediately. If a player had priority before a mana ability was activated, that player gets priority after it resolves. (See rule 605, “Mana Abilities.”)

405.6d Special actions don’t use the stack; they happen immediately. See rule 116, “Special Actions.”

405.6e Turn-based actions don’t use the stack; they happen automatically when certain steps or phases begin. They’re dealt with before a player would receive priority (see rule 117.3a). Turn-based actions also happen automatically when each step and phase ends; no player receives priority afterward. See rule 703.

405.6f State-based actions don’t use the stack; they happen automatically when certain conditions are met. See rule 704. They are dealt with before a player would receive priority. See rule 117.5.

405.6g A player may concede the game at any time. That player leaves the game immediately. See rule 104.3a.

405.6h If a player leaves a multiplayer game, objects may leave the game, cease to exist, change control, or be exiled as a result. These actions happen immediately. See rule 800.4a.

406. Exile

406.1. The exile zone is essentially a holding area for objects. Some spells and abilities exile an object without any way to return that object to another zone. Other spells and abilities exile an object only temporarily.

406.2. To exile an object is to put it into the exile zone from whatever zone it’s currently in. An exiled card is a card that’s been put into the exile zone.

406.3. Exiled cards are, by default, kept face up and may be examined by any player at any time. Cards “exiled face down” can’t be examined by any player except when instructions allow it. However, once a player is allowed to look at a card exiled face down, that player may continue to look at that card as long as it remains exiled, even if the instruction allowing the player to do so no longer applies.

406.3a A card exiled face down has no characteristics, but the spell or ability that exiled it may allow it to be played from exile. Unless that card is being cast face down (see rule 707.4), the card is turned face up just before the player announces that they are playing the card (see rule 601.2).

406.3b Some spells and abilities allow a player to cast spells with certain qualities from among face-down cards in exile. A player may cast such a spell only if they are allowed to look at the face-down card in exile and if the resulting spell has the specified qualities.

406.4. Face-down cards in exile should be kept in separate piles based on when they were exiled and how they were exiled. If a player is instructed to choose an exiled card, the player may choose a specific face-down card only if the player is allowed to look at that card. Otherwise, they may choose a pile of face-down exiled cards, and then a card is chosen at random from within that pile. If choosing such a card is part of casting a spell or activating an ability, the chosen card isn’t revealed until after that cost is fully paid. (See rule 601.2i.)

406.5. Exiled cards that might return to the battlefield or any other zone should be kept in separate piles to keep track of their respective ways of returning. Exiled cards that may have an impact on the game due to their own abilities (such as cards with haunt) or the abilities of the cards that exiled them should likewise be kept in separate piles.

406.6. An object may have one ability printed on it that causes one or more cards to be exiled, and another ability that refers either to “the exiled cards” or to cards “exiled with [this object].” These abilities are linked: the second refers only to cards that have been exiled due to the first. See rule 607, “Linked Abilities.”

406.7. If an object in the exile zone becomes exiled, it doesn’t change zones, but it becomes a new object that has just been exiled.

406.8. Previously, the exile zone was called the “removed-from-the-game zone.” Cards that were printed with text that “removes [an object] from the game” exiles that object. The same is true for cards printed with text that “sets [an object] aside.” Cards that were printed with that text have received errata in the Oracle card reference.

407. Ante

407.1. Earlier versions of the Magic rules included an ante rule as a way of playing “for keeps.” Playing Magic games for ante is now considered an optional variation on the game, and it’s allowed only where it’s not forbidden by law or by other rules. Playing for ante is strictly forbidden under the Magic: The Gathering Tournament Rules (WPN.Wizards.com/en/resources/rules-documents).

407.2. When playing for ante, each player puts one random card from their deck into the ante zone after determining which player goes first but before players draw any cards. Cards in the ante zone may be examined by any player at any time. At the end of the game, the winner becomes the owner of all the cards in the ante zone.

407.3. A few cards have the text “Remove [this card] from your deck before playing if you’re not playing for ante.” These are the only cards that can add or remove cards from the ante zone or change a card’s owner. When not playing for ante, players can’t include these cards in their decks or sideboards, and these cards can’t be brought into the game from outside the game.

407.4. To ante an object is to put that object into the ante zone from whichever zone it’s currently in. The owner of an object is the only person who can ante that object.

408. Command

408.1. The command zone is a game area reserved for certain specialized objects that have an overarching effect on the game, yet are not permanents and cannot be destroyed.

408.2. Emblems may be created in the command zone. See rule 114, “Emblems.”

408.3. In the Planechase, Vanguard, Commander, Archenemy, and Conspiracy Draft casual variants, nontraditional Magic cards and/or specially designated cards start the game in the command zone. Each variant has its own rules regarding such cards. See section 9, “Casual Variants.”


5. Turn Structure

500. General

500.1. A turn consists of five phases, in this order: beginning, precombat main, combat, postcombat main, and ending. Each of these phases takes place every turn, even if nothing happens during the phase. The beginning, combat, and ending phases are further broken down into steps, which proceed in order.

500.2. A phase or step in which players receive priority ends when the stack is empty and all players pass in succession. Simply having the stack become empty doesn’t cause such a phase or step to end; all players have to pass in succession with the stack empty. Because of this, each player gets a chance to add new things to the stack before that phase or step ends.

500.3. A step in which no players receive priority ends when all specified actions that take place during that step are completed. The only such steps are the untap step (see rule 502) and certain cleanup steps (see rule 514).

500.4. When a step or phase ends, any unused mana left in a player’s mana pool empties. This turn-based action doesn’t use the stack.

500.5. When a phase or step ends, any effects scheduled to last “until end of” that phase or step expire. When a phase or step begins, any effects scheduled to last “until” that phase or step expire. Effects that last “until end of combat” expire at the end of the combat phase, not at the beginning of the end of combat step. Effects that last “until end of turn” are subject to special rules; see rule 514.2.

500.6. When a phase or step begins, any abilities that trigger “at the beginning of” that phase or step trigger. They are put on the stack the next time a player would receive priority. (See rule 117, “Timing and Priority.”)

500.7. Some effects can give a player extra turns. They do this by adding the turns directly after the specified turn. If a player is given multiple extra turns, the extra turns are added one at a time. If multiple players are given extra turns, the extra turns are added one at a time, in APNAP order (see rule 101.4). The most recently created turn will be taken first.

500.8. Some effects can add phases to a turn. They do this by adding the phases directly after the specified phase. If multiple extra phases are created after the same phase, the most recently created phase will occur first.

500.9. Some effects can add steps to a phase. They do this by adding the steps directly after a specified step or directly before a specified step. If multiple extra steps are created after the same step, the most recently created step will occur first.

500.10. Some effects can cause a step, phase, or turn to be skipped. To skip a step, phase, or turn is to proceed past it as though it didn’t exist. See rule 614.10.

500.11. No game events can occur between turns, phases, or steps.

501. Beginning Phase

501.1. The beginning phase consists of three steps, in this order: untap, upkeep, and draw.

502. Untap Step

502.1. First, all phased-in permanents with phasing that the active player controls phase out, and all phased-out permanents that the active player controlled when they phased out phase in. This all happens simultaneously. This turn-based action doesn’t use the stack. See rule 702.26, “Phasing.”

502.2. Second, the active player determines which permanents they control will untap. Then they untap them all simultaneously. This turn-based action doesn’t use the stack. Normally, all of a player’s permanents untap, but effects can keep one or more of a player’s permanents from untapping.

502.3. No player receives priority during the untap step, so no spells can be cast or resolve and no abilities can be activated or resolve. Any ability that triggers during this step will be held until the next time a player would receive priority, which is usually during the upkeep step. (See rule 503, “Upkeep Step.”)

503. Upkeep Step

503.1. The upkeep step has no turn-based actions. Once it begins, the active player gets priority. (See rule 117, “Timing and Priority.”)

503.1a Any abilities that triggered during the untap step and any abilities that triggered at the beginning of the upkeep are put onto the stack before the active player gets priority; the order in which they triggered doesn’t matter. (See rule 603, “Handling Triggered Abilities.”)

503.2. If a spell states that it may be cast only “after [a player’s] upkeep step,” and the turn has multiple upkeep steps, that spell may be cast any time after the first upkeep step ends.

504. Draw Step

504.1. First, the active player draws a card. This turn-based action doesn’t use the stack.

504.2. Second, the active player gets priority. (See rule 117, “Timing and Priority.”)
 
505. Main Phase

505.1. There are two main phases in a turn. In each turn, the first main phase (also known as the precombat main phase) and the second main phase (also known as the postcombat main phase) are separated by the combat phase (see rule 506, “Combat Phase”). The precombat and postcombat main phases are individually and collectively known as the main phase.

505.1a Only the first main phase of the turn is a precombat main phase. All other main phases are postcombat main phases. This includes the second main phase of a turn in which the combat phase has been skipped. It is also true of a turn in which an effect has caused an additional combat phase and an additional main phase to be created.

505.2. The main phase has no steps, so a main phase ends when all players pass in succession while the stack is empty. (See rule 500.2.)

505.3. First, but only if the players are playing an Archenemy game (see rule 904), the active player is the archenemy, and it’s the active player’s precombat main phase, the active player sets the top card of their scheme deck in motion (see rule 701.25). This turn-based action doesn’t use the stack.

505.4. Second, if the active player controls one or more Saga enchantments and it’s the active player’s precombat main phase, the active player puts a lore counter on each Saga they control. (See rule 714, “Saga Cards.”) This turn-based action doesn’t use the stack.

505.5. Third, the active player gets priority. (See rule 117, “Timing and Priority.”)

505.5a The main phase is the only phase in which a player can normally cast artifact, creature, enchantment, planeswalker, and sorcery spells. The active player may cast these spells.

505.5b During either main phase, the active player may play one land card from their hand if the stack is empty, if the player has priority, and if they haven’t played a land this turn (unless an effect states the player may play additional lands). This action doesn’t use the stack. Neither the land nor the action of playing the land is a spell or ability, so it can’t be countered, and players can’t respond to it with instants or activated abilities. (See rule 305, “Lands.”)

506. Combat Phase

506.1. The combat phase has five steps, which proceed in order: beginning of combat, declare attackers, declare blockers, combat damage, and end of combat. The declare blockers and combat damage steps are skipped if no creatures are declared as attackers or put onto the battlefield attacking (see rule 508.8). There are two combat damage steps if any attacking or blocking creature has first strike (see rule 702.7) or double strike (see rule 702.4).

506.2. During the combat phase, the active player is the attacking player; creatures that player controls may attack. During the combat phase of a two-player game, the nonactive player is the defending player; that player and planeswalkers they control may be attacked.

506.2a During the combat phase of a multiplayer game, there may be one or more defending players, depending on the variant being played and the options chosen for it. Unless all the attacking player’s opponents automatically become defending players during the combat phase, the attacking player chooses one of their opponents as a turn-based action during the beginning of combat step. (Note that the choice may be dictated by the variant being played or the options chosen for it.) That player becomes the defending player. See rule 802, “Attack Multiple Players Option,” rule 803, “Attack Left and Attack Right Options,” and rule 809, “Emperor Variant.”

506.2b In multiplayer games using the shared team turns option, the active team is the attacking team and the nonactive team is the defending team. See rule 805, “Shared Team Turns Option.”

506.3. Only a creature can attack or block. Only a player or a planeswalker can be attacked.

506.3a If an effect would put a noncreature permanent onto the battlefield attacking or blocking, the permanent does enter the battlefield but it’s never considered to be an attacking or blocking permanent.

506.3b If an effect would put a creature onto the battlefield attacking under the control of any player except an attacking player, that creature does enter the battlefield, but it’s never considered to be an attacking creature.

506.3c If an effect would put a creature onto the battlefield attacking either a player not in the game or a planeswalker no longer on the battlefield or no longer a planeswalker, that creature does enter the battlefield, but it’s never considered to be an attacking creature.

506.3d If an effect would put a creature onto the battlefield blocking but the creature it would block isn’t attacking either the first creature’s controller or a planeswalker that player controls, that creature does enter the battlefield, but it’s never considered to be a blocking creature.

506.4. A permanent is removed from combat if it leaves the battlefield, if its controller changes, if it phases out, if an effect specifically removes it from combat, if it’s a planeswalker that’s being attacked and stops being a planeswalker, or if it’s an attacking or blocking creature that regenerates (see rule 701.15) or stops being a creature. A creature that’s removed from combat stops being an attacking, blocking, blocked, and/or unblocked creature. A planeswalker that’s removed from combat stops being attacked.

506.4a Once a creature has been declared as an attacking or blocking creature, spells or abilities that would have kept that creature from attacking or blocking don’t remove the creature from combat.

506.4b Tapping or untapping a creature that’s already been declared as an attacker or blocker doesn’t remove it from combat and doesn’t prevent its combat damage.

506.4c If a creature is attacking a planeswalker, removing that planeswalker from combat doesn’t remove that creature from combat. It continues to be an attacking creature, although it is attacking neither a player nor a planeswalker. It may be blocked. If it is unblocked, it will deal no combat damage.

506.4d A permanent that’s both a blocking creature and a planeswalker that’s being attacked is removed from combat if it stops being both a creature and a planeswalker. If it stops being one of those card types but continues to be the other, it continues to be either a blocking creature or a planeswalker that’s being attacked, whichever is appropriate.

506.5. A creature attacks alone if it’s the only creature declared as an attacker during the declare attackers step. A creature is attacking alone if it’s attacking but no other creatures are. A creature blocks alone if it’s the only creature declared as a blocker during the declare blockers step. A creature is blocking alone if it’s blocking but no other creatures are.

506.6. Some spells state that they may be cast “only [before/after] [a particular point in the combat phase],” in which that point may be “attackers are declared,” “blockers are declared,” “the combat damage step,” “the end of combat step,” “the combat phase,” or “combat.”

506.6a A spell that states it may be cast “only before (or after) attackers are declared” is referring to the turn-based action of declaring attackers. It may be cast only before (or after) the declare attackers step begins, regardless of whether any attackers are actually declared. (See rule 508.)

506.6b A spell that states it may be cast “only before (or after) blockers are declared” is referring to the turn-based action of declaring blockers. It may be cast only before (or after) the declare blockers step begins, regardless of whether any blockers are actually declared. (See rule 509.)

506.6c Some spells state that they may be cast only “during combat” or “during a certain player’s combat phase” in addition to the criteria described in rule 506.6. If a turn has multiple combat phases, such spells may be cast at an appropriate time during any of them.

506.6d Some spells state that they may be cast “only before (or after) [a particular point in the combat phase],” but don’t meet the additional criteria described in rule 506.6c. If a turn has multiple combat phases, such spells may be cast that turn only before (or after) the stated point of the first combat phase.

506.6e If a spell states that it may be cast “only before [a particular point in the combat phase],” but the stated point doesn’t exist within the relevant combat phase because the declare blockers step and the combat damage step are skipped (see rule 508.8), then the spell may be cast only before the declare attackers step ends. If the stated point doesn’t exist because the relevant combat phase has been skipped, then the spell may be cast only before the precombat main phase ends.

506.6f If a spell states that it may be cast “only during combat after blockers are declared,” but the declare blockers step is skipped that combat phase (see rule 508.8), then the spell may not be cast during that combat phase.

506.6g Rules 506.6 and 506.6a–f apply to abilities that state that they may be activated only at certain times with respect to combat just as they apply to spells that state that they may be cast only at certain times with respect to combat.

507. Beginning of Combat Step

507.1. First, if the game being played is a multiplayer game in which the active player’s opponents don’t all automatically become defending players, the active player chooses one of their opponents. That player becomes the defending player. This turn-based action doesn’t use the stack. (See rule 506.2.)

507.2. Second, the active player gets priority. (See rule 117, “Timing and Priority.”)

508. Declare Attackers Step

508.1. First, the active player declares attackers. This turn-based action doesn’t use the stack. To declare attackers, the active player follows the steps below, in order. If at any point during the declaration of attackers, the active player is unable to comply with any of the steps listed below, the declaration is illegal; the game returns to the moment before the declaration (see rule 723, “Handling Illegal Actions”).

508.1a The active player chooses which creatures that they control, if any, will attack. The chosen creatures must be untapped, and each one must either have haste or have been controlled by the active player continuously since the turn began.

508.1b If the defending player controls any planeswalkers, or the game allows the active player to attack multiple other players, the active player announces which player or planeswalker each of the chosen creatures is attacking.

508.1c The active player checks each creature they control to see whether it’s affected by any restrictions (effects that say a creature can’t attack, or that it can’t attack unless some condition is met). If any restrictions are being disobeyed, the declaration of attackers is illegal.
Example: A player controls two creatures, each with a restriction that states “[This creature] can’t attack alone.” It’s legal to declare both as attackers.

508.1d The active player checks each creature they control to see whether it’s affected by any requirements (effects that say a creature attacks if able, or that it attacks if some condition is met). If the number of requirements that are being obeyed is fewer than the maximum possible number of requirements that could be obeyed without disobeying any restrictions, the declaration of attackers is illegal. If a creature can’t attack unless a player pays a cost, that player is not required to pay that cost, even if attacking with that creature would increase the number of requirements being obeyed. If a requirement that says a creature attacks if able during a certain turn refers to a turn with multiple combat phases, the creature attacks if able during each declare attackers step in that turn.
Example: A player controls two creatures: one that “attacks if able” and one with no abilities. An effect states “No more than one creature can attack each turn.” The only legal attack is for just the creature that “attacks if able” to attack. It’s illegal to attack with the other creature, attack with both, or attack with neither.

508.1e If any of the chosen creatures have banding or a “bands with other” ability, the active player announces which creatures, if any, are banded with which. (See rule 702.22, “Banding.”)

508.1f The active player taps the chosen creatures. Tapping a creature when it’s declared as an attacker isn’t a cost; attacking simply causes creatures to become tapped.

508.1g If there are any optional costs to attack with the chosen creatures (expressed as costs a player may pay “as” a creature attacks), the active player chooses which, if any, they will pay.

508.1h If any of the chosen creatures require paying costs to attack, or if any optional costs to attack were chosen, the active player determines the total cost to attack. Costs may include paying mana, tapping permanents, sacrificing permanents, discarding cards, and so on. Once the total cost is determined, it becomes “locked in.” If effects would change the total cost after this time, ignore this change.

508.1i If any of the costs require mana, the active player then has a chance to activate mana abilities (see rule 605, “Mana Abilities”).

508.1j Once the player has enough mana in their mana pool, they pay all costs in any order. Partial payments are not allowed.

508.1k Each chosen creature still controlled by the active player becomes an attacking creature. It remains an attacking creature until it’s removed from combat or the combat phase ends, whichever comes first. See rule 506.4.

508.1m Any abilities that trigger on attackers being declared trigger.

508.2. Second, the active player gets priority. (See rule 117, “Timing and Priority.”)

508.2a Abilities that trigger on a creature attacking trigger only at the point the creature is declared as an attacker. They will not trigger if a creature attacks and then that creature’s characteristics change to match the ability’s trigger condition.
Example: A permanent has the ability “Whenever a green creature attacks, destroy that creature at end of combat.” If a blue creature attacks and is later turned green, the ability will not trigger.

508.2b Any abilities that triggered on attackers being declared or that triggered during the process described in rules 508.1 are put onto the stack before the active player gets priority; the order in which they triggered doesn’t matter. (See rule 603, “Handling Triggered Abilities.”)

508.3. Triggered abilities that trigger on attackers being declared may have different trigger conditions.

508.3a An ability that reads “Whenever [a creature] attacks, . . .” triggers if that creature is declared as an attacker. Similarly, “Whenever [a creature] attacks [a player or planeswalker], . . .” triggers if that creature is declared as an attacker attacking that player or planeswalker. Such abilities won’t trigger if a creature is put onto the battlefield attacking.

508.3b An ability that reads “Whenever [a player or planeswalker] is attacked, . . .” triggers if one or more creatures are declared as attackers attacking that player or planeswalker. It won’t trigger if a creature is put onto the battlefield attacking that player or planeswalker.

508.3c An ability that reads “Whenever [a player] attacks with [a creature], . . .” triggers whenever a creature that player controls is declared as an attacker.

508.3d An ability that reads “Whenever [a creature] attacks and isn’t blocked, . . .” triggers during the declare blockers step, not the declare attackers step. See rule 509.5g.

508.4. If a creature is put onto the battlefield attacking, its controller chooses which defending player or which planeswalker a defending player controls it’s attacking as it enters the battlefield (unless the effect that put it onto the battlefield specifies what it’s attacking). Similarly, if an effect states that a creature is attacking, its controller chooses which defending player or which planeswalker a defending player controls it’s attacking it becomes attacking (unless the effect has already specified). Such creatures are “attacking” but, for the purposes of trigger events and effects, they never “attacked.”

508.4a If the effect that puts a creature onto the battlefield attacking specifies it’s attacking a certain player, and that player is no longer in the game when the effect resolves, the creature is put onto the battlefield but is never considered an attacking creature. The same is true if the effect specifies a creature is put onto the battlefield attacking a planeswalker and that planeswalker is no longer on the battlefield or is no longer a planeswalker when the effect resolves.

508.4b If the effect that states a creature is attacking specifies it’s attacking a certain player, and that player is no longer in the game when the effect resolves, the creature doesn’t become an attacking creature. The same is true if the effect specifies a creature is attacking a planeswalker and that planeswalker is no longer on the battlefield or is no longer a planeswalker when the effect resolves.

508.4c A creature that’s put onto the battlefield attacking or that is stated to be attacking isn’t affected by requirements or restrictions that apply to the declaration of attackers.

508.5. If an ability of an attacking creature refers to a defending player, or a spell or ability refers to both an attacking creature and a defending player, then unless otherwise specified, the defending player it’s referring to is the player that creature is attacking, or the controller of the planeswalker that creature is attacking. If that creature is no longer attacking, the defending player it’s referring to is the player that creature was attacking before it was removed from combat or the controller of the planeswalker that creature was attacking before it was removed from combat.

508.5a In a multiplayer game, any rule, object, or effect that refers to a “defending player” refers to one specific defending player, not to all of the defending players. If a spell or ability could apply to multiple attacking creatures, the appropriate defending player is individually determined for each of those attacking creatures. If there are multiple defending players that could be chosen, the controller of the spell or ability chooses one.

508.6. A player is “attacking [a player]” if the first player controls a creature that is attacking the second player. A player has “attacked [a player]” if the first player declared one or more creatures as attackers attacking the second player.

508.7. One card (Portal Mage) allows a player to reselect which player or planeswalker a creature is attacking.

508.7a The attacking creature isn’t removed from combat and it isn’t considered to have attacked a second time. That creature is attacking the reselected player or planeswalker, but it’s still considered to have attacked the player or planeswalker chosen as it was declared as an attacker.

508.7b While reselecting which player or planeswalker a creature is attacking, that creature isn’t affected by requirements or restrictions that apply to the declaration of attackers.

508.7c The reselected player or planeswalker must be an opponent of the attacking creature’s controller, or a planeswalker controlled by an opponent of the attacking creature’s controller.

508.7d In a multiplayer game not using the attack multiple players option (see rule 802), the reselected player or planeswalker must be the chosen defending player or a planeswalker controlled by that player.

508.7e In a multiplayer game using the limited range of influence option (see rule 801), the reselected player or planeswalker must be within the range of influence of the attacking creature’s controller.

508.8. If no creatures are declared as attackers or put onto the battlefield attacking, skip the declare blockers and combat damage steps.

509. Declare Blockers Step

509.1. First, the defending player declares blockers. This turn-based action doesn’t use the stack. To declare blockers, the defending player follows the steps below, in order. If at any point during the declaration of blockers, the defending player is unable to comply with any of the steps listed below, the declaration is illegal; the game returns to the moment before the declaration (see rule 723, “Handling Illegal Actions”).

509.1a The defending player chooses which creatures they control, if any, will block. The chosen creatures must be untapped. For each of the chosen creatures, the defending player chooses one creature for it to block that’s attacking that player or a planeswalker they control.

509.1b The defending player checks each creature they control to see whether it’s affected by any restrictions (effects that say a creature can’t block, or that it can’t block unless some condition is met). If any restrictions are being disobeyed, the declaration of blockers is illegal.
     A restriction may be created by an evasion ability (a static ability an attacking creature has that restricts what can block it). If an attacking creature gains or loses an evasion ability after a legal block has been declared, it doesn’t affect that block. Different evasion abilities are cumulative.
Example: An attacking creature with flying and shadow can’t be blocked by a creature with flying but without shadow.

509.1c The defending player checks each creature they control to see whether it’s affected by any requirements (effects that say a creature must block, or that it must block if some condition is met). If the number of requirements that are being obeyed is fewer than the maximum possible number of requirements that could be obeyed without disobeying any restrictions, the declaration of blockers is illegal. If a creature can’t block unless a player pays a cost, that player is not required to pay that cost, even if blocking with that creature would increase the number of requirements being obeyed. If a requirement that says a creature blocks if able during a certain turn refers to a turn with multiple combat phases, the creature blocks if able during each declare blockers step in that turn.
Example: A player controls one creature that “blocks if able” and another creature with no abilities. If a creature with menace attacks that player, the player must block with both creatures. Having only the first creature block violates the restriction created by menace (the attacking creature can’t be blocked except by two or more creatures). Having only the second creature block violates both the menace restriction and the first creature’s blocking requirement. Having neither creature block fulfills the restriction but not the requirement.

509.1d If any of the chosen creatures require paying costs to block, the defending player determines the total cost to block. Costs may include paying mana, tapping permanents, sacrificing permanents, discarding cards, and so on. Once the total cost is determined, it becomes “locked in.” If effects would change the total cost after this time, ignore this change.

509.1e If any of the costs require mana, the defending player then has a chance to activate mana abilities (see rule 605, “Mana Abilities”).

509.1f Once the player has enough mana in their mana pool, they pay all costs in any order. Partial payments are not allowed.

509.1g Each chosen creature still controlled by the defending player becomes a blocking creature. Each one is blocking the attacking creatures chosen for it. It remains a blocking creature until it’s removed from combat or the combat phase ends, whichever comes first. See rule 506.4.

509.1h An attacking creature with one or more creatures declared as blockers for it becomes a blocked creature; one with no creatures declared as blockers for it becomes an unblocked creature. This remains unchanged until the creature is removed from combat, an effect says that it becomes blocked or unblocked, or the combat phase ends, whichever comes first. A creature remains blocked even if all the creatures blocking it are removed from combat.

509.1i Any abilities that trigger on blockers being declared trigger. See rule 509.4 for more information.

509.2. Second, for each attacking creature that’s become blocked, the active player announces that creature’s damage assignment order, which consists of the creatures blocking it in an order of that player’s choice. (During the combat damage step, an attacking creature can’t assign combat damage to a creature that’s blocking it unless each creature ahead of that blocking creature in its order is assigned lethal damage.) This turn-based action doesn’t use the stack.
Example: Vastwood Gorger is blocked by Llanowar Elves, Runeclaw Bear, and Serra Angel. Vastwood Gorger’s controller announces the Vastwood Gorger’s damage assignment order as Serra Angel, then Llanowar Elves, then Runeclaw Bear.

509.2a During the declare blockers step, if a blocking creature is removed from combat or a spell or ability causes it to stop blocking an attacking creature, the blocking creature is removed from all relevant damage assignment orders. The relative order among the remaining blocking creatures is unchanged.

509.3. Third, for each blocking creature, the defending player announces that creature’s damage assignment order, which consists of the creatures it’s blocking in an order of that player’s choice. (During the combat damage step, a blocking creature can’t assign combat damage to a creature it’s blocking unless each creature ahead of that blocked creature in its order is assigned lethal damage.) This turn-based action doesn’t use the stack.

509.3a During the declare blockers step, if an attacking creature is removed from combat or a spell or ability causes it to stop being blocked by a blocking creature, the attacking creature is removed from all relevant damage assignment orders. The relative order among the remaining attacking creatures is unchanged.

509.4. Fourth, the active player gets priority. (See rule 117, “Timing and Priority.”)

509.4a Any abilities that triggered on blockers being declared or that triggered during the process described in rules 509.1–3 are put onto the stack before the active player gets priority; the order in which they triggered doesn’t matter. (See rule 603, “Handling Triggered Abilities.”)

509.5. Triggered abilities that trigger on blockers being declared may have different trigger conditions.

509.5a An ability that reads “Whenever [a creature] blocks, . . .” generally triggers only once each combat for that creature, even if it blocks multiple creatures. It triggers if the creature is declared as a blocker. It will also trigger if that creature becomes a blocker as the result of an effect, but only if it wasn’t a blocking creature at that time. (See rule 509.1g.) It won’t trigger if the creature is put onto the battlefield blocking.

509.5b An ability that reads “Whenever [a creature] blocks a creature, . . .” triggers once for each attacking creature the creature with the ability blocks. It triggers if the creature is declared as a blocker. It will also trigger if an effect causes that creature to block an attacking creature, but only if it wasn’t already blocking that attacking creature at that time. It won’t trigger if the creature is put onto the battlefield blocking.

509.5c An ability that reads “Whenever [a creature] becomes blocked, . . .” generally triggers only once each combat for that creature, even if it’s blocked by multiple creatures. It will trigger if that creature becomes blocked by at least one creature declared as a blocker. It will also trigger if that creature becomes blocked by an effect or by a creature that’s put onto the battlefield as a blocker, but only if the attacking creature was an unblocked creature at that time. (See rule 509.1h.)

509.5d An ability that reads “Whenever [a creature] becomes blocked by a creature, . . .” triggers once for each creature that blocks the named creature. It triggers if a creature is declared as a blocker for the attacking creature. It will also trigger if an effect causes a creature to block the attacking creature, but only if it wasn’t already blocking that attacking creature at that time. In addition, it will trigger if a creature is put onto the battlefield blocking that creature. It won’t trigger if the creature becomes blocked by an effect rather than a creature.

509.5e If an ability triggers when a creature blocks or becomes blocked by a particular number of creatures, the ability triggers if the creature blocks or is blocked by that many creatures when blockers are declared. Effects that add or remove blockers can also cause such abilities to trigger. This applies to abilities that trigger on a creature blocking or being blocked by at least a certain number of creatures as well.

509.5f If an ability triggers when a creature with certain characteristics blocks, it will trigger only if the creature has those characteristics at the point blockers are declared, or at the point an effect causes it to block. If an ability triggers when a creature with certain characteristics becomes blocked, it will trigger only if the creature has those characteristics at the point it becomes a blocked creature. If an ability triggers when a creature becomes blocked by a creature with certain characteristics, it will trigger only if the latter creature has those characteristics at the point it becomes a blocking creature. None of those abilities will trigger if the relevant creature’s characteristics change to match the ability’s trigger condition later on.
Example: A creature has the ability “Whenever this creature becomes blocked by a white creature, destroy that creature at end of combat.” If the creature becomes blocked by a black creature that is later turned white, the ability will not trigger.

509.5g An ability that reads “Whenever [a creature] attacks and isn’t blocked, . . .” triggers if no creatures are declared as blockers for that creature. It will trigger even if the creature was never declared as an attacker (for example, if it entered the battlefield attacking). It won’t trigger if the attacking creature is blocked and then all its blockers are removed from combat.

509.6. If a spell or ability causes a creature on the battlefield to block an attacking creature, the active player announces the blocking creature’s placement in the attacking creature’s damage assignment order. The relative order among the remaining blocking creatures is unchanged. Then the defending player announces the attacking creature’s placement in the blocking creature’s damage assignment order. The relative order among the remaining attacking creatures is unchanged. This is done as part of the blocking effect.

509.7. If a creature is put onto the battlefield blocking, its controller chooses which attacking creature it’s blocking as it enters the battlefield (unless the effect that put it onto the battlefield specifies what it’s blocking), then the active player announces the new creature’s placement in the blocked creature’s damage assignment order. The relative order among the remaining blocking creatures is unchanged. A creature put onto the battlefield this way is “blocking” but, for the purposes of trigger events and effects, it never “blocked.”
Example: Giant Spider is blocked by Canyon Minotaur. The defending player casts Flash Foliage, which creates a Saproling creature token blocking the Giant Spider. Giant Spider’s controller announces the Giant Spider’s damage assignment order as the Saproling token, then Canyon Minotaur.

509.7a If the effect that puts a creature onto the battlefield blocking specifies it’s blocking a certain creature and that creature is no longer attacking, the creature is put onto the battlefield but is never considered a blocking creature. The same is true if the controller of the creature that’s put onto the battlefield blocking isn’t a defending player for the specified attacking creature.

509.7b A creature that’s put onto the battlefield blocking isn’t affected by requirements or restrictions that apply to the declaration of blockers.

510. Combat Damage Step

510.1. First, the active player announces how each attacking creature assigns its combat damage, then the defending player announces how each blocking creature assigns its combat damage. This turn-based action doesn’t use the stack. A player assigns a creature’s combat damage according to the following rules:

510.1a Each attacking creature and each blocking creature assigns combat damage equal to its power. Creatures that would assign 0 or less damage this way don’t assign combat damage at all.

510.1b An unblocked creature assigns its combat damage to the player or planeswalker it’s attacking. If it isn’t currently attacking anything (if, for example, it was attacking a planeswalker that has left the battlefield), it assigns no combat damage.

510.1c A blocked creature assigns its combat damage to the creatures blocking it. If no creatures are currently blocking it (if, for example, they were destroyed or removed from combat), it assigns no combat damage. If exactly one creature is blocking it, it assigns all its combat damage to that creature. If two or more creatures are blocking it, it assigns its combat damage to those creatures according to the damage assignment order announced for it. This may allow the blocked creature to divide its combat damage. However, it can’t assign combat damage to a creature that’s blocking it unless, when combat damage assignments are complete, each creature that precedes that blocking creature in its order is assigned lethal damage. When checking for assigned lethal damage, take into account damage already marked on the creature and damage from other creatures that’s being assigned during the same combat damage step, but not any abilities or effects that might change the amount of damage that’s actually dealt. An amount of damage that’s greater than a creature’s lethal damage may be assigned to it.
Example: The damage assignment order of an attacking Vastwood Gorger (a 5/6 creature) is Pride Guardian (a 0/3 creature) then Llanowar Elves (a 1/1 creature). Vastwood Gorger can assign 3 damage to the Guardian and 2 damage to the Elves, 4 damage to the Guardian and 1 damage to the Elves, or 5 damage to the Guardian.
Example: The damage assignment order of an attacking Vastwood Gorger (a 5/6 creature) is Pride Guardian (a 0/3 creature) then Llanowar Elves (a 1/1 creature). During the declare blockers step, the defending player casts Giant Growth targeting Pride Guardian, which gives it +3/+3 until end of turn. Vastwood Gorger must assign its 5 damage to the Guardian.
Example: The damage assignment order of an attacking Vastwood Gorger (a 5/6 creature) is Pride Guardian (a 0/3 creature) then Llanowar Elves (a 1/1 creature). During the declare blockers step, the defending player casts Mending Hands targeting Pride Guardian, which prevents the next 4 damage that would be dealt to it. Vastwood Gorger can assign 3 damage to the Guardian and 2 damage to the Elves, 4 damage to the Guardian and 1 damage to the Elves, or 5 damage to the Guardian.
Example: The damage assignment order of an attacking Enormous Baloth (a 7/7 creature) is Trained Armodon (a 3/3 creature) that already has 2 damage marked on it, then Foriysian Brigade (a 2/4 creature that can block an additional creature), then Silverback Ape (a 5/5 creature). The damage assignment order of an attacking Durkwood Boars (a 4/4 creature) is the same Foriysian Brigade, then Goblin Piker (a 2/1 creature). Among other possibilities, the active player may have the Baloth assign 1 damage to the Armodon, 1 damage to the Brigade, and 5 damage to the Ape, and have the Boars assign 3 damage to the Brigade and 1 damage to the Piker.

510.1d A blocking creature assigns combat damage to the creatures it’s blocking. If it isn’t currently blocking any creatures (if, for example, they were destroyed or removed from combat), it assigns no combat damage. If it’s blocking exactly one creature, it assigns all its combat damage to that creature. If it’s blocking two or more creatures, it assigns its combat damage to those creatures according to the damage assignment order announced for it. This may allow the blocking creature to divide its combat damage. However, it can’t assign combat damage to a creature that it’s blocking unless, when combat damage assignments are complete, each creature that precedes that blocked creature is assigned lethal damage. When checking for assigned lethal damage, take into account damage already marked on the creature and damage from other creatures that’s being assigned during the same combat damage step, but not any abilities or effects that might change the amount of damage that’s actually dealt. An amount of damage that’s greater than a creature’s lethal damage may be assigned to it.

510.1e Once a player has assigned combat damage from each attacking or blocking creature they control, the total damage assignment (not solely the damage assignment of any individual attacking or blocking creature) is checked to see if it complies with the above rules. If it doesn’t, the combat damage assignment is illegal; the game returns to the moment before that player began to assign combat damage. (See rule 723, “Handling Illegal Actions.”)

510.2. Second, all combat damage that’s been assigned is dealt simultaneously. This turn-based action doesn’t use the stack. No player has the chance to cast spells or activate abilities between the time combat damage is assigned and the time it’s dealt.
Example: Squadron Hawk (a 1/1 creature with flying) and Goblin Piker (a 2/1 creature) are attacking. Mogg Fanatic (a 1/1 creature with the ability “Sacrifice Mogg Fanatic: Mogg Fanatic deals 1 damage to any target.”) blocks the Goblin Piker. The defending player sacrifices Mogg Fanatic during the declare blockers step to deal 1 damage to the Squadron Hawk. The Hawk is destroyed. The Piker deals and is dealt no combat damage this turn. If the defending player instead left Mogg Fanatic on the battlefield, the Fanatic and the Piker would have dealt lethal damage to one another, but the Squadron Hawk couldn’t have been dealt damage.

510.3. Third, the active player gets priority. (See rule 117, “Timing and Priority.”)

510.3a Any abilities that triggered on damage being dealt or while state-based actions are performed afterward are put onto the stack before the active player gets priority; the order in which they triggered doesn’t matter. (See rule 603, “Handling Triggered Abilities.”)

510.4. If at least one attacking or blocking creature has first strike (see rule 702.7) or double strike (see rule 702.4) as the combat damage step begins, the only creatures that assign combat damage in that step are those with first strike or double strike. After that step, instead of proceeding to the end of combat step, the phase gets a second combat damage step. The only creatures that assign combat damage in that step are the remaining attackers and blockers that had neither first strike nor double strike as the first combat damage step began, as well as the remaining attackers and blockers that currently have double strike. After that step, the phase proceeds to the end of combat step.

511. End of Combat Step

511.1. The end of combat step has no turn-based actions. Once it begins, the active player gets priority. (See rule 117, “Timing and Priority.”)

511.2. Abilities that trigger “at end of combat” trigger as the end of combat step begins. Effects that last “until end of combat” expire at the end of the combat phase.

511.3. As soon as the end of combat step ends, all creatures and planeswalkers are removed from combat. After the end of combat step ends, the combat phase is over and the postcombat main phase begins (see rule 505).

512. Ending Phase

512.1. The ending phase consists of two steps: end and cleanup.

513. End Step

513.1. The end step has no turn-based actions. Once it begins, the active player gets priority. (See rule 117, “Timing and Priority.”)

513.1a Previously, abilities that triggered at the beginning of the end step were printed with the trigger condition “at end of turn.” Cards that were printed with that text have received errata in the Oracle card reference to say “at the beginning of the end step” or “at the beginning of the next end step.”

513.2. If a permanent with an ability that triggers “at the beginning of the end step” enters the battlefield during this step, that ability won’t trigger until the next turn’s end step. Likewise, if a delayed triggered ability that triggers “at the beginning of the next end step” is created during this step, that ability won’t trigger until the next turn’s end step. In other words, the step doesn’t “back up” so those abilities can go on the stack. This rule applies only to triggered abilities; it doesn’t apply to continuous effects whose durations say “until end of turn” or “this turn.” (See rule 514, “Cleanup Step.”)

514. Cleanup Step

514.1. First, if the active player’s hand contains more cards than their maximum hand size (normally seven), they discard enough cards to reduce their hand size to that number. This turn-based action doesn’t use the stack.

514.2. Second, the following actions happen simultaneously: all damage marked on permanents (including phased-out permanents) is removed and all “until end of turn” and “this turn” effects end. This turn-based action doesn’t use the stack.

514.3. Normally, no player receives priority during the cleanup step, so no spells can be cast and no abilities can be activated. However, this rule is subject to the following exception:

514.3a At this point, the game checks to see if any state-based actions would be performed and/or any triggered abilities are waiting to be put onto the stack (including those that trigger “at the beginning of the next cleanup step”). If so, those state-based actions are performed, then those triggered abilities are put on the stack, then the active player gets priority. Players may cast spells and activate abilities. Once the stack is empty and all players pass in succession, another cleanup step begins.


6. Spells, Abilities, and Effects

600. General

601. Casting Spells

601.1. Previously, the action of casting a spell, or casting a card as a spell, was referred to on cards as “playing” that spell or that card. Cards that were printed with that text have received errata in the Oracle card reference so they now refer to “casting” that spell or that card.

601.1a Some effects still refer to “playing” a card. “Playing a card” means playing that card as a land or casting that card as a spell, whichever is appropriate.

601.2. To cast a spell is to take it from where it is (usually the hand), put it on the stack, and pay its costs, so that it will eventually resolve and have its effect. Casting a spell includes proposal of the spell (rules 601.2a–d) and determination and payment of costs (rules 601.2f–h). To cast a spell, a player follows the steps listed below, in order. A player must be legally allowed to cast the spell to begin this process (see rule 601.3). If a player is unable to comply with the requirements of a step listed below while performing that step, the casting of the spell is illegal ; the game returns to the moment before the casting of that spell was proposed (see rule 723, “Handling Illegal Actions”).

601.2a To propose the casting of a spell, a player first moves that card (or that copy of a card) from where it is to the stack. It becomes the topmost object on the stack. It has all the characteristics of the card (or the copy of a card) associated with it, and that player becomes its controller. The spell remains on the stack until it resolves, it’s countered, or a rule or effect moves it elsewhere.

601.2b If the spell is modal, the player announces the mode choice (see rule 700.2). If the player wishes to splice any cards onto the spell (see rule 702.47), they reveal those cards in their hand. If the spell has alternative or additional costs that will be paid as it’s being cast such as buyback or kicker costs (see rules 118.8 and 118.9), the player announces their intentions to pay any or all of those costs (see rule 601.2f). A player can’t apply two alternative methods of casting or two alternative costs to a single spell. If the spell has a variable cost that will be paid as it’s being cast (such as an {X} in its mana cost; see rule 107.3), the player announces the value of that variable. If the value of that variable is defined in the text of the spell by a choice that player would make later in the announcement or resolution of the spell, that player makes that choice at this time instead of that later time. If a cost that will be paid as the spell is being cast includes hybrid mana symbols, the player announces the nonhybrid equivalent cost they intend to pay. If a cost that will be paid as the spell is being cast includes Phyrexian mana symbols, the player announces whether they intend to pay 2 life or the corresponding colored mana cost for each of those symbols. Previously made choices (such as choosing to cast a spell with flashback from a graveyard or choosing to cast a creature with morph face down) may restrict the player’s options when making these choices.

601.2c The player announces their choice of an appropriate object or player for each target the spell requires. A spell may require some targets only if an alternative or additional cost (such as a kicker cost) or a particular mode was chosen for it; otherwise, the spell is cast as though it did not require those targets. Similarly, a spell may require alternative targets only if an alternative or additional cost was chosen for it. If the spell has a variable number of targets, the player announces how many targets they will choose before they announce those targets. In some cases, the number of targets will be defined by the spell’s text. Once the number of targets the spell has is determined, that number doesn’t change, even if the information used to determine the number of targets does. The same target can’t be chosen multiple times for any one instance of the word “target” on the spell. However, if the spell uses the word “target” in multiple places, the same object or player can be chosen once for each instance of the word “target” (as long as it fits the targeting criteria). If any effects say that an object or player must be chosen as a target, the player chooses targets so that they obey the maximum possible number of such effects without violating any rules or effects that say that an object or player can’t be chosen as a target. The chosen objects and/or players each become a target of that spell. (Any abilities that trigger when those objects and/or players become the target of a spell trigger at this point; they’ll wait to be put on the stack until the spell has finished being cast.)
Example: If a spell says “Tap two target creatures,” then the same creature can’t be chosen twice; the spell requires two different legal targets. A spell that says “Destroy target artifact and target land,” however, can target the same artifact land twice because it uses the word “target” in multiple places.

601.2d If the spell requires the player to divide or distribute an effect (such as damage or counters) among one or more targets, the player announces the division. Each of these targets must receive at least one of whatever is being divided.

601.2e The game checks to see if the proposed spell can legally be cast. If the proposed spell is illegal, the game returns to the moment before the casting of that spell was proposed (see rule 723, “Handling Illegal Actions”).

601.2f The player determines the total cost of the spell. Usually this is just the mana cost. Some spells have additional or alternative costs. Some effects may increase or reduce the cost to pay, or may provide other alternative costs. Costs may include paying mana, tapping permanents, sacrificing permanents, discarding cards, and so on. The total cost is the mana cost or alternative cost (as determined in rule 601.2b), plus all additional costs and cost increases, and minus all cost reductions. If multiple cost reductions apply, the player may apply them in any order. If the mana component of the total cost is reduced to nothing by cost reduction effects, it is considered to be {0}. It can’t be reduced to less than {0}. Once the total cost is determined, any effects that directly affect the total cost are applied. Then the resulting total cost becomes “locked in.” If effects would change the total cost after this time, they have no effect.

601.2g If the total cost includes a mana payment, the player then has a chance to activate mana abilities (see rule 605, “Mana Abilities”). Mana abilities must be activated before costs are paid.

601.2h The player pays the total cost in any order. Partial payments are not allowed. Unpayable costs can’t be paid.
Example: You cast Altar’s Reap, which costs {1}{B} and has an additional cost of sacrificing a creature. You sacrifice Thunderscape Familiar, whose effect makes your black spells cost {1} less to cast. Because a spell’s total cost is “locked in” before payments are actually made, you pay {B}, not {1}{B}, even though you’re sacrificing the Familiar.

601.2i Once the steps described in 601.2a–h are completed, effects that modify the characteristics of the spell as it’s cast are applied, then the spell becomes cast. Any abilities that trigger when a spell is cast or put onto the stack trigger at this time. If the spell’s controller had priority before casting it, they get priority.

601.3. A player can begin to cast a spell only if a rule or effect allows that player to cast it and no rule or effect prohibits that player from casting it.

601.3a If an effect prohibits a player from casting a spell with certain qualities, that player may consider any choices to be made during that spell’s proposal that may cause those qualities to change. If any such choices could cause that effect to no longer prohibit that player from casting that spell, the player may begin to cast the spell, ignoring the effect.
Example: A player controls Void Winnower, which reads, in part, “Your opponents can't cast spells with even mana values.” That player’s opponent may begin to cast Rolling Thunder, a card whose mana cost is {X}{R}{R}, because the chosen value of X may cause the spell’s mana value to become odd.

601.3b If an effect allows a player to cast a spell with certain qualities as though it had flash, that player may consider any choices to be made during that spell’s proposal that may cause that spell’s qualities to change. If any such choices could cause that effect to apply, that player may begin to cast that spell as though it had flash.
Example: An effect says that you may cast Aura spells as though they had flash, and you have a creature card with bestow in your hand. Because choosing the bestow ability’s alternative cost causes that spell to become an Aura spell, you may legally begin to cast that spell as though it had flash.

601.3c If an effect allows a player to cast a spell as though it had flash only if an alternative or additional cost is paid, that player may begin to cast that spell as though it had flash.

601.3d If a spell would have flash only if certain conditions are met, its controller may begin to cast that spell as though it had flash if those conditions are met.

601.3e Some rules and effects state that an alternative set of characteristics or a subset of characteristics are considered to determine if a card or copy of a card is legal to cast. These alternative characteristics replace the object’s characteristics for this determination. Continuous effects that would apply to that object once it has those characteristics are also considered.
Example: Garruk’s Horde says, in part, “You may cast creature spells from the top of your library.” If you control Garruk’s Horde and the top card of your library is a noncreature card with morph, you may cast it using its morph ability.
Example: Melek, Izzet Paragon says, in part, “You may cast instant and sorcery spells from the top of your library.” If you control Melek, Izzet Paragon and the top card of your library is Giant Killer, an adventurer creature card whose Adventure is an instant named Chop Down, you may cast Chop Down but not Giant Killer. If instead you control Garruk’s Horde and the top card of your library is Giant Killer, you may cast Giant Killer but not Chop Down.

601.3f Some effects allow a player to cast a spell with certain qualities from among face-down cards in exile. A player may begin to cast such a spell only if they can look at the face-down card in exile.

601.4. If a player is no longer allowed to cast a spell after completing its proposal (see rules 601.2a–d), the casting of the spell is illegal and the game returns to the moment before the casting of that spell was proposed (see rule 723, “Handling Illegal Actions”). It doesn’t matter if a rule or effect would make the casting of the spell illegal while determining and paying that spell’s costs (see rules 601.2f-h) or any time after the spell has been cast.

601.5. Some spells specify that one of their controller’s opponents does something the controller would normally do while it’s being cast, such as choose a mode or choose targets. In these cases, the opponent does so when the spell’s controller normally would do so.

601.5a If there is more than one opponent who could make such a choice, the spell’s controller decides which of those opponents will make the choice.

601.5b If the spell instructs its controller and another player to do something at the same time as the spell is being cast, the spell’s controller goes first, then the other player. This is an exception to rule 101.4.

601.6. Casting a spell that alters costs won’t affect spells and abilities that are already on the stack.

602. Activating Activated Abilities

602.1. Activated abilities have a cost and an effect. They are written as “[Cost]: [Effect.] [Activation instructions (if any).]”

602.1a The activation cost is everything before the colon (:). An ability’s activation cost must be paid by the player who is activating it.
Example: The activation cost of an ability that reads “{2}, {T}: You gain 1 life” is two mana of any type plus tapping the permanent that has the ability.

602.1b Some text after the colon of an activated ability states instructions that must be followed while activating that ability. Such text may state which players can activate that ability, may restrict when a player can activate the ability, or may define some aspect of the activation cost. This text is not part of the ability’s effect. It functions at all times. If an activated ability has any activation instructions, they appear last, after the ability’s effect.

602.1c An activated ability is the only kind of ability that can be activated. If an object or rule refers to activating an ability without specifying what kind, it must be referring to an activated ability.

602.1d Previously, the action of using an activated ability was referred to on cards as “playing” that ability. Cards that were printed with that text have received errata in the Oracle card reference so they now refer to “activating” that ability.

602.2. To activate an ability is to put it onto the stack and pay its costs, so that it will eventually resolve and have its effect. Only an object’s controller (or its owner, if it doesn’t have a controller) can activate its activated ability unless the object specifically says otherwise. Activating an ability follows the steps listed below, in order. If, at any point during the activation of an ability, a player is unable to comply with any of those steps, the activation is illegal; the game returns to the moment before that ability started to be activated (see rule 723, “Handling Illegal Actions”). Announcements and payments can’t be altered after they’ve been made.

602.2a The player announces that they are activating the ability. If an activated ability is being activated from a hidden zone, the card that has that ability is revealed. That ability is created on the stack as an object that’s not a card. It becomes the topmost object on the stack. It has the text of the ability that created it, and no other characteristics. Its controller is the player who activated the ability. The ability remains on the stack until it’s countered, it resolves, or an effect moves it elsewhere.

602.2b The remainder of the process for activating an ability is identical to the process for casting a spell listed in rules 601.2b–i. Those rules apply to activating an ability just as they apply to casting a spell. An activated ability’s analog to a spell’s mana cost (as referenced in rule 601.2f) is its activation cost.

602.3. Some abilities specify that one of their controller’s opponents does something the controller would normally do while it’s being activated, such as choose a mode or choose targets. In these cases, the opponent does so when the ability’s controller normally would do so.

602.3a If there is more than one opponent who could make such a choice, the ability’s controller decides which of those opponents will make the choice.

602.3b If the ability instructs its controller and another player to do something at the same time as the ability is being activated, the ability’s controller goes first, then the other player. This is an exception to rule 101.4.

602.4. Activating an ability that alters costs won’t affect spells and abilities that are already on the stack.

602.5. A player can’t begin to activate an ability that’s prohibited from being activated.

602.5a A creature’s activated ability with the tap symbol ({T}) or the untap symbol ({Q}) in its activation cost can’t be activated unless the creature has been under its controller’s control since the start of their most recent turn. Ignore this rule for creatures with haste (see rule 702.10).

602.5b If an activated ability has a restriction on its use (for example, “Activate this ability only once each turn”), the restriction continues to apply to that object even if its controller changes.

602.5c If an object acquires an activated ability with a restriction on its use from another object, that restriction applies only to that ability as acquired from that object. It doesn’t apply to other, identically worded abilities.

602.5d Activated abilities that read “Activate only as a sorcery” mean the player must follow the timing rules for casting a sorcery spell, though the ability isn’t actually a sorcery. The player doesn’t actually need to have a sorcery card that they could cast.

602.5e Activated abilities that read “Activate only as an instant” mean the player must follow the timing rules for casting an instant spell, though the ability isn’t actually an instant. The player doesn’t actually need to have an instant card that they could cast.

602.5f Some older cards have printed text that reads “Activate this ability only any time you could cast an [instant or sorcery].” These cards have received errata in Oracle card reference to match the text in 602.5d or 602.5e, as appropriate.

603. Handling Triggered Abilities

603.1. Triggered abilities have a trigger condition and an effect. They are written as “[When/Whenever/At] [trigger condition or event], [effect]. [Instructions (if any).]”

603.1a A triggered ability may include instructions after its effects that limit what the ability may target or state that it can’t be countered. This text is not part of the ability’s effect. It functions while the ability is on the stack.

603.2. Whenever a game event or game state matches a triggered ability’s trigger event, that ability automatically triggers. The ability doesn’t do anything at this point.

603.2a Because they aren’t cast or activated, triggered abilities can trigger even when it isn’t legal to cast spells and activate abilities. Effects that preclude abilities from being activated don’t affect them.

603.2b When a phase or step begins, all abilities that trigger “at the beginning of” that phase or step trigger.

603.2c An ability triggers only once each time its trigger event occurs. However, it can trigger repeatedly if one event contains multiple occurrences.
Example: A permanent has an ability whose trigger condition reads, “Whenever a land is put into a graveyard from the battlefield, . . . .” If someone casts a spell that destroys all lands, the ability will trigger once for each land put into the graveyard during the spell’s resolution.

603.2d An ability may state that a triggered ability triggers additional times. In this case, rather than simply determining that such an ability has triggered, determine how many times it should trigger, then that ability triggers that many times. An effect that states that an ability triggers additional times doesn’t invoke itself repeatedly and doesn’t apply to other effects that affect how many times an ability triggers.

603.2e Some trigger events use the word “becomes” (for example, “becomes attached” or “becomes blocked”). These trigger only at the time the named event happens—they don’t trigger if that state already exists or retrigger if it persists. An ability that triggers when a permanent “becomes tapped” or “becomes untapped” doesn’t trigger if the permanent enters the battlefield in that state.
Example: An ability that triggers when a permanent “becomes tapped” triggers only when the status of a permanent that’s already on the battlefield changes from untapped to tapped.

603.2f If a triggered ability’s trigger condition is met, but the object with that triggered ability is at no time visible to all players, the ability does not trigger.

603.2g An ability triggers only if its trigger event actually occurs. An event that’s prevented or replaced won’t trigger anything.
Example: An ability that triggers on damage being dealt won’t trigger if all the damage is prevented.

603.3. Once an ability has triggered, its controller puts it on the stack as an object that’s not a card the next time a player would receive priority. See rule 117, “Timing and Priority.” The ability becomes the topmost object on the stack. It has the text of the ability that created it, and no other characteristics. It remains on the stack until it’s countered, it resolves, a rule causes it to be removed from the stack, or an effect moves it elsewhere.

603.3a A triggered ability is controlled by the player who controlled its source at the time it triggered, unless it’s a delayed triggered ability. To determine the controller of a delayed triggered ability, see rules 603.7d–f.

603.3b If multiple abilities have triggered since the last time a player received priority, the abilities are placed on the stack in a two-part process. First, each player, in APNAP order, puts each triggered ability they control with a trigger condition that isn’t another ability triggering on the stack in any order they choose. (See rule 101.4.) Second, each player, in APNAP order, puts all remaining triggered abilities they control on the stack. Then the game once again checks for and performs state-based actions until none are performed, then abilities that triggered during this process go on the stack. This process repeats until no new state-based actions are performed and no abilities trigger. Then the appropriate player gets priority.

603.3c If a triggered ability is modal, its controller announces the mode choice when putting the ability on the stack. If one of the modes would be illegal (due to an inability to choose legal targets, for example), that mode can’t be chosen. If no mode is chosen, the ability is removed from the stack. (See rule 700.2.)

603.3d The remainder of the process for putting a triggered ability on the stack is identical to the process for casting a spell listed in rules 601.2c–d. If a choice is required when the triggered ability goes on the stack but no legal choices can be made for it, or if a rule or a continuous effect otherwise makes the ability illegal, the ability is simply removed from the stack.

603.4. A triggered ability may read “When/Whenever/At [trigger event], if [condition], [effect].” When the trigger event occurs, the ability checks whether the stated condition is true. The ability triggers only if it is; otherwise it does nothing. If the ability triggers, it checks the stated condition again as it resolves. If the condition isn’t true at that time, the ability is removed from the stack and does nothing. Note that this mirrors the check for legal targets. This rule is referred to as the “intervening ‘if’ clause” rule. (The word “if” has only its normal English meaning anywhere else in the text of a card; this rule only applies to an “if” that immediately follows a trigger condition.)
Example: Felidar Sovereign reads, “At the beginning of your upkeep, if you have 40 or more life, you win the game.” Its controller’s life total is checked as that player’s upkeep begins. If that player has 39 or less life, the ability doesn’t trigger at all. If that player has 40 or more life, the ability triggers and goes on the stack. As the ability resolves, that player’s life total is checked again. If that player has 39 or less life at this time, the ability is removed from the stack and has no effect. If that player has 40 or more life at this time, the ability resolves and that player wins the game.

603.5. Some triggered abilities’ effects are optional (they contain “may,” as in “At the beginning of your upkeep, you may draw a card”). These abilities go on the stack when they trigger, regardless of whether their controller intends to exercise the ability’s option or not. The choice is made when the ability resolves. Likewise, triggered abilities that have an effect “unless” something is true or a player chooses to do something will go on the stack normally; the “unless” part of the ability is dealt with when the ability resolves.

603.6. Trigger events that involve objects changing zones are called “zone-change triggers.” Many abilities with zone-change triggers attempt to do something to that object after it changes zones. During resolution, these abilities look for the object in the zone that it moved to. If the object is unable to be found in the zone it went to, the part of the ability attempting to do something to the object will fail to do anything. The ability could be unable to find the object because the object never entered the specified zone, because it left the zone before the ability resolved, or because it is in a zone that is hidden from a player, such as a library or an opponent’s hand. (This rule applies even if the object leaves the zone and returns again before the ability resolves.) The most common zone-change triggers are enters-the-battlefield triggers and leaves-the-battlefield triggers.

603.6a Enters-the-battlefield abilities trigger when a permanent enters the battlefield. These are written, “When [this object] enters the battlefield, . . . “ or “Whenever a [type] enters the battlefield, . . .” Each time an event puts one or more permanents onto the battlefield, all permanents on the battlefield (including the newcomers) are checked for any enters-the-battlefield triggers that match the event.

603.6b Continuous effects that modify characteristics of a permanent do so the moment the permanent is on the battlefield (and not before then). The permanent is never on the battlefield with its unmodified characteristics. Continuous effects don’t apply before the permanent is on the battlefield, however (see rule 603.6d).
Example: If an effect reads “All lands are creatures” and a land card is played, the effect makes the land card into a creature the moment it enters the battlefield, so it would trigger abilities that trigger when a creature enters the battlefield. Conversely, if an effect reads “All creatures lose all abilities” and a creature card with an enters-the-battlefield triggered ability enters the battlefield, that effect will cause it to lose its abilities the moment it enters the battlefield, so the enters-the-battlefield ability won’t trigger.

603.6c Leaves-the-battlefield abilities trigger when a permanent moves from the battlefield to another zone, or when a phased-in permanent leaves the game because its owner leaves the game. These are written as, but aren’t limited to, “When [this object] leaves the battlefield, . . .” or “Whenever [something] is put into a graveyard from the battlefield, . . . .” (See also rule 603.10.) An ability that attempts to do something to the card that left the battlefield checks for it only in the first zone that it went to. An ability that triggers when a card is put into a certain zone “from anywhere” is never treated as a leaves-the-battlefield ability, even if an object is put into that zone from the battlefield.

603.6d Some permanents have text that reads “[This permanent] enters the battlefield with . . . ,” “As [this permanent] enters the battlefield . . . ,” “[This permanent] enters the battlefield as . . . ,” or “[This permanent] enters the battlefield tapped.” Such text is a static ability—not a triggered ability—whose effect occurs as part of the event that puts the permanent onto the battlefield.

603.6e Some Auras have triggered abilities that trigger on the enchanted permanent leaving the battlefield. These triggered abilities can find the new object that permanent card became in the zone it moved to; they can also find the new object the Aura card became in its owner’s graveyard after state-based actions have been checked. See rule 400.7.

603.7. An effect may create a delayed triggered ability that can do something at a later time. A delayed triggered ability will contain “when,” “whenever,” or “at,” although that word won’t usually begin the ability.

603.7a Delayed triggered abilities are created during the resolution of spells or abilities, as the result of a replacement effect being applied, or as a result of a static ability that allows a player to take an action. A delayed triggered ability won’t trigger until it has actually been created, even if its trigger event occurred just beforehand. Other events that happen earlier may make the trigger event impossible.
Example: Part of an effect reads “When this creature leaves the battlefield,” but the creature in question leaves the battlefield before the spell or ability creating the effect resolves. In this case, the delayed ability never triggers.
Example: If an effect reads “When this creature becomes untapped” and the named creature becomes untapped before the effect resolves, the ability waits for the next time that creature untaps.

603.7b A delayed triggered ability will trigger only once—the next time its trigger event occurs—unless it has a stated duration, such as “this turn.” If its trigger event occurs more than once simultaneously and the ability doesn’t have a stated duration, the controller of the delayed triggered ability chooses which event causes the ability to trigger.

603.7c A delayed triggered ability that refers to a particular object still affects it even if the object changes characteristics. However, if that object is no longer in the zone it’s expected to be in at the time the delayed triggered ability resolves, the ability won’t affect it. (Note that if that object left that zone and then returned, it’s a new object and thus won’t be affected. See rule 400.7.)
Example: An ability that reads “Exile this creature at the beginning of the next end step” will exile the permanent even if it’s no longer a creature during the next end step. However, it won’t do anything if the permanent left the battlefield before then.

603.7d If a spell creates a delayed triggered ability, the source of that delayed triggered ability is that spell. The controller of that delayed triggered ability is the player who controlled that spell as it resolved.

603.7e If an activated or triggered ability creates a delayed triggered ability, the source of that delayed triggered ability is the same as the source of that other ability. The controller of that delayed triggered ability is the player who controlled that other ability as it resolved.

603.7f If a static ability generates a replacement effect which causes a delayed triggered ability to be created, the source of that delayed triggered ability is the object with that static ability. The controller of that delayed triggered ability is the same as the controller of that object at the time the replacement effect was applied.

603.7g If a static ability allows a player to take an action and creates a delayed triggered ability if that player does so, the source of that delayed triggered ability is the object with that static ability. The controller of that delayed triggered ability is the same as the controller of that object at the time the action was taken.

603.8. Some triggered abilities trigger when a game state (such as a player controlling no permanents of a particular card type) is true, rather than triggering when an event occurs. These abilities trigger as soon as the game state matches the condition. They’ll go onto the stack at the next available opportunity. These are called state triggers. (Note that state triggers aren’t the same as state-based actions.) A state-triggered ability doesn’t trigger again until the ability has resolved, has been countered, or has otherwise left the stack. Then, if the object with the ability is still in the same zone and the game state still matches its trigger condition, the ability will trigger again.
Example: A permanent’s ability reads, “Whenever you have no cards in hand, draw a card.” If its controller plays the last card from their hand, the ability will trigger once and won’t trigger again until it has left the stack. If its controller casts a spell that reads “Discard your hand, then draw that many cards,” the ability will trigger during the spell’s resolution because the player’s hand was momentarily empty.

603.9. Some triggered abilities trigger specifically when a player loses the game. These abilities trigger when a player loses or leaves the game, regardless of the reason, unless that player leaves the game as the result of a draw. See rule 104.3.

603.10. Normally, objects that exist immediately after an event are checked to see if the event matched any trigger conditions, and continuous effects that exist at that time are used to determine what the trigger conditions are and what the objects involved in the event look like. However, some triggered abilities are exceptions to this rule; the game “looks back in time” to determine if those abilities trigger, using the existence of those abilities and the appearance of objects immediately prior to the event. The list of exceptions is as follows:

603.10a Some zone-change triggers look back in time. These are leaves-the-battlefield abilities, abilities that trigger when a card leaves a graveyard, and abilities that trigger when an object that all players can see is put into a hand or library.
Example: Two creatures are on the battlefield along with an artifact that has the ability “Whenever a creature dies, you gain 1 life.” Someone casts a spell that destroys all artifacts, creatures, and enchantments. The artifact’s ability triggers twice, even though the artifact goes to its owner’s graveyard at the same time as the creatures.

603.10b Abilities that trigger when a permanent phases out look back in time.

603.10c Abilities that trigger specifically when an object becomes unattached look back in time.

603.10d Abilities that trigger when a player loses control of an object look back in time.

603.10e Abilities that trigger when a spell is countered look back in time.

603.10f Abilities that trigger when a player loses the game look back in time.

603.10g Abilities that trigger when a player planeswalks away from a plane look back in time.

603.11. Some objects have a static ability that’s linked to one or more triggered abilities. (See rule 607, “Linked Abilities.”) These objects combine the abilities into one paragraph, with the static ability first, followed by each triggered ability that’s linked to it. A very few objects have triggered abilities which are written with the trigger condition in the middle of the ability, rather than at the beginning.
Example: An ability that reads “Reveal the first card you draw each turn. Whenever you reveal a basic land card this way, draw a card” is a static ability linked to a triggered ability.

603.12. A resolving spell or ability may allow or instruct a player to take an action and create a triggered ability that triggers “when [a player] [does or doesn’t]” take that action or “when [something happens] this way.” These reflexive triggered abilities follow the rules for delayed triggered abilities (see rule 603.7), except that they’re checked immediately after being created and trigger based on whether the trigger event or events occurred earlier during the resolution of the spell or ability that created them. If the trigger event or events occur multiple times during that time, the reflexive triggered ability will trigger once for each of those times.
Example: Heart-Piercer Manticore has an ability that reads “When Heart-Piercer Manticore enters the battlefield, you may sacrifice another creature. When you do, Heart-Piercer Manticore deals damage equal to that creature’s power to any target.” The reflexive triggered ability triggers only when you sacrifice another creature due to the original triggered ability, and not if you sacrifice a creature for any other reason.

604. Handling Static Abilities

604.1. Static abilities do something all the time rather than being activated or triggered. They are written as statements, and they’re simply true.

604.2. Static abilities create continuous effects, some of which are prevention effects or replacement effects. These effects are active as long as the permanent with the ability remains on the battlefield and has the ability, or as long as the object with the ability remains in the appropriate zone, as described in rule 113.6.

604.3. Some static abilities are characteristic-defining abilities. A characteristic-defining ability conveys information about an object’s characteristics that would normally be found elsewhere on that object (such as in its mana cost, type line, or power/toughness box). Characteristic-defining abilities can add to or override information found elsewhere on that object. Characteristic-defining abilities function in all zones. They also function outside the game.

604.3a A static ability is a characteristic-defining ability if it meets the following criteria: (1) It defines an object’s colors, subtypes, power, or toughness; (2) it is printed on the card it affects, it was granted to the token it affects by the effect that created the token, or it was acquired by the object it affects as the result of a copy effect or text-changing effect; (3) it does not directly affect the characteristics of any other objects; (4) it is not an ability that an object grants to itself; and (5) it does not set the values of such characteristics only if certain conditions are met.

604.4. Many Auras, Equipment, and Fortifications have static abilities that modify the object they’re attached to, but those abilities don’t target that object. If an Aura, Equipment, or Fortification is moved to a different object, the ability stops applying to the original object and starts modifying the new one.

604.5. Some static abilities apply while a spell is on the stack. These are often abilities that refer to countering the spell. Also, abilities that say “As an additional cost to cast . . . ,” “You may pay [cost] rather than pay [this object]’s mana cost,” and “You may cast [this object] without paying its mana cost” work while a spell is on the stack.

604.6. Some static abilities apply while a card is in any zone that you could cast or play it from (usually your hand). These are limited to those that read, “You may [cast/play] [this card] . . . ,” “You can’t [cast/play] [this card] . . . ,” and “[Cast/Play] [this card] only . . . .”

604.7. Unlike spells and other kinds of abilities, static abilities can’t use an object’s last known information for purposes of determining how their effects are applied.

605. Mana Abilities

605.1. Some activated abilities and some triggered abilities are mana abilities, which are subject to special rules. Only abilities that meet either of the following two sets of criteria are mana abilities, regardless of what other effects they may generate or what timing restrictions (such as “Activate only as an instant”) they may have.

605.1a An activated ability is a mana ability if it meets all of the following criteria: it doesn’t require a target (see rule 115.6), it could add mana to a player’s mana pool when it resolves, and it’s not a loyalty ability. (See rule 606, “Loyalty Abilities.”)

605.1b A triggered ability is a mana ability if it meets all of the following criteria: it doesn’t require a target (see rule 115.6), it triggers from the activation or resolution of an activated mana ability (see rule 605.1a) or from mana being added to a player’s mana pool, and it could add mana to a player’s mana pool when it resolves.

605.2. A mana ability remains a mana ability even if the game state doesn’t allow it to produce mana.
Example: A permanent has an ability that reads “{T}: Add {G} for each creature you control.” The ability is still a mana ability even if you control no creatures or if the permanent is already tapped.

605.3. Activating an activated mana ability follows the rules for activating any other activated ability (see rule 602.2), with the following exceptions:

605.3a A player may activate an activated mana ability whenever they have priority, whenever they are casting a spell or activating an ability that requires a mana payment, or whenever a rule or effect asks for a mana payment, even if it’s in the middle of casting or resolving a spell or activating or resolving an ability.

605.3b An activated mana ability doesn’t go on the stack, so it can’t be targeted, countered, or otherwise responded to. Rather, it resolves immediately after it is activated. (See rule 405.6c.)

605.3c Once a player begins to activate a mana ability, that ability can’t be activated again until it has resolved.

605.4. Triggered mana abilities follow all the rules for other triggered abilities (see rule 603, “Handling Triggered Abilities”), with the following exception:

605.4a A triggered mana ability doesn’t go on the stack, so it can’t be targeted, countered, or otherwise responded to. Rather, it resolves immediately after the mana ability that triggered it, without waiting for priority.
Example: An enchantment reads, “Whenever a player taps a land for mana, that player adds one mana of any type that land produced.” If a player taps lands for mana while casting a spell, the additional mana is added immediately and can be used to pay for the spell.

605.5. Abilities that don’t meet the criteria specified in rules 605.1a–b and spells aren’t mana abilities.

605.5a An ability with a target is not a mana ability, even if it could put mana into a player’s mana pool when it resolves. The same is true for a triggered ability that could produce mana but triggers from an event other than activating a mana ability, or a triggered ability that triggers from activating a mana ability but couldn’t produce mana. These follow the normal rules for activated or triggered abilities, as appropriate.

605.5b A spell can never be a mana ability, even if it could put mana into a player’s mana pool when it resolves. It’s cast and resolves just like any other spell. Some older cards were printed with the card type “mana source”; these cards have received errata in the Oracle card reference and are now instants.

606. Loyalty Abilities

606.1. Some activated abilities are loyalty abilities, which are subject to special rules.

606.2. An activated ability with a loyalty symbol in its cost is a loyalty ability. Normally, only planeswalkers have loyalty abilities.

606.3. A player may activate a loyalty ability of a permanent they control any time they have priority and the stack is empty during a main phase of their turn, but only if no player has previously activated a loyalty ability of that permanent that turn.

606.4. The cost to activate a loyalty ability of a permanent is to put on or remove from that permanent a certain number of loyalty counters, as shown by the loyalty symbol in the ability’s cost.

606.5. A loyalty ability with a negative loyalty cost can’t be activated unless the permanent has at least that many loyalty counters on it.

607. Linked Abilities

607.1. An object may have two abilities printed on it such that one of them causes actions to be taken or objects or players to be affected and the other one directly refers to those actions, objects, or players. If so, these two abilities are linked: the second refers only to actions that were taken or objects or players that were affected by the first, and not by any other ability.

607.1a An ability printed on an object within another ability that grants that ability to that object is considered to be “printed on” that object for these purposes.

607.1b An ability printed on either face of a transforming double-faced card (see rule 711) is considered to be “printed on” that object for these purposes, regardless of which face is up.

607.1c An ability printed on an object that fulfills both criteria described in rule 607.1 is linked to itself.

607.1d Abilities printed on two objects can be linked if one object is a token or emblem and the second object was the source of the ability that created the token or emblem. In these cases, the abilities fit the criteria listed for one of the different kinds of linked abilities in rule 607.2 except they are printed on two objects rather than one.

607.2. There are different kinds of linked abilities.

607.2a If an object has an activated or triggered ability printed on it that instructs a player to exile one or more cards and an ability printed on it that refers either to “the exiled cards” or to cards “exiled with [this object],” these abilities are linked. The second ability refers only to cards in the exile zone that were put there as a result of an instruction to exile them in the first ability.

607.2b If an object has an ability printed on it that generates a replacement effect which causes one or more cards to be exiled and an ability printed on it that refers either to “the exiled cards” or to cards “exiled with [this object],” these abilities are linked. The second ability refers only to cards in the exile zone that were put there as a direct result of a replacement event caused by the first ability. See rule 614, “Replacement Effects.”

607.2c If an object has an activated or triggered ability printed on it that puts one or more objects onto the battlefield and an ability printed on it that refers to objects “put onto the battlefield with [this object]” or “created with [this object],” those abilities are linked. The second can refer only to objects put onto the battlefield as a result of the first.

607.2d If an object has an ability printed on it that causes a player to “choose a [value]” and an ability printed on it that refers to “the chosen [value],” “the last chosen [value],” or similar, those abilities are linked. The second ability refers only to a choice made as a result of the first ability.

607.2e If an object has an ability printed on it that causes a player to choose from between two or more words that otherwise have no rules meaning and an ability printed on it that refers to a choice involving one or more of those words, those abilities are linked. The second can refer only to a choice made as a result of the first ability.

607.2f If an object has an ability printed on it that causes a player to pay a cost as it enters the battlefield and an ability printed on it that refers to the cost paid “as [this object] entered the battlefield,” these abilities are linked. The second ability refers only to a cost paid as a result of the first ability.

607.2g If an object has both a static ability and one or more triggered abilities printed on it in the same paragraph, each of those triggered abilities is linked to the static ability. Each triggered ability refers only to actions taken as a result of the static ability. See rule 603.11.

607.2h If an object has a kicker ability printed on it and an ability printed on it that refers to whether that object was kicked, those abilities are linked. The second refers only to whether the intent to pay the kicker cost listed in the first was declared as the object was cast as a spell. If a kicker ability lists multiple costs, it will have multiple abilities linked to it. Each of those abilities will specify which kicker cost it refers to. See rule 702.33, “Kicker.”

607.2i If an object has an ability printed on it that causes a player to pay a variable additional cost as it’s cast and an ability printed on it that refers to the cost paid “as [this object] was cast,” these abilities are linked. The second refers only to the value chosen for the cost listed in the first as the object was cast as a spell. See rule 601.2b.

607.2j The two abilities represented by the champion keyword are linked abilities. See rule 702.72, “Champion.”

607.2k Abilities preceded by an anchor word are linked to the ability that allows a player to choose that anchor word. See rule 614.12b.

607.2m If an object has a static ability printed on it that allows a player to exile one or more cards “before you shuffle your deck to start the game” and an ability printed on it that refers to cards “exiled with cards named [this object’s name],” the second ability is linked to the first ability of any objects that had the specified name before the game began.

607.2n If an object has both a static ability that causes a player to make a choice for a characteristic-defining ability before the game begins and that characteristic-defining ability printed on it in the same paragraph, those abilities are linked. The second ability refers only to the choice made as a result of the first ability and continues to refer to that choice as the object changes zones during the game.

607.3. If, within a pair of linked abilities, one ability refers to a single object as “the exiled card,” “a card exiled with [this card],” or a similar phrase, and the other ability has exiled multiple cards (usually because it was copied), the ability refers to each of the exiled cards. If that ability asks for any information about the exiled card, such as a characteristic or mana value, it gets multiple answers. If these answers are used to determine the value of a variable, the sum of the answers is used. If that ability performs any actions on “the” card, it performs that action on each exiled card. If that ability performs any actions on “a” card, the controller of the ability chooses which card is affected.

607.4. An ability may be part of more than one pair of linked abilities.
Example: Paradise Plume has the following three abilities: “As Paradise Plume enters the battlefield, choose a color,” “Whenever a player casts a spell of the chosen color, you may gain 1 life,” and “{T}: Add one mana of the chosen color.” The first and second abilities are linked. The first and third abilities are linked.

607.5. If an object acquires a pair of linked abilities as part of the same effect, the abilities will be similarly linked to one another on that object even though they weren’t printed on that object. They can’t be linked to any other ability, regardless of what other abilities the object may currently have or may have had in the past.
Example: Arc-Slogger has the ability “{R}, Exile the top ten cards of your library: Arc-Slogger deals 2 damage to any target.” Sisters of Stone Death has the ability “{B}{G}: Exile target creature blocking or blocked by Sisters of Stone Death” and the ability “{2}{B}: Put a creature card exiled with Sisters of Stone Death onto the battlefield under your control.” Quicksilver Elemental has the ability “{U}: Quicksilver Elemental gains all activated abilities of target creature until end of turn.” If a player has Quicksilver Elemental gain Arc-Slogger’s ability, activates it, then has Quicksilver Elemental gain Sisters of Stone Death’s abilities, activates the exile ability, and then activates the return-to-the-battlefield ability, only the creature card Quicksilver Elemental exiled with Sisters of Stone Death’s ability can be returned to the battlefield. Creature cards Quicksilver Elemental exiled with Arc-Slogger’s ability can’t be returned.

607.5a If an object gains an ability that refers to a choice, but either (a) doesn’t copy that ability’s linked ability or (b) does copy the linked ability but no choice is made for it, then the choice is considered to be “undefined.” If an ability refers to an undefined choice, that part of the ability won’t do anything.
Example: Voice of All enters the battlefield and Unstable Shapeshifter copies it. Voice of All reads, in part, “As Voice of All enters the battlefield, choose a color.” and “Voice of All has protection from the chosen color.” Unstable Shapeshifter never had a chance for a color to be chosen for it, because it didn’t enter the battlefield as Voice of All so it doesn’t gain a protection ability.
Example: A Vesuvan Doppelganger enters the battlefield as a copy of Voice of All, and the Doppelganger’s controller chooses blue. Later, the Doppelganger copies Quirion Elves, which has the ability, “{T}: Add one mana of the chosen color.” Even though a color was chosen for the Doppelganger, it wasn’t chosen for the ability linked to the mana ability copied from the Elves. If that mana ability of the Doppelganger is activated, it will not produce mana.

608. Resolving Spells and Abilities

608.1. Each time all players pass in succession, the spell or ability on top of the stack resolves. (See rule 609, “Effects.”)

608.2. If the object that’s resolving is an instant spell, a sorcery spell, or an ability, its resolution may involve several steps. The steps described in rules 608.2a and 608.2b are followed first. The steps described in rules 608.2c–k are then followed as appropriate, in no specific order. The step described in rule 608.2m is followed last.

608.2a If a triggered ability has an intervening “if” clause, it checks whether the clause’s condition is true. If it isn’t, the ability is removed from the stack and does nothing. Otherwise, it continues to resolve. See rule 603.4.

608.2b If the spell or ability specifies targets, it checks whether the targets are still legal. A target that’s no longer in the zone it was in when it was targeted is illegal. Other changes to the game state may cause a target to no longer be legal; for example, its characteristics may have changed or an effect may have changed the text of the spell. If the source of an ability has left the zone it was in, its last known information is used during this process. If all its targets, for every instance of the word “target,” are now illegal, the spell or ability doesn’t resolve. It’s removed from the stack and, if it’s a spell, put into its owner’s graveyard. Otherwise, the spell or ability will resolve normally. Illegal targets, if any, won’t be affected by parts of a resolving spell’s effect for which they’re illegal. Other parts of the effect for which those targets are not illegal may still affect them. If the spell or ability creates any continuous effects that affect game rules (see rule 613.11), those effects don’t apply to illegal targets. If part of the effect requires information about an illegal target, it fails to determine any such information. Any part of the effect that requires that information won’t happen.
Example: Sorin’s Thirst is a black instant that reads, “Sorin’s Thirst deals 2 damage to target creature and you gain 2 life.” If the creature isn’t a legal target during the resolution of Sorin’s Thirst (say, if the creature has gained protection from black or left the battlefield), then Sorin’s Thirst doesn’t resolve. Its controller doesn’t gain any life.
Example: Plague Spores reads, “Destroy target nonblack creature and target land. They can’t be regenerated.” Suppose the same creature land is chosen both as the nonblack creature and as the land, and the color of the creature land is changed to black before Plague Spores resolves. Plague Spores still resolves because the black creature land is still a legal target for the “target land” part of the spell. The “destroy target nonblack creature” part of the spell won’t affect that permanent, but the “destroy target land” part of the spell will still destroy it. It can’t be regenerated.

608.2c The controller of the spell or ability follows its instructions in the order written. However, replacement effects may modify these actions. In some cases, later text on the card may modify the meaning of earlier text (for example, “Destroy target creature. It can’t be regenerated” or “Counter target spell. If that spell is countered this way, put it on top of its owner’s library instead of into its owner’s graveyard.”) Don’t just apply effects step by step without thinking in these cases—read the whole text and apply the rules of English to the text.

608.2d If an effect of a spell or ability offers any choices other than choices already made as part of casting the spell, activating the ability, or otherwise putting the spell or ability on the stack, the player announces these while applying the effect. The player can’t choose an option that’s illegal or impossible, with the exception that having a library with no cards in it doesn’t make drawing a card an impossible action (see rule 121.3). If an effect divides or distributes something, such as damage or counters, as a player chooses among any number of untargeted players and/or objects, the player chooses the amount and division such that each chosen player or object receives at least one of whatever is being divided. (Note that if an effect divides or distributes something, such as damage or counters, as a player chooses among some number of target objects and/or players, the amount and division were determined as the spell or ability was put onto the stack rather than at this time; see rule 601.2d.)
Example: A spell’s instruction reads, “You may sacrifice a creature. If you don’t, you lose 4 life.” A player who controls no creatures can’t choose the sacrifice option.

608.2e Some spells and abilities have multiple steps or actions, denoted by separate sentences or clauses, that involve multiple players. In these cases, the choices for the first action are made in APNAP order, and then the first action is processed simultaneously. Then the choices for the second action are made in APNAP order, and then that action is processed simultaneously, and so on. See rule 101.4.

608.2f Some spells and abilities include actions taken on multiple players and/or objects. In most cases, each such action is processed simultaneously. If the action can’t be processed simultaneously, it’s instead processed considering each affected player or object individually. APNAP order is used to make the primary determination of the order of those actions. Secondarily, if the action is to be taken on both a player and an object they control or on multiple objects controlled by the same player, the player who controls the resolving spell or ability chooses the relative order of those actions. 
Example: Blatant Thievery says “For each opponent, gain control of target permanent that player controls.” As Blatant Thievery resolves, its controller gains control of all permanents chosen as targets simultaneously.
Example: Soulfire Eruption says, in part, “Choose any number of target creatures, planeswalkers, and/or players. For each of them, exile the top card of your library, then Soulfire Eruption deals damage equal to that card’s mana value to that permanent or player.” A player casts Soulfire Eruption targeting an opponent and a creature that opponent controls. As Soulfire Eruption resolves, the player can’t exile the top card of their library multiple times at the same time, so they first choose which target they are considering, then they exile the top card of their library, and finally Soulfire Eruption deals damage to that target. They then repeat this process for the remaining target. 

608.2g If an effect gives a player the option to pay mana, they may activate mana abilities before taking that action. If an effect specifically instructs or allows a player to cast a spell during resolution, they do so by following the steps in rules 601.2a–i, except no player receives priority after it’s cast. That spell becomes the topmost object on the stack, and the currently resolving spell or ability continues to resolve, which may include casting other spells this way. No other spells can normally be cast and no other abilities can normally be activated during resolution.

608.2h If an effect requires information from the game (such as the number of creatures on the battlefield), the answer is determined only once, when the effect is applied. If the effect requires information from a specific object, including the source of the ability itself, the effect uses the current information of that object if it’s in the public zone it was expected to be in; if it’s no longer in that zone, or if the effect has moved it from a public zone to a hidden zone, the effect uses the object’s last known information. See rule 113.7a. If an ability states that an object does something, it’s the object as it exists—or as it most recently existed—that does it, not the ability.

608.2i If an effect refers to certain characteristics, it checks only for the value of the specified characteristics, regardless of any related ones an object may also have.
Example: An effect that reads “Destroy all black creatures” destroys a white-and-black creature, but one that reads “Destroy all nonblack creatures” doesn’t.

608.2j If an ability’s effect refers to a specific untargeted object that has been previously referred to by that ability’s cost or trigger condition, it still affects that object even if the object has changed characteristics.
Example: Wall of Tears says “Whenever Wall of Tears blocks a creature, return that creature to its owner’s hand at end of combat.” If Wall of Tears blocks a creature, then that creature ceases to be a creature before the triggered ability resolves, the permanent will still be returned to its owner’s hand.

608.2k If an instant spell, sorcery spell, or ability that can legally resolve leaves the stack once it starts to resolve, it will continue to resolve fully.

608.2m As the final part of an instant or sorcery spell’s resolution, the spell is put into its owner’s graveyard. As the final part of an ability’s resolution, the ability is removed from the stack and ceases to exist.

608.3. If the object that’s resolving is a permanent spell, its resolution involves a single step (unless it’s an Aura, a copy of a permanent spell, or a mutating creature spell). The spell card becomes a permanent and is put onto the battlefield under the control of the spell’s controller.

608.3a If the object that’s resolving is an Aura spell, its resolution involves two steps. First, it checks whether the target specified by its enchant ability is still legal, as described in rule 608.2b. (See rule 702.5, “Enchant.”) If so, the spell card becomes a permanent and is put onto the battlefield under the control of the spell’s controller attached to the object it was targeting.

608.3b If the object that’s resolving is a copy of a permanent spell, that object becomes a token permanent and is put onto the battlefield under the control of the spell’s controller. It is no longer a copy of a spell. The token put onto the battlefield this way is not “created” for the purposes of any replacement effects or triggered abilities that refer to creating a token.

608.3c If the object that’s resolving is a mutating creature spell, its resolution involves two steps. First, it checks whether the target creature with the same owner as the spell is still legal. If so, the object representing that spell merges with that permanent. Otherwise, it becomes a creature spell and is put onto the battlefield under the control of the spell’s controller. (See rule 702.140, “Mutate.”)

608.3d If a permanent spell resolves but its controller can’t put it onto the battlefield, that player puts it into its owner’s graveyard.
Example: Worms of the Earth has the ability “Lands can’t enter the battlefield.” Clone says “You may have Clone enter the battlefield as a copy of any creature on the battlefield.” If a player casts Clone and chooses to copy Dryad Arbor (a land creature) while Worms of the Earth is on the battlefield, Clone can’t enter the battlefield from the stack. It’s put into its owner’s graveyard.

609. Effects

609.1. An effect is something that happens in the game as a result of a spell or ability. When a spell, activated ability, or triggered ability resolves, it may create one or more one-shot or continuous effects. Static abilities may create one or more continuous effects. Text itself is never an effect.

609.2. Effects apply only to permanents unless the instruction’s text states otherwise or they clearly can apply only to objects in one or more other zones.
Example: An effect that changes all lands into creatures won’t alter land cards in players’ graveyards. But an effect that says spells cost more to cast will apply only to spells on the stack, since a spell is always on the stack while a player is casting it.

609.3. If an effect attempts to do something impossible, it does only as much as possible.
Example: If a player is holding only one card, an effect that reads “Discard two cards” causes them to discard only that card. If an effect moves cards out of the library (as opposed to drawing), it moves as many as possible.

609.4. Some effects state that a player may do something “as though” some condition were true or a creature can do something “as though” some condition were true. This applies only to the stated effect. For purposes of that effect, treat the game exactly as if the stated condition were true. For all other purposes, treat the game normally.

609.4a If two effects state that a player may (or a creature can) do the same thing “as though” different conditions were true, both conditions could apply. If one “as though” effect satisfies the requirements for another “as though” effect, then both effects will apply.
Example: A player controls Vedalken Orrery, an artifact that says “You may cast spells as though they had flash.” That player casts Shaman’s Trance, an instant that says, in part, “You may play lands and cast spells from other players’ graveyards this turn as though those cards were in your graveyard.” The player may cast a sorcery with flashback from another player’s graveyard as though it were in that player’s graveyard and as though it had flash.

609.4b If an effect allows a player to spend mana “as though it were mana of any [type or color],” this affects only how the player may pay a cost. It doesn’t change that cost, and it doesn’t change what mana was actually spent to pay that cost.

609.5. If an effect could result in a tie, the text of the spell or ability that created the effect will specify what to do in the event of a tie. The Magic game has no default for ties.

609.6. Some continuous effects are replacement effects or prevention effects. See rules 614 and 615.

609.7. Some effects apply to damage from a source—for example, “The next time a red source of your choice would deal damage to you this turn, prevent that damage.”

609.7a If an effect requires a player to choose a source of damage, they may choose a permanent; a spell on the stack (including a permanent spell); any object referred to by an object on the stack, by a replacement or prevention effect that’s waiting to apply, or by a delayed triggered ability that’s waiting to trigger (even if that object is no longer in the zone it used to be in); or a face-up object in the command zone. A source doesn’t need to be capable of dealing damage to be a legal choice. The source is chosen when the effect is created. If the player chooses a permanent, the effect will apply to the next damage dealt by that permanent, regardless of whether it’s combat damage or damage dealt as the result of a spell or ability. If the player chooses a permanent spell, the effect will apply to any damage dealt by that spell and any damage dealt by the permanent that spell becomes when it resolves.

609.7b Some effects from resolved spells and abilities prevent or replace damage from sources with certain properties, such as a creature or a source of a particular color. When the source would deal damage, the “shield” rechecks the source’s properties. If the properties no longer match, the damage isn’t prevented or replaced. If for any reason the shield prevents no damage or replaces no damage, the shield isn’t used up.

609.7c Some effects from static abilities prevent or replace damage from sources with certain properties. For these effects, the prevention or replacement applies to sources that are permanents with that property and to any sources that aren’t on the battlefield that have that property.

610. One-Shot Effects

610.1. A one-shot effect does something just once and doesn’t have a duration. Examples include dealing damage, destroying a permanent, creating a token, and moving an object from one zone to another.

610.2. Some one-shot effects create a delayed triggered ability, which instructs a player to do something later in the game (usually at a specific time) rather than as the spell or ability that’s creating the one-shot effect resolves. See rule 603.7.

610.3. Some one-shot effects cause an object to change zones “until” a specified event occurs. A second one-shot effect is created immediately after the specified event. This second one-shot effect returns the object to its previous zone.

610.3a If a resolving spell or activated ability creates the initial one-shot effect that causes the object to change zones, and the specified event has already occurred before that one-shot effect would occur but after that spell or ability was put onto the stack, the object doesn’t move.

610.3b If a resolving triggered ability creates the initial one-shot effect that causes the object to change zones, and the specified event has already occurred before that one-shot effect would occur but after that ability triggered, the object doesn’t move.

610.3c An object returned to the battlefield this way returns under its owner’s control unless otherwise specified.

610.3d If multiple one-shot effects are created this way immediately after one or more simultaneous events, those one-shot effects are also simultaneous.
Example: Two Banisher Priests have each exiled a card. All creatures are destroyed at the same time by Day of Judgment. The two exiled cards are returned to the battlefield at the same time.

610.4. Some one-shot effects cause a permanent to phase out “until” a specified event occurs. A second one-shot effect is created immediately after the specified event. This second one-shot effect causes the permanent to phase in.

610.4a A permanent phased out this way doesn’t phase in as a result of the turn-based action during a player’s untap step (see rule 502.1). Other effects may cause it to phase in. If a permanent phased out this way phases in due to another effect, the second one-shot effect doesn’t happen, even if that permanent has phased out again.

610.4b If a resolving spell or activated ability creates the initial one-shot effect that causes the permanent to phase out, and the specified event has already occurred before that one-shot effect would occur but after that spell or ability was put onto the stack, the permanent doesn’t phase out.

610.4c If a resolving triggered ability creates the initial one-shot effect that causes the permanent to phase out, and the specified event has already occurred before that one-shot effect would occur but after that ability triggered, the permanent doesn’t phase out.

610.4d If multiple one-shot effects are created this way immediately after one or more simultaneous events, those one-shot effects are also simultaneous.

611. Continuous Effects

611.1. A continuous effect modifies characteristics of objects, modifies control of objects, or affects players or the rules of the game, for a fixed or indefinite period.

611.2. A continuous effect may be generated by the resolution of a spell or ability.

611.2a A continuous effect generated by the resolution of a spell or ability lasts as long as stated by the spell or ability creating it (such as “until end of turn”). If no duration is stated, it lasts until the end of the game.

611.2b Some continuous effects generated by the resolution of a spell or ability have durations worded “for as long as . . . .” If the “for as long as” duration never starts, or it ends before the moment the effect would first be applied, the effect does nothing. It doesn’t start and immediately stop again, and it doesn’t last forever.
Example: Master Thief has the ability “When Master Thief enters the battlefield, gain control of target artifact for as long as you control Master Thief.” If you lose control of Master Thief before the ability resolves, it does nothing, because its duration—as long as you control Master Thief—was over before the effect began.

611.2c If a continuous effect generated by the resolution of a spell or ability modifies the characteristics or changes the controller of any objects, the set of objects it affects is determined when that continuous effect begins. After that point, the set won’t change. (Note that this works differently than a continuous effect from a static ability.) A continuous effect generated by the resolution of a spell or ability that doesn’t modify the characteristics or change the controller of any objects modifies the rules of the game, so it can affect objects that weren’t affected when that continuous effect began. If a single continuous effect has parts that modify the characteristics or changes the controller of any objects and other parts that don’t, the set of objects each part applies to is determined independently.
Example: An effect that reads “All white creatures get +1/+1 until end of turn” gives the bonus to all permanents that are white creatures when the spell or ability resolves—even if they change color later—and doesn’t affect those that enter the battlefield or turn white afterward.
Example: An effect that reads “Prevent all damage creatures would deal this turn” doesn’t modify any object’s characteristics, so it’s modifying the rules of the game. That means the effect will apply even to damage from creatures that weren’t on the battlefield when the continuous effect began. It also affects damage from permanents that become creatures later in the turn.

611.2d If a resolving spell or ability that creates a continuous effect contains a variable such as X, the value of that variable is determined only once, on resolution. See rule 608.2h.

611.2e If a resolving spell or ability both puts a nontoken permanent onto the battlefield and creates a continuous effect stating that the permanent “is [characteristic],” that continuous effect applies simultaneously with the permanent entering the battlefield. This characteristic is usually a color or a creature type. If the continuous effect says the permanent “becomes [characteristic]” or “gains [an ability],” that effect applies after the permanent is on the battlefield.
Example: Arbiter of the Ideal puts an artifact, creature, or land card onto the battlefield and says, in part, “That permanent is an enchantment in addition to its other types.” An ability that triggers whenever an enchantment enters the battlefield would trigger. The permanent doesn’t enter the battlefield and then become an enchantment.

611.3. A continuous effect may be generated by the static ability of an object.

611.3a A continuous effect generated by a static ability isn’t “locked in”; it applies at any given moment to whatever its text indicates.

611.3b The effect applies at all times that the permanent generating it is on the battlefield or the object generating it is in the appropriate zone.
Example: A permanent with the static ability “All white creatures get +1/+1” generates an effect that continuously gives +1/+1 to each white creature on the battlefield. If a creature becomes white, it gets this bonus; a creature that stops being white loses it.

611.3c Continuous effects that modify characteristics of permanents do so simultaneously with the permanent entering the battlefield. They don’t wait until the permanent is on the battlefield and then change it. Because such effects apply as the permanent enters the battlefield, they are applied before determining whether the permanent will cause an ability to trigger when it enters the battlefield.
Example: A permanent with the static ability “All white creatures get +1/+1” is on the battlefield. A creature spell that would normally create a 1/1 white creature instead creates a 2/2 white creature. The creature doesn’t enter the battlefield as 1/1 and then change to 2/2.

612. Text-Changing Effects

612.1. Some continuous effects change an object’s text. This can apply to any words or symbols printed on that object, but generally affects only that object’s rules text (which appears in its text box) and/or the text that appears in its type line. Such an effect is a text-changing effect.

612.2. A text-changing effect changes only those words that are used in the correct way (for example, a Magic color word being used as a color word, a land type word used as a land type, or a creature type word used as a creature type). An effect that changes a color word or a subtype can’t change a card name, even if that name contains a word or a series of letters that is the same as a Magic color word, basic land type, or creature type.

612.2a Most spells and abilities that create creature tokens use creature types to define both the creature types and the names of the tokens. A text-changing effect that affects such a spell or an object with such an ability can change these words because they’re being used as creature types, even though they’re also being used as names.

612.3. Effects that add or remove abilities don’t change the text of the objects they affect, so any abilities that are granted to an object can’t be modified by text-changing effects that affect that object.

612.4. A token’s subtypes and rules text are defined by the spell or ability that created the token. A text-changing effect that affects a token can change these characteristics.

612.5. One card (Volrath’s Shapeshifter) states that an object has the “full text” of another object. This changes not just the text that appears in the object’s text box and type line, but also changes the text that represents its name, mana cost, color indicator, power, and toughness.

612.6. One card (Spy Kit) states that an object has “all names of nonlegendary creature cards.” This changes the text that represents the object’s name. That object has the name of each nonlegendary creature card in the Oracle card reference. (See rule 108.1.)

612.7. One card (Awakening of Vitu-Ghazi) creates a continuous effect that sets the name of an object. This changes the text that represents the object’s name. That object loses any names it had and has only the specified name.

612.8. A splice ability changes a spell’s text by adding the rules text of the card with splice to the spell, following that spell’s own rules text. It doesn’t modify or replace any of that spell’s own text. (See rule 702.47, “Splice.”) 

613. Interaction of Continuous Effects

613.1. The values of an object’s characteristics are determined by starting with the actual object. For a card, that means the values of the characteristics printed on that card. For a token or a copy of a spell or card, that means the values of the characteristics defined by the effect that created it. Then all applicable continuous effects are applied in a series of layers in the following order:

613.1a Layer 1: Rules and effects that modify copiable values are applied.

613.1b Layer 2: Control-changing effects are applied.

613.1c Layer 3: Text-changing effects are applied. See rule 612, “Text-Changing Effects.”

613.1d Layer 4: Type-changing effects are applied. These include effects that change an object’s card type, subtype, and/or supertype.

613.1e Layer 5: Color-changing effects are applied.

613.1f Layer 6: Ability-adding effects, keyword counters, ability-removing effects, and effects that say an object can’t have an ability are applied.

613.1g Layer 7: Power- and/or toughness-changing effects are applied.

613.2. Within layer 1, apply effects in a series of sublayers in the order described below. Within each sublayer, apply effects in timestamp order (see rule 613.7). Note that dependency may alter the order in which effects are applied within a sublayer. (See rule 613.8.)

613.2a Layer 1a: Copiable effects are applied. This includes copy effects (see rule 706, “Copying Objects”) and changes to an object’s base characteristics determined by merging an object with a permanent (see rule 721, “Merging with Permanents”). “As . . . enters the battlefield” and “as . . . is turned face up” abilities generate copiable effects if they set power and toughness, even if they also define other characteristics. 

613.2b Layer 1b: Face-down spells and permanents have their characteristics modified as defined in rule 707.2.

613.2c After all rules and effects in layer 1 have been applied, the object’s characteristics are its copiable values. (See rule 706.2.)

613.3. Within layers 2–6, apply effects from characteristic-defining abilities first (see rule 604.3), then all other effects in timestamp order (see rule 613.7). Note that dependency may alter the order in which effects are applied within a layer. (See rule 613.8.)

613.4. Within layer 7, apply effects in a series of sublayers in the order described below. Within each sublayer, apply effects in timestamp order. (See rule 613.7.) Note that dependency may alter the order in which effects are applied within a sublayer. (See rule 613.8.)

613.4a Layer 7a: Effects from characteristic-defining abilities that define power and/or toughness are applied. See rule 604.3.

613.4b Layer 7b: Effects that set power and/or toughness to a specific number or value are applied. Effects that refer to the base power and/or toughness of a creature apply in this layer.

613.4c Layer 7c: Effects and counters that modify power and/or toughness (but don’t set power and/or toughness to a specific number or value) are applied.

613.4d Layer 7d: Effects that switch a creature’s power and toughness are applied. Such effects take the value of power and apply it to the creature’s toughness, and take the value of toughness and apply it to the creature’s power.
Example: A 1/3 creature is given +0/+1 by an effect. Then another effect switches the creature’s power and toughness. Its new power and toughness is 4/1. A new effect gives the creature +5/+0. Its “unswitched” power and toughness would be 6/4, so its actual power and toughness is 4/6.
Example: A 1/3 creature is given +0/+1 by an effect. Then another effect switches the creature’s power and toughness. Its new power and toughness is 4/1. If the +0/+1 effect ends before the switch effect ends, the creature becomes 3/1.
Example: A 1/3 creature is given +0/+1 by an effect. Then another effect switches the creature’s power and toughness. Then another effect switches its power and toughness again. The two switches essentially cancel each other, and the creature becomes 1/4.

613.5. The application of continuous effects as described by the layer system is continually and automatically performed by the game. All resulting changes to an object’s characteristics are instantaneous.
Example: Honor of the Pure is an enchantment that reads “White creatures you control get +1/+1.” Honor of the Pure and a 2/2 black creature are on the battlefield under your control. If an effect then turns the creature white (layer 5), it gets +1/+1 from Honor of the Pure (layer 7c), becoming 3/3. If the creature’s color is later changed to red (layer 5), Honor of the Pure’s effect stops applying to it, and it will return to being 2/2.
Example: Gray Ogre, a 2/2 creature, is on the battlefield. An effect puts a +1/+1 counter on it (layer 7d), making it 3/3. A spell targeting it that says “Target creature gets +4/+4 until end of turn” resolves (layer 7c), making it 7/7. An enchantment that says “Creatures you control get +0/+2” enters the battlefield (layer 7c), making it 7/9. An effect that says “Target creature becomes 0/1 until end of turn” is applied to it (layer 7b), making it 5/8 (0/1, with +4/+4 from the resolved spell, +0/+2 from the enchantment, and +1/+1 from the counter).

613.6. If an effect should be applied in different layers and/or sublayers, the parts of the effect each apply in their appropriate ones. If an effect starts to apply in one layer and/or sublayer, it will continue to be applied to the same set of objects in each other applicable layer and/or sublayer, even if the ability generating the effect is removed during this process.
Example: An effect that reads “Wild Mongrel gets +1/+1 and becomes the color of your choice until end of turn” is both a power- and toughness-changing effect and a color-changing effect. The “becomes the color of your choice” part is applied in layer 5, and then the “gets +1/+1” part is applied in layer 7c.
Example: Act of Treason has an effect that reads “Gain control of target creature until end of turn. Untap that creature. It gains haste until end of turn.” This is both a control-changing effect and an effect that adds an ability to an object. The “gain control” part is applied in layer 2, and then the “it gains haste” part is applied in layer 6.
Example: An effect that reads “All noncreature artifacts become 2/2 artifact creatures until end of turn” is both a type-changing effect and a power- and toughness-setting effect. The type-changing effect is applied to all noncreature artifacts in layer 4 and the power- and toughness-setting effect is applied to those same permanents in layer 7b, even though those permanents aren’t noncreature artifacts by then.
Example: Svogthos, the Restless Tomb, is on the battlefield. An effect that says “Until end of turn, target land becomes a 3/3 creature that’s still a land” is applied to it (layers 4 and 7b). An effect that says “Target creature gets +1/+1 until end of turn” is applied to it (layer 7c), making it a 4/4 land creature. Then while you have ten creature cards in your graveyard, you activate Svogthos’s ability: “Until end of turn, Svogthos, the Restless Tomb becomes a black and green Plant Zombie creature with ‘This creature’s power and toughness are each equal to the number of creature cards in your graveyard.’ It’s still a land.” (layers 4, 5, and 7b). It becomes an 11/11 land creature. If a creature card enters or leaves your graveyard, Svogthos’s power and toughness will be modified accordingly. If the first effect is applied to it again, it will become a 4/4 land creature again.

613.7. Within a layer or sublayer, determining which order effects are applied in is usually done using a timestamp system. An effect with an earlier timestamp is applied before an effect with a later timestamp.

613.7a A continuous effect generated by a static ability has the same timestamp as the object the static ability is on, or the timestamp of the effect that created the ability, whichever is later. If the effect that created the ability has the later timestamp and the object the ability is on receives a new timestamp, each continuous effect generated by static abilities of that object receives a new timestamp as well, but the relative order of those timestamps remains the same.
Example: Rune of Flight is an Aura that grants enchanted Equipment “Equipped creature has flying.” A player attaches Rune of Flight to Colossus Hammer, an Equipment with “Equipped creature gets +10/+10 and loses flying.” The ability granted by Rune of Flight shares Rune of Flight’s timestamp because it is later than Colossus Hammer’s timestamp. If Colossus Hammer becomes attached to a creature, both of its abilities receive new timestamps (see rule 613.7e), but the relative order of those timestamps remains the same.

613.7b A continuous effect generated by the resolution of a spell or ability receives a timestamp at the time it’s created.

613.7c Each counter receives a timestamp as it’s put on an object or player. If that object or player already has a counter of that kind on it, each counter of that kind receives a new timestamp identical to that of the new counter.

613.7d An object receives a timestamp at the time it enters a zone.

613.7e An Aura, Equipment, or Fortification receives a new timestamp each time it becomes attached to an object or player.

613.7f A permanent receives a new timestamp each time it turns face up or face down.

613.7g A transforming double-faced permanent receives a new timestamp each time it transforms.

613.7h A face-up plane card, phenomenon card, or scheme card receives a timestamp at the time it’s turned face up.

613.7i A face-up vanguard card receives a timestamp at the beginning of the game.

613.7j A conspiracy card receives a timestamp at the beginning of the game. If it’s face down, it receives a new timestamp at the time it turns face up.

613.7k If two or more objects would receive a timestamp simultaneously, such as by entering a zone simultaneously or becoming attached simultaneously, their relative timestamps are determined in APNAP order (see rule 101.4). Objects controlled by the active player (or owned by the active player, if they have no controller) have an earlier relative timestamp in the order of that player’s choice, followed by each other player in turn order.

613.8. Within a layer or sublayer, determining which order effects are applied in is sometimes done using a dependency system. If a dependency exists, it will override the timestamp system.

613.8a An effect is said to “depend on” another if (a) it’s applied in the same layer (and, if applicable, sublayer) as the other effect; (b) applying the other would change the text or the existence of the first effect, what it applies to, or what it does to any of the things it applies to; and (c) neither effect is from a characteristic-defining ability or both effects are from characteristic-defining abilities. Otherwise, the effect is considered to be independent of the other effect.

613.8b An effect dependent on one or more other effects waits to apply until just after all of those effects have been applied. If multiple dependent effects would apply simultaneously in this way, they’re applied in timestamp order relative to each other. If several dependent effects form a dependency loop, then this rule is ignored and the effects in the dependency loop are applied in timestamp order.

613.8c After each effect is applied, the order of remaining effects is reevaluated and may change if an effect that has not yet been applied becomes dependent on or independent of one or more other effects that have not yet been applied.

613.9. One continuous effect can override another. Sometimes the results of one effect determine whether another effect applies or what another effect does.
Example: Two effects are affecting the same creature: one from an Aura that says “Enchanted creature has flying” and one from an Aura that says “Enchanted creature loses flying.” Neither of these depends on the other, since nothing changes what they affect or what they’re doing to it. Applying them in timestamp order means the one that was generated last “wins.” The same process would be followed, and the same result reached, if either of the effects had a duration (such as “Target creature loses flying until end of turn”) or came from a non-Aura source (such as “All creatures lose flying”).
Example: One effect reads, “White creatures get +1/+1,” and another reads, “Enchanted creature is white.” The enchanted creature gets +1/+1 from the first effect, regardless of its previous color.

613.10. Some continuous effects affect players rather than objects. For example, an effect might give a player protection from red. All such effects are applied in timestamp order after the determination of objects’ characteristics. See also the rules for timestamp order and dependency (rules 613.7 and 613.8).

613.11. Some continuous effects affect game rules rather than objects. For example, effects may modify a player’s maximum hand size, or say that a creature must attack this turn if able. These effects are applied after all other continuous effects have been applied. Continuous effects that affect the costs of spells or abilities are applied according to the order specified in rule 601.2f. All other such effects are applied in timestamp order. See also the rules for timestamp order and dependency (rules 613.7 and 613.8).

614. Replacement Effects

614.1. Some continuous effects are replacement effects. Like prevention effects (see rule 615), replacement effects apply continuously as events happen—they aren’t locked in ahead of time. Such effects watch for a particular event that would happen and completely or partially replace that event with a different event. They act like “shields” around whatever they’re affecting.

614.1a Effects that use the word “instead” are replacement effects. Most replacement effects use the word “instead” to indicate what events will be replaced with other events.

614.1b Effects that use the word “skip” are replacement effects. These replacement effects use the word “skip” to indicate what events, steps, phases, or turns will be replaced with nothing.

614.1c Effects that read “[This permanent] enters the battlefield with . . . ,” “As [this permanent] enters the battlefield . . . ,” or “[This permanent] enters the battlefield as . . . “ are replacement effects.

614.1d Continuous effects that read “[This permanent] enters the battlefield . . .” or “[Objects] enter the battlefield . . .” are replacement effects.

614.1e Effects that read “As [this permanent] is turned face up . . . ,” are replacement effects.

614.2. Some replacement effects apply to damage from a source. See rule 609.7.

614.3. There are no special restrictions on casting a spell or activating an ability that generates a replacement effect. Such effects last until they’re used up or their duration has expired.

614.4. Replacement effects must exist before the appropriate event occurs—they can’t “go back in time” and change something that’s already happened. Spells or abilities that generate these effects are often cast or activated in response to whatever would produce the event and thus resolve before that event would occur.
Example: A player can activate an ability to regenerate a creature in response to a spell that would destroy it. Once the spell resolves, though, it’s too late to regenerate the creature.

614.5. A replacement effect doesn’t invoke itself repeatedly; it gets only one opportunity to affect an event or any modified events that may replace that event.
Example: A player controls two permanents, each with an ability that reads “If a creature you control would deal damage to a permanent or player, it deals double that damage to that permanent or player instead.” A creature that normally deals 2 damage will deal 8 damage—not just 4, and not an infinite amount.

614.6. If an event is replaced, it never happens. A modified event occurs instead, which may in turn trigger abilities. Note that the modified event may contain instructions that can’t be carried out, in which case the impossible instruction is simply ignored.

614.7. If a replacement effect would replace an event, but that event never happens, the replacement effect simply doesn’t do anything.

614.7a If a source would deal 0 damage, it does not deal damage at all. Replacement effects that would increase the damage dealt by that source, or would have that source deal that damage to a different object or player, have no event to replace, so they have no effect.

614.8. Regeneration is a destruction-replacement effect. The word “instead” doesn’t appear on the card but is implicit in the definition of regeneration. “Regenerate [permanent]” means “The next time [permanent] would be destroyed this turn, instead remove all damage marked on it and tap it. If it’s an attacking or blocking creature, remove it from combat.” Abilities that trigger from damage being dealt still trigger even if the permanent regenerates. See rule 701.15.

614.9. Some effects replace damage dealt to one creature, planeswalker, or player with the same damage dealt to another creature, planeswalker, or player; such effects are called redirection effects. If either creature or planeswalker is no longer on the battlefield when the damage would be redirected, or is no longer a creature or planeswalker when the damage would be redirected, the effect does nothing. If damage would be redirected to or from a player who has left the game, the effect does nothing.

614.10. An effect that causes a player to skip an event, step, phase, or turn is a replacement effect. “Skip [something]” is the same as “Instead of doing [something], do nothing.” Once a step, phase, or turn has started, it can no longer be skipped—any skip effects will wait until the next occurrence.

614.10a Anything scheduled for a skipped step, phase, or turn won’t happen. Anything scheduled for the “next” occurrence of something waits for the first occurrence that isn’t skipped. If two effects each cause a player to skip their next occurrence, that player must skip the next two; one effect will be satisfied in skipping the first occurrence, while the other will remain until another occurrence can be skipped.

614.10b Some effects cause a player to skip a step, phase, or turn, then take another action. That action is considered to be the first thing that happens during the next step, phase, or turn to actually occur.

614.11. Some effects replace card draws. These effects are applied even if no cards could be drawn because there are no cards in the affected player’s library.

614.11a If an effect replaces a draw within a sequence of card draws, all actions required by the replacement are completed, if possible, before resuming the sequence.

614.11b If an effect would have a player both draw a card and perform an additional action on that card, and the draw is replaced, the additional action is not performed on any cards that are drawn as a result of that replacement effect.

614.12. Some replacement effects modify how a permanent enters the battlefield. (See rules 614.1c–d.) Such effects may come from the permanent itself if they affect only that permanent (as opposed to a general subset of permanents that includes it). They may also come from other sources. To determine which replacement effects apply and how they apply, check the characteristics of the permanent as it would exist on the battlefield, taking into account replacement effects that have already modified how it enters the battlefield (see rule 616.1), continuous effects from the permanent’s own static abilities that would apply to it once it’s on the battlefield, and continuous effects that already exist and would apply to the permanent.
Example: Voice of All says “As Voice of All enters the battlefield, choose a color” and “Voice of All has protection from the chosen color.” An effect creates a token that’s a copy of Voice of All. As that token is created, the token’s controller chooses a color for it.
Example: Yixlid Jailer says “Cards in graveyards lose all abilities.” Scarwood Treefolk says “Scarwood Treefolk enters the battlefield tapped.” A Scarwood Treefolk that’s put onto the battlefield from a graveyard enters the battlefield tapped.
Example: Orb of Dreams is an artifact that says “Permanents enter the battlefield tapped.” It won’t affect itself, so Orb of Dreams enters the battlefield untapped.

614.12a If a replacement effect that modifies how a permanent enters the battlefield requires a choice, that choice is made before the permanent enters the battlefield.

614.12b Some replacement effects cause a permanent to enter the battlefield with its controller’s choice of one of two abilities, each marked with an anchor word and preceded by a bullet point. “[Anchor word] — [ability]” means “As long as [anchor word] was chosen as this permanent entered the battlefield, this permanent has [ability].” The abilities preceded by anchor words are each linked to the ability that causes a player to choose between them. See rule 607, “Linked Abilities.”

614.13. An effect that modifies how a permanent enters the battlefield may cause other objects to change zones.

614.13a While applying an effect that modifies how a permanent enters the battlefield, you may have to choose a number of objects that will also change zones. You can’t choose the object that will become that permanent or any other object entering the battlefield at the same time as that object.
Example: Sutured Ghoul says, in part, “As Sutured Ghoul enters the battlefield, exile any number of creature cards from your graveyard.” If Sutured Ghoul and Runeclaw Bear enter the battlefield from your graveyard at the same time, you can’t choose to exile either of them when applying Sutured Ghoul’s replacement effect.

614.13b The same object can’t be chosen to change zones more than once when applying replacement effects that modify how a single permanent enters the battlefield.
Example: Jund (a plane card) says, “Whenever a player casts a black, red, or green creature spell, it gains devour 5.” A player controls Runeclaw Bear and casts Thunder-Thrash Elder, a red creature spell with devour 3. As Thunder-Thrash Elder enters the battlefield, its controller can choose to sacrifice Runeclaw Bear when applying the devour 3 effect or when applying the devour 5 effect, but not both. Thunder-Thrash Elder will enter the battlefield with zero, three, or five +1/+1 counters, depending on this choice.

614.14. An object may have one ability printed on it that generates a replacement effect which causes one or more cards to be exiled, and another ability that refers either to “the exiled cards” or to cards “exiled with [this object].” These abilities are linked: the second refers only to cards in the exile zone that were put there as a direct result of the replacement event caused by the first. If another object gains a pair of linked abilities, the abilities will be similarly linked on that object. They can’t be linked to any other ability, regardless of what other abilities the object may currently have or may have had in the past. See rule 607, “Linked Abilities.”

614.15. Some replacement effects are not continuous effects. Rather, they are an effect of a resolving spell or ability that replace part or all of that spell or ability’s own effect(s). Such effects are called self-replacement effects. The text creating a self-replacement effect is usually part of the ability whose effect is being replaced, but the text can be a separate ability, particularly when preceded by an ability word. When applying replacement effects to an event, self-replacement effects are applied before other replacement effects.

614.16. Some replacement effects apply “if an effect would create one or more tokens” or “if an effect would put one or more counters on a permanent.” These replacement effects apply if the effect of a resolving spell or ability creates a token or puts a counter on a permanent, and they also apply if another replacement or prevention effect does so, even if the original event being modified wasn’t itself an effect. 

614.17. Some effects state that something can’t happen. These effects aren’t replacement effects, but follow similar rules.

614.17a “Can’t” effects must exist before the appropriate event occurs—they can’t “go back in time” and change something that’s already happened.

614.17b If an event can’t happen, a player can’t choose to pay a cost that includes that event.

614.17c If an event can’t happen, it can only be replaced by a self-replacement effect (see rule 614.15). Other replacement and/or prevention effects can’t modify or replace it.

614.17d Some “can’t” effects modify how a permanent enters the battlefield or whether it can enter the battlefield. Such effects may come from the permanent itself if they affect only that permanent (as opposed to a general subset of permanents that includes it). They may also come from other sources. To determine which “can’t” effects apply, check the characteristics of the permanent as it would exist on the battlefield, taking into account replacement effects that have already modified how it enters the battlefield (see rule 616.1), continuous effects from the permanent’s own static abilities that would apply to it once it’s on the battlefield, and continuous effects that already exist and would apply to the permanent.

615. Prevention Effects

615.1. Some continuous effects are prevention effects. Like replacement effects (see rule 614), prevention effects apply continuously as events happen—they aren’t locked in ahead of time. Such effects watch for a damage event that would happen and completely or partially prevent the damage that would be dealt. They act like “shields” around whatever they’re affecting.

615.1a Effects that use the word “prevent” are prevention effects. Prevention effects use “prevent” to indicate what damage will not be dealt.

615.2. Many prevention effects apply to damage from a source. See rule 609.7.

615.3. There are no special restrictions on casting a spell or activating an ability that generates a prevention effect. Such effects last until they’re used up or their duration has expired.

615.4. Prevention effects must exist before the appropriate damage event occurs—they can’t “go back in time” and change something that’s already happened. Spells or abilities that generate these effects are often cast or activated in response to whatever would produce the event and thus resolve before that event would occur.
Example: A player can activate an ability that prevents damage in response to a spell that would deal damage. Once the spell resolves, though, it’s too late to prevent the damage.

615.5. Some prevention effects also include an additional effect, which may refer to the amount of damage that was prevented. The prevention takes place at the time the original event would have happened; the rest of the effect takes place immediately afterward.

615.6. If damage that would be dealt is prevented, it never happens. A modified event may occur instead, which may in turn trigger abilities. Note that the modified event may contain instructions that can’t be carried out, in which case the impossible instruction is simply ignored.

615.7. Some prevention effects generated by the resolution of a spell or ability refer to a specific amount of damage—for example, “Prevent the next 3 damage that would be dealt to any target this turn.” These work like shields. Each 1 damage that would be dealt to the “shielded” permanent or player is prevented. Preventing 1 damage reduces the remaining shield by 1. If damage would be dealt to the shielded permanent or player by two or more applicable sources at the same time, the player or the controller of the permanent chooses which damage the shield prevents. Once the shield has been reduced to 0, any remaining damage is dealt normally. Such effects count only the amount of damage; the number of events or sources dealing it doesn’t matter.

615.8. Some prevention effects generated by the resolution of a spell or ability refer to the next time a specific source would deal damage. These effects prevent the next instance of damage from that source, regardless of how much damage that is. Once an instance of damage from that source has been prevented, any subsequent instances of damage that would be dealt by that source are dealt normally.

615.9. Some effects generated by the resolution of a spell or ability prevent damage from a source of a player’s choice with certain properties. When the source would deal damage, the shield rechecks the source’s properties. If the properties no longer match, the damage isn’t prevented or replaced and the shield isn’t used up. See rule 609.7b.

615.10. Some prevention effects generated by static abilities refer to a specific amount of damage—for example, “If a source would deal damage to you, prevent 1 of that damage.” Such an effect prevents only the indicated amount of damage in any applicable damage event at any given time. It will apply separately to damage from other applicable events that would happen at the same time, or at a different time.
Example: Daunting Defender says “If a source would deal damage to a Cleric creature you control, prevent 1 of that damage.” Pyroclasm says “Pyroclasm deals 2 damage to each creature.” Pyroclasm will deal 1 damage to each Cleric creature controlled by Daunting Defender’s controller. It will deal 2 damage to each other creature.

615.11. Some prevention effects prevent the next N damage that would be dealt to each of a number of untargeted creatures. Such an effect creates a prevention shield for each applicable creature when the spell or ability that generates that effect resolves.
Example: Wojek Apothecary has an ability that says “{T}: Prevent the next 1 damage that would be dealt to target creature and each other creature that shares a color with it this turn.” When the ability resolves, it gives the target creature and each other creature on the battlefield that shares a color with it at that time a shield preventing the next 1 damage that would be dealt to it. Changing creatures’ colors after the ability resolves doesn’t add or remove shields, and creatures that enter the battlefield later in the turn don’t get the shield.

615.12. Some effects state that damage “can’t be prevented.” If unpreventable damage would be dealt, any applicable prevention effects are still applied to it. Those effects won’t prevent any damage, but any additional effects they have will take place. Existing damage prevention shields won’t be reduced by damage that can’t be prevented.

615.12a A prevention effect is applied to any particular unpreventable damage event just once. It won’t invoke itself repeatedly trying to prevent that damage.

615.13. Some triggered abilities trigger when damage that would be dealt is prevented. Such an ability triggers each time a prevention effect is applied to one or more simultaneous damage events and prevents some or all of that damage.

616. Interaction of Replacement and/or Prevention Effects

616.1. If two or more replacement and/or prevention effects are attempting to modify the way an event affects an object or player, the affected object’s controller (or its owner if it has no controller) or the affected player chooses one to apply, following the steps listed below. If two or more players have to make these choices at the same time, choices are made in APNAP order (see rule 101.4).

616.1a If any of the replacement and/or prevention effects are self-replacement effects (see rule 614.15), one of them must be chosen. If not, proceed to rule 616.1b.

616.1b If any of the replacement and/or prevention effects would modify under whose control an object would enter the battlefield, one of them must be chosen. If not, proceed to rule 616.1c.

616.1c If any of the replacement and/or prevention effects would cause an object to become a copy of another object as it enters the battlefield, one of them must be chosen. If not, proceed to rule 616.1d.

616.1d Any of the applicable replacement and/or prevention effects may be chosen.

616.1e Once the chosen effect has been applied, this process is repeated (taking into account only replacement or prevention effects that would now be applicable) until there are no more left to apply.
Example: Two permanents are on the battlefield. One is an enchantment that reads “If a card would be put into a graveyard from anywhere, instead exile it,” and the other is a creature that reads “If [this creature] would die, instead shuffle it into its owner’s library.” If the creature is destroyed, its controller decides which replacement to apply first; the other does nothing.
Example: Essence of the Wild reads “Creatures you control enter the battlefield as a copy of Essence of the Wild.” A player who controls Essence of the Wild casts Rusted Sentinel, which normally enters the battlefield tapped. As it enters the battlefield, the copy effect from Essence of the Wild is applied first. As a result, it no longer has the ability that causes it to enter the battlefield tapped. Rusted Sentinel will enter the battlefield as an untapped copy of Essence of the Wild.

616.1f While following the steps in 616.1a–d, one replacement or prevention effect may apply to an event, and another may apply to an event contained within the first event. In this case, the second effect can’t be chosen until after the first effect has been chosen.
Example: A player is instructed to create a token that’s a copy of Voice of All, which has the ability “As Voice of All enters the battlefield, choose a color.” Doubling Season has an ability that reads “If an effect would create one or more tokens under your control, it creates twice that many of those tokens instead.” Because entering the battlefield is an event contained within the event of creating a token, the effect of Doubling Season must be applied first, and then the effects of the two Voice of All tokens may be applied in either order.

616.2. A replacement or prevention effect can become applicable to an event as the result of another replacement or prevention effect that modifies the event.
Example: One effect reads “If you would gain life, draw that many cards instead,” and another reads “If you would draw a card, return a card from your graveyard to your hand instead.” Both effects combine (regardless of the order they came into existence): Instead of gaining 1 life, the player puts a card from their graveyard into their hand.


7. Additional Rules

700. General

700.1. Anything that happens in a game is an event. Multiple events may take place during the resolution of a spell or ability. The text of triggered abilities and replacement effects defines the event they’re looking for. One “happening” may be treated as a single event by one ability and as multiple events by another.
Example: If an attacking creature is blocked by two creatures, this is one event for a triggered ability that reads “Whenever [this creature] becomes blocked” but two events for a triggered ability that reads “Whenever [this creature] becomes blocked by a creature.”

700.2. A spell or ability is modal if it has two or more options in a bulleted list preceded by instructions for a player to choose a number of those options, such as “Choose one —.” Each of those options is a mode. Modal cards printed prior to the Khans of Tarkir® set didn’t use bulleted lists for the modes; these cards have received errata in the Oracle card reference so the modes do appear in a bulleted list.

700.2a The controller of a modal spell or activated ability chooses the mode(s) as part of casting that spell or activating that ability. If one of the modes would be illegal (due to an inability to choose legal targets, for example), that mode can’t be chosen. (See rule 601.2b.)

700.2b The controller of a modal triggered ability chooses the mode(s) as part of putting that ability on the stack. If one of the modes would be illegal (due to an inability to choose legal targets, for example), that mode can’t be chosen. If no mode is chosen, the ability is removed from the stack. (See rule 603.3c.)

700.2c If a spell or ability targets one or more targets only if a particular mode is chosen for it, its controller will need to choose those targets only if they chose that mode. Otherwise, the spell or ability is treated as though it did not have those targets. (See rule 601.2c.)

700.2d If a player is allowed to choose more than one mode for a modal spell or ability, that player normally can’t choose the same mode more than once. However, a few modal spells include the instruction “You may choose the same mode more than once.” If a particular mode is chosen multiple times, the spell is treated as if that mode appeared that many times in sequence. If that mode requires a target, the same player or object may be chosen as the target for each of those modes, or different targets may be chosen.

700.2e Some spells and abilities specify that a player other than their controller chooses a mode for it. In that case, the other player does so when the spell or ability’s controller normally would do so. If there is more than one other player who could make such a choice, the spell or ability’s controller decides which of those players will make the choice.

700.2f Modal spells and abilities may have different targeting requirements for each mode. Changing a spell or ability’s target can’t change its mode.

700.2g A copy of a modal spell or ability copies the mode(s) chosen for it. The controller of the copy can’t choose a different mode. (See rule 706.10.)

700.3. Some effects cause objects to be temporarily grouped into piles.

700.3a Each of the affected objects must be put into exactly one of those piles, unless the effect specifies otherwise.

700.3b Each object in a pile is still an individual object. The pile is not an object.

700.3c Objects grouped into piles don’t leave the zone they’re currently in. If cards in a graveyard are split into piles, the order of the graveyard must be maintained.
Example: Fact or Fiction reads, “Reveal the top five cards of your library. An opponent separates those cards into two piles. Put one pile into your hand and the other into your graveyard.” While an opponent is separating the revealed cards into piles, they’re still in their owner’s library. They don’t leave the library until they’re put into their owner’s hand or graveyard.

700.3d A pile can contain zero or more objects.

700.4. The term dies means “is put into a graveyard from the battlefield.”

700.5. A player’s devotion to [color] is equal to the number of mana symbols of that color among the mana costs of permanents that player controls. A player’s devotion to [color 1] and [color 2] is equal to the number of mana symbols among the mana costs of permanents that player controls that are [color 1], [color 2], or both colors.

700.6. The term historic refers to an object that has the legendary supertype, the artifact card type, or the Saga subtype.

700.7. If an ability of an object uses a phrase such as “this [something]” to identify an object, where [something] is a characteristic, it is referring to that particular object, even if it isn’t the appropriate characteristic at the time.
Example: An ability reads “Target creature gets +2/+2 until end of turn. Destroy that creature at the beginning of the next end step.” The ability will destroy the object it gave +2/+2 to even if that object isn’t a creature at the beginning of the next end step.

700.8. Some cards refer to the number of creatures in a player’s party. A player’s party consists of up to one creature that player controls for each of the following four creature types: Cleric, Rogue, Warrior, and Wizard.

700.8a The calculation of the number of creatures in a player’s party is performed automatically by the game and results in a number between zero and four. Players don’t declare which specific creatures they control are in their party.

700.8b If a creature has multiple creature types for which it could be the party member, it is counted as the party member for only one of those types. If there are different ways to count such a creature that results in different numbers of creatures in a player’s party, it is counted in such a way to get the highest result.

700.8c A player has a full party if there are four creatures in that player’s party.

701. Keyword Actions

701.1. Most actions described in a card’s rules text use the standard English definitions of the verbs within, but some specialized verbs are used whose meanings may not be clear. These “keywords” are game terms; sometimes reminder text summarizes their meanings.

701.2. Activate

701.2a To activate an activated ability is to put it onto the stack and pay its costs, so that it will eventually resolve and have its effect. Only an object’s controller (or its owner, if it doesn’t have a controller) can activate its activated ability unless the object specifically says otherwise. A player may activate an ability if they have priority. See rule 602, “Activating Activated Abilities.”

701.3. Attach

701.3a To attach an Aura, Equipment, or Fortification to an object or player means to take it from where it currently is and put it onto that object or player. If something is attached to a permanent on the battlefield, it’s customary to place it so that it’s physically touching the permanent. An Aura, Equipment, or Fortification can’t be attached to an object or player it couldn’t enchant, equip, or fortify, respectively.

701.3b If an effect tries to attach an Aura, Equipment, or Fortification to an object or player it can’t be attached to, the Aura, Equipment, or Fortification doesn’t move. If an effect tries to attach an Aura, Equipment, or Fortification to the object or player it’s already attached to, the effect does nothing. If an effect tries to attach an object that isn’t an Aura, Equipment, or Fortification to another object or player, the effect does nothing and the first object doesn’t move.

701.3c Attaching an Aura, Equipment, or Fortification on the battlefield to a different object or player causes the Aura, Equipment, or Fortification to receive a new timestamp.

701.3d To “unattach” an Equipment from a creature means to move it away from that creature so the Equipment is on the battlefield but is not equipping anything. It should no longer be physically touching any creature. If an Aura, Equipment, or Fortification that was attached to an object or player ceases to be attached to it, that counts as “becoming unattached [from that object or player]”; this includes if that Aura, Equipment, or Fortification leaves the battlefield, the object leaves the zone it was in, or that player leaves the game.

701.4. Cast

701.4a To cast a spell is to take it from the zone it’s in (usually the hand), put it on the stack, and pay its costs, so that it will eventually resolve and have its effect. A player may cast a spell if they have priority. See rule 601, “Casting Spells.”

701.4b To cast a card is to cast it as a spell.

701.5. Counter

701.5a To counter a spell or ability means to cancel it, removing it from the stack. It doesn’t resolve and none of its effects occur. A countered spell is put into its owner’s graveyard.

701.5b The player who cast a countered spell or activated a countered ability doesn’t get a “refund” of any costs that were paid.

701.6. Create

701.6a To create one or more tokens with certain characteristics, put the specified number of tokens with the specified characteristics onto the battlefield.

701.6b If a replacement effect applies to a token being created, that effect applies before considering any continuous effects that will modify the characteristics of that token. If a replacement effect applies to a token entering the battlefield, that effect applies after considering any continuous effects that will modify the characteristics of that token.

701.6c Previously, an effect that created tokens instructed a player to “put [those tokens] onto the battlefield.” Cards that were printed with that text have received errata in the Oracle card reference so they now “create” those tokens.

701.7. Destroy
 
701.7a To destroy a permanent, move it from the battlefield to its owner’s graveyard.

701.7b The only ways a permanent can be destroyed are as a result of an effect that uses the word “destroy” or as a result of the state-based actions that check for lethal damage (see rule 704.5g) or damage from a source with deathtouch (see rule 704.5h). If a permanent is put into its owner’s graveyard for any other reason, it hasn’t been “destroyed.”

701.7c A regeneration effect replaces a destruction event. See rule 701.15, “Regenerate.”

701.8. Discard

701.8a To discard a card, move it from its owner’s hand to that player’s graveyard.

701.8b By default, effects that cause a player to discard a card allow the affected player to choose which card to discard. Some effects, however, require a random discard or allow another player to choose which card is discarded.

701.8c If a card is discarded, but an effect causes it to be put into a hidden zone instead of into its owner’s graveyard without being revealed, all values of that card’s characteristics are considered to be undefined. If a card is discarded this way to pay a cost that specifies a characteristic about the discarded card, that cost payment is illegal; the game returns to the moment before the cost was paid (see rule 723, “Handling Illegal Actions”).

701.9. Double

701.9a Doubling a creature’s power and/or toughness creates a continuous effect. This effect modifies that creature’s power and/or toughness but doesn’t set those characteristics to a specific value. See rule 613.4c.

701.9b To double a creature’s power, that creature gets +X/+0, where X is that creature’s power as the spell or ability that doubles its power resolves. Similarly, an effect that doubles a creature’s toughness gives it +0/+X, where X is that creature’s toughness. Doubling a creature’s power and toughness gives it +X/+Y, where X is its power and Y is its toughness.

701.9c If a creature’s power is less than 0 when it’s doubled, doubling that creature’s power instead means that the creature gets -X/-0, where X is the difference between 0 and its power. Similarly, if its toughness is less than 0 when doubled, it gets -0/-X. If one characteristic’s value is negative but the other isn’t when both are doubled, it gets -X/+Y or +X/-Y, as appropriate.

701.9d To double a player’s life total, the player gains or loses an amount of life such that their new life total is twice its current value.

701.9e To double the number of a kind of counters on a player or permanent, give that player or permanent as many of those counters as that player or permanent already has.

701.9f To double the amount of a type of mana in a player’s mana pool, that player adds an amount of mana of that type equal to the amount they already have.

701.10. Exchange

701.10a A spell or ability may instruct players to exchange something (for example, life totals or control of two permanents) as part of its resolution. When such a spell or ability resolves, if the entire exchange can’t be completed, no part of the exchange occurs.
Example: If a spell attempts to exchange control of two target creatures but one of those creatures is destroyed before the spell resolves, the spell does nothing to the other creature.

701.10b When control of two permanents is exchanged, if those permanents are controlled by different players, each of those players simultaneously gains control of the permanent that was controlled by the other player. If, on the other hand, those permanents are controlled by the same player, the exchange effect does nothing.

701.10c When life totals are exchanged, each player gains or loses the amount of life necessary to equal the other player’s previous life total. Replacement effects may modify these gains and losses, and triggered abilities may trigger on them. A player who can’t gain life can’t be given a higher life total this way, and a player who can’t lose life can’t be given a lower life total this way (see rules 119.7–8).

701.10d Some spells or abilities may instruct a player to exchange cards in one zone with cards in a different zone (for example, exiled cards and cards in a player’s hand). These spells and abilities work the same as other “exchange” spells and abilities, except they can exchange the cards only if all the cards are owned by the same player, and they can exchange the cards even if one zone is empty.

701.10e If a card in one zone is exchanged with a card in a different zone, and either of them is attached to an object, that card stops being attached to that object and the other card becomes attached to that object.

701.10f If a spell or ability instructs a player to simply exchange two zones, and one of the zones is empty, the cards in the zones are still exchanged.

701.10g A spell or ability may instruct a player to exchange two numerical values. In such an exchange, each value becomes equal to the previous value of the other. If either of those values is a life total, the affected player gains or loses the amount of life necessary to equal the other value. Replacement effects may modify this gain or loss, and triggered abilities may trigger on it. A player who can’t gain life can’t be given a higher life total this way, and a player who can’t lose life can’t be given a lower life total this way (see rules 119.7–8). If either of those values is a power or toughness, a continuous effect is created setting that power or toughness to the other value (see rule 613.4b). This rule does not apply to spells and abilities that switch a creature’s power and toughness.

701.11. Exile

701.11a To exile an object, move it to the exile zone from wherever it is. See rule 406, “Exile.”

701.12. Fight

701.12a A spell or ability may instruct a creature to fight another creature or it may instruct two creatures to fight each other. Each of those creatures deals damage equal to its power to the other creature.

701.12b If one or both creatures instructed to fight are no longer on the battlefield or are no longer creatures, neither of them fights or deals damage. If one or both creatures are illegal targets for a resolving spell or ability that instructs them to fight, neither of them fights or deals damage.

701.12c If a creature fights itself, it deals damage to itself equal to twice its power.

701.12d The damage dealt when a creature fights isn’t combat damage.

701.13. Mill

701.13a For a player to mill a number of cards, that player puts that many cards from the top of their library into their graveyard.

701.13b A player can’t mill a number of cards greater than the number of cards in their library. If given the choice to do so, they can’t choose to take that action. If instructed to do so, they mill as many as possible. Similarly, the player can't pay a cost that includes milling a number of cards greater than the number of cards in their library.

701.13c An effect that refers to a milled card can find that card in the zone it moved to from the library, as long as that zone is a public zone.

701.13d If an ability checks information about a single milled card but more than one card was milled, that ability refers to each of the milled cards. If that ability asks for any information about the milled card, such as a characteristic or mana value, it gets multiple answers. If these answers are used to determine the value of a variable, the sum of the answers is used. If that ability performs any actions on “the” card, it performs that action on each milled card. If that ability performs any actions on “a” card, the controller of the ability chooses which card is affected.

701.14. Play

701.14a To play a land means to put it onto the battlefield from the zone it’s in (usually the hand). A player may play a land if they have priority, it’s the main phase of their turn, the stack is empty, and they haven’t played a land this turn. Playing a land is a special action (see rule 116), so it doesn’t use the stack; it simply happens. Putting a land onto the battlefield as the result of a spell or ability isn’t the same as playing a land. See rule 305, “Lands.”

701.14b To play a card means to play that card as a land or to cast that card as a spell, whichever is appropriate.

701.14c Some effects instruct a player to “play” with a certain aspect of the game changed, such as “Play with the top card of your library revealed.” “Play” in this sense means to play the Magic game.

701.14d Previously, the action of casting a spell, or casting a card as a spell, was referred to on cards as “playing” that spell or that card. Cards that were printed with that text have received errata in the Oracle card reference so they now refer to “casting” that spell or that card.

701.14e Previously, the action of using an activated ability was referred to on cards as “playing” that ability. Cards that were printed with that text have received errata in the Oracle card reference so they now refer to “activating” that ability.

701.15. Regenerate

701.15a If the effect of a resolving spell or ability regenerates a permanent, it creates a replacement effect that protects the permanent the next time it would be destroyed this turn. In this case, “Regenerate [permanent]” means “The next time [permanent] would be destroyed this turn, instead remove all damage marked on it and tap it. If it’s an attacking or blocking creature, remove it from combat.”

701.15b If the effect of a static ability regenerates a permanent, it replaces destruction with an alternate effect each time that permanent would be destroyed. In this case, “Regenerate [permanent]” means “Instead remove all damage marked on [permanent] and tap it. If it’s an attacking or blocking creature, remove it from combat.”

701.15c Neither activating an ability that creates a regeneration shield nor casting a spell that creates a regeneration shield is the same as regenerating a permanent. Effects that say that a permanent can’t be regenerated don’t preclude such abilities from being activated or such spells from being cast; rather, they cause regeneration shields to not be applied.

701.16. Reveal

701.16a To reveal a card, show that card to all players for a brief time. If an effect causes a card to be revealed, it remains revealed for as long as necessary to complete the parts of the effect that card is relevant to. If the cost to cast a spell or activate an ability includes revealing a card, the card remains revealed from the time the spell or ability is announced until the time it leaves the stack. If revealing a card causes a triggered ability to trigger, the card remains revealed until that triggered ability leaves the stack. If that ability isn’t put onto the stack the next time a player would receive priority, the card ceases to be revealed.

701.16b Revealing a card doesn’t cause it to leave the zone it’s in.

701.16c If cards in a player’s library are shuffled or otherwise reordered, any revealed cards that are reordered stop being revealed and become new objects.

701.16d Some effects instruct a player to look at one or more cards. Looking at a card follows the same rules as revealing a card, except that the card is shown only to the specified player.

701.17. Sacrifice

701.17a To sacrifice a permanent, its controller moves it from the battlefield directly to its owner’s graveyard. A player can’t sacrifice something that isn’t a permanent, or something that’s a permanent they don’t control. Sacrificing a permanent doesn’t destroy it, so regeneration or other effects that replace destruction can’t affect this action.

701.18. Scry

701.18a To “scry N” means to look at the top N cards of your library, then put any number of them on the bottom of your library in any order and the rest on top of your library in any order.

701.18b If a player is instructed to scry 0, no scry event occurs. Abilities that trigger whenever a player scries won’t trigger.

701.18c If multiple players scry at once, each of those players looks at the top cards of their library at the same time. Those players decide in APNAP order (see rule 101.4) where to put those cards, then those cards move at the same time.

701.19. Search

701.19a To search for a card in a zone, look at all cards in that zone (even if it’s a hidden zone) and find a card that matches the given description.

701.19b If a player is searching a hidden zone for cards with a stated quality, such as a card with a certain card type or color, that player isn’t required to find some or all of those cards even if they’re present in that zone.
Example: Splinter says “Exile target artifact. Search its controller’s graveyard, hand, and library for all cards with the same name as that artifact and exile them. Then that player shuffles their library.” A player casts Splinter targeting Howling Mine (an artifact). Howling Mine’s controller has another Howling Mine in her graveyard and two more in her library. Splinter’s controller must find the Howling Mine in the graveyard, but may choose to find zero, one, or two of the Howling Mines in the library.

701.19c If a player is instructed to search a hidden zone for cards that match an undefined quality, that player may still search that zone but can’t find any cards.
Example: Lobotomy says “Target player reveals their hand, then you choose a card other than a basic land card from it. Search that player’s graveyard, hand, and library for all cards with the same name as the chosen card and exile them. Then that player shuffles their library.” If the target player has no cards in their hand when Lobotomy resolves, the player who cast Lobotomy searches the specified zones but doesn’t exile any cards.

701.19d If a player is searching a hidden zone simply for a quantity of cards, such as “a card” or “three cards,” that player must find that many cards (or as many as possible, if the zone doesn’t contain enough cards).

701.19e If the effect that contains the search instruction doesn’t also contain instructions to reveal the found card(s), then they’re not revealed.

701.19f If searching a zone is replaced with searching a portion of that zone, any other instructions that refer to searching the zone still apply. Any abilities that trigger on a library being searched will trigger.
Example: Aven Mindcensor says, in part, “If an opponent would search a library, that player searches the top four cards of that library instead.” Veteran Explorer says “When Veteran Explorer dies, each player may search their library for up to two basic land cards and put them onto the battlefield. Then each player who searched their library this way shuffles it.” An opponent who searched the top four cards of their library because of Veteran Explorer’s ability would shuffle the entire library.

701.19g If an effect offers a player a choice to search a zone and take additional actions with the cards found, that player may choose to search even if the additional actions are illegal or impossible.

701.19h An effect may instruct a player to search a library for one or more cards more than once before instructing a player to shuffle that library. This is the same as a single instruction for that player to search that library for all those cards. The player searches that library only once.

701.19i If multiple players search at once, each of those players looks at the appropriate cards at the same time, then those players decide in APNAP order (see rule 101.4) which card to find.

701.20. Shuffle

701.20a To shuffle a library or a face-down pile of cards, randomize the cards within it so that no player knows their order.

701.20b Some effects cause a player to search a library for a card or cards, shuffle that library, then put the found card or cards in a certain position in that library. Even though the found card or cards never leave that library, they aren’t included in the shuffle. Rather, all the cards in that library except those are shuffled. Abilities that trigger when a library is shuffled will still trigger. See also rule 401, “Library.”

701.20c If an effect would cause a player to shuffle one or more specific objects into a library, that library is shuffled even if none of those objects are in the zone they’re expected to be in or an effect causes all of those objects to be moved to another zone or remain in their current zone.
Example: Guile says, in part, “When Guile is put into a graveyard from anywhere, shuffle it into its owner’s library.” It’s put into a graveyard and its ability triggers, then a player exiles it from that graveyard in response. When the ability resolves, the library is shuffled.
Example: Black Sun’s Zenith says, in part, “Shuffle Black Sun’s Zenith into its owner’s library.” Black Sun’s Zenith is in a graveyard, has gained flashback (due to Recoup, perhaps), and is cast from that graveyard. Black Sun’s Zenith will be exiled, and its owner’s library will be shuffled.

701.20d If an effect would cause a player to shuffle a set of objects into a library, that library is shuffled even if there are no objects in that set.
Example: Loaming Shaman says “When Loaming Shaman enters the battlefield, target player shuffles any number of target cards from their graveyard into their library.” It enters the battlefield, its ability triggers, and no cards are targeted. When the ability resolves, the targeted player will still have to shuffle their library.

701.20e If an effect causes a player to shuffle a library containing zero or one cards, abilities that trigger when a library is shuffled will still trigger.

701.20f If two or more effects cause a library to be shuffled multiple times simultaneously, abilities that trigger when that library is shuffled will trigger that many times.

701.20g If an effect would cause a player to shuffle a library at the same time that an object would be put into a certain position in that library, the result is a shuffled library that’s randomized except that the object is in the specified position.
Example: Darksteel Colossus and Gravebane Zombie are put into a player’s graveyard from the battlefield at the same time. Darksteel Colossus says in part “If Darksteel Colossus would be put into a graveyard from anywhere, reveal Darksteel Colossus and shuffle it into its owner’s library instead.” Gravebane Zombie says “If Gravebane Zombie would die, put Gravebane Zombie on top of its owner’s library instead.” The player shuffles Darksteel Colossus into their library and puts Gravebane Zombie on top of that library.

701.21. Tap and Untap

701.21a To tap a permanent, turn it sideways from an upright position. Only untapped permanents can be tapped.

701.21b To untap a permanent, rotate it back to the upright position from a sideways position. Only tapped permanents can be untapped.

701.22. Fateseal

701.22a To “fateseal N” means to look at the top N cards of an opponent’s library, then put any number of them on the bottom of that library in any order and the rest on top of that library in any order.

701.23. Clash

701.23a To clash, a player reveals the top card of their library. That player may then put that card on the bottom of their library.

701.23b “Clash with an opponent” means “Choose an opponent. You and that opponent each clash.”

701.23c Each clashing player reveals the top card of their library at the same time. Then those players decide in APNAP order (see rule 101.4) where to put those cards, then those cards move at the same time.

701.23d A player wins a clash if that player revealed a card with a higher mana value than all other cards revealed in that clash.

701.24. Planeswalk

701.24a A player may planeswalk only during a Planechase game. Only the planar controller may planeswalk. See rule 901, “Planechase.”

701.24b To planeswalk is to put each face-up plane card and phenomenon card on the bottom of its owner’s planar deck face down, then move the top card of your planar deck off that planar deck and turn it face up.

701.24c A player may planeswalk as the result of the “planeswalking ability” (see rule 901.8), because the owner of a face-up plane card or phenomenon card leaves the game (see rule 901.10), or because a phenomenon’s triggered ability leaves the stack (see rule 704.6f). Abilities may also instruct a player to planeswalk.

701.24d The plane card that’s turned face up is the plane the player planeswalks to. The plane card that’s turned face down or that leaves the game is the plane the player planeswalks away from. The same is true with respect to phenomena.

701.25. Set in Motion

701.25a Only a scheme card may be set in motion, and only during an Archenemy game. Only the archenemy may set a scheme card in motion. See rule 312, “Schemes,” and rule 904, “Archenemy.”

701.25b To set a scheme in motion, move it off the top of your scheme deck if it’s on top of your scheme deck and turn it face up if it isn’t face up. That scheme is considered to have been set in motion even if neither of these actions was performed on it.

701.25c Schemes may only be set in motion one at a time. If a player is instructed to set multiple schemes in motion, that player sets a scheme in motion that many times.

701.26. Abandon

701.26a Only a face-up ongoing scheme card may be abandoned, and only during an Archenemy game. See rule 312, “Schemes,” and rule 904, “Archenemy.”

701.26b To abandon a scheme, turn it face down and put it on the bottom of its owner’s scheme deck.

701.27. Proliferate

701.27a To proliferate means to choose any number of permanents and/or players that have a counter, then give each one additional counter of each kind that permanent or player already has.

701.27b In a Two-Headed Giant game, poison counters are shared by the team. If more than one player on a team is chosen this way, only one of those players can be given an additional poison counter. The player who proliferates chooses which player that is. See rule 810, “Two-Headed Giant Variant.”

701.28. Transform

701.28a To transform a permanent, turn it over so that its other face is up. Only permanents represented by transforming double-faced cards can transform. (See rule 711, “Double-Faced Cards.”)

701.28b Although transforming a permanent uses the same physical action as turning a permanent face up or face down, they are different game actions. Abilities that trigger when a permanent is turned face down won’t trigger when that permanent transforms, and so on.

701.28c If a spell or ability instructs a player to transform a permanent that isn’t represented by a transforming double-faced card, nothing happens.

701.28d If a spell or ability instructs a player to transform a permanent, and the face that permanent would transform into is represented by an instant or sorcery card face, nothing happens.

701.28e Some triggered abilities trigger when an object “transforms into” an object with a specified characteristic. Such an ability triggers if the object transforms and has the specified characteristic immediately after it transforms.

701.28f If an activated or triggered ability of a permanent that isn’t a delayed triggered ability of that permanent tries to transform it, the permanent transforms only if it hasn’t transformed since the ability was put onto the stack. If a delayed triggered ability of a permanent tries to transform that permanent, the permanent transforms only if it hasn’t transformed since that delayed triggered ability was created. In either case, if the permanent has already transformed, the instruction to transform is ignored.

701.29. Detain

701.29a Certain spells and abilities can detain a permanent. Until the next turn of the controller of that spell or ability, that permanent can’t attack or block and its activated abilities can’t be activated.

701.30. Populate

701.30a To populate means to choose a creature token you control and create a token that’s a copy of that creature token.

701.30b If you control no creature tokens when instructed to populate, you won’t create a token.

701.31. Monstrosity

701.31a “Monstrosity N” means “If this permanent isn’t monstrous, put N +1/+1 counters on it and it becomes monstrous.”

701.31b Monstrous is a designation that has no rules meaning other than to act as a marker that the monstrosity action and other spells and abilities can identify. Only permanents can be or become monstrous. Once a permanent becomes monstrous, it stays monstrous until it leaves the battlefield. Monstrous is neither an ability nor part of the permanent’s copiable values.

701.31c If a permanent’s ability instructs a player to “monstrosity X,” other abilities of that permanent may also refer to X. The value of X in those abilities is equal to the value of X as that permanent became monstrous.

701.32. Vote

701.32a Some spells and abilities instruct players to vote for one choice from a list of options to determine some aspect of the effect of that spell or ability. To vote, each player, starting with a specified player and proceeding in turn order, chooses one of those choices.

701.32b The listed choices may be objects, words with no rules meaning that are each connected to a different effect, or other variables relevant to the resolution of the spell or ability.

701.32c If the text of a spell or ability refers to “voting,” it refers only to an actual vote, not to any spell or ability that involves the players making choices or decisions without using the word “vote.”

701.32d If an effect gives a player multiple votes, those votes all happen at the same time the player would otherwise have voted.

701.33. Bolster

701.33a “Bolster N” means “Choose a creature you control with the least toughness or tied for least toughness among creatures you control. Put N +1/+1 counters on that creature.”

701.34. Manifest

701.34a To manifest a card, turn it face down. It becomes a 2/2 face-down creature card with no text, no name, no subtypes, and no mana cost. Put that card onto the battlefield face down. That permanent is a manifested permanent as long as it remains face down. The effect defining its characteristics works while the card is face down and ends when it’s turned face up.

701.34b Any time you have priority, you may turn a manifested permanent you control face up. This is a special action that doesn’t use the stack (see rule 116.2b). To do this, show all players that the card representing that permanent is a creature card and what that card’s mana cost is, pay that cost, then turn the permanent face up. The effect defining its characteristics while it was face down ends, and it regains its normal characteristics. (If the card representing that permanent isn’t a creature card or it doesn’t have a mana cost, it can’t be turned face up this way.)

701.34c If a card with morph is manifested, its controller may turn that card face up using either the procedure described in rule 702.37e to turn a face-down permanent with morph face up or the procedure described above to turn a manifested permanent face up.

701.34d If an effect instructs a player to manifest multiple cards from their library, those cards are manifested one at a time.

701.34e If an effect instructs a player to manifest a card and a rule or effect prohibits the face-down object from entering the battlefield, that card isn’t manifested. Its characteristics remain unmodified and it remains in its previous zone. If it was face up, it remains face up.

701.34f If a manifested permanent that’s represented by an instant or sorcery card would turn face up, its controller reveals it and leaves it face down. Abilities that trigger whenever a permanent is turned face up won’t trigger.

701.34g See rule 707, “Face-Down Spells and Permanents,” for more information.

701.35. Support

701.35a “Support N” on a permanent means “Put a +1/+1 counter on each of up to N other target creatures.” “Support N” on an instant or sorcery spell means “Put a +1/+1 counter on each of up to N target creatures.”

701.36. Investigate

701.36a “Investigate” means “Create a colorless Clue artifact token with ‘{2}, Sacrifice this artifact: Draw a card.’”

701.37. Meld

701.37a Meld is a keyword action that appears in an ability on one card in a meld pair. (See rule 712, “Meld Cards.”) To meld the two cards in a meld pair, put them onto the battlefield with their back faces up and combined. The resulting permanent is a single object represented by two cards.

701.37b Only two cards belonging to the same meld pair can be melded. Tokens, cards that aren’t meld cards, or meld cards that don’t form a meld pair can’t be melded.

701.37c If an effect instructs a player to meld objects that can’t be melded, they stay in their current zone.
Example: A player owns and controls Midnight Scavengers and a token that’s a copy of Graf Rats. At the beginning of combat, both are exiled but can’t be melded. Midnight Scavengers remains exiled and the exiled token ceases to exist.

701.38. Goad

701.38a Certain spells and abilities can goad a creature. Until the next turn of the controller of that spell or ability, that creature attacks each combat if able and attacks a player other than that player if able.

701.38b A static ability may state that a creature “is goaded.” That creature attacks each combat if able and attacks a player other than the controller of the permanent with that static ability if able.

701.38c Once a player has goaded a creature, the same player goading it again has no effect. It doesn’t create additional combat requirements.

701.39. Exert

701.39a To exert a permanent, you choose to have it not untap during your next untap step.

701.39b A permanent can be exerted even if it’s not tapped or has already been exerted in a turn. If you exert a permanent more than once before your next untap step, each effect causing it not to untap expires during the same untap step.

701.39c An object that isn’t on the battlefield can’t be exerted.

701.39d “You may exert [this creature] as it attacks” is an optional cost to attack (see rule 508.1g). Some objects with this static ability have a triggered ability that triggers “when you do” printed in the same paragraph. These abilities are linked. (See rule 607.2g.)

701.40. Explore

701.40a Certain abilities instruct a permanent to explore. To do so, that permanent’s controller reveals the top card of their library. If a land card is revealed this way, that player puts that card into their hand. Otherwise, that player puts a +1/+1 counter on the exploring permanent and may put the revealed card into their graveyard.

701.40b A permanent “explores” after the process described in rule 701.40a is complete, even if some or all of those actions were impossible.

701.40c If a permanent changes zones before an effect causes it to explore, its last known information is used to determine which object explored and who controlled it.

701.41. Assemble

701.41a Assemble is a keyword action in the Unstable set that puts Contraptions onto the battlefield. Outside of silver-bordered cards, only one card (Steamflogger Boss) refers to assembling a Contraption. Cards and mechanics from the Unstable set aren’t included in these rules. See the Unstable FAQ for more information.

701.42. Surveil

701.42a To “surveil N” means to look at the top N cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.

701.42b If an effect allows you to look at additional cards while you surveil, those cards are included among the cards you may put into your graveyard and on top of your library in any order.

701.43. Adapt

701.43a “Adapt N” means “If this permanent has no +1/+1 counters on it, put N +1/+1 counters on it.”

701.44. Amass

701.44a To amass N means “If you don’t control an Army creature, create a 0/0 black Zombie Army creature token. Choose an Army creature you control. Put N +1/+1 counters on that creature.”

701.44b The phrase “the [subtype] you amassed” refers to the creature you chose, whether or not it received counters.

701.45. Learn

701.45a “Learn” means “You may discard a card. If you do, draw a card. If you didn’t discard a card, you may reveal a Lesson card you own from outside the game and put it into your hand.”

702. Keyword Abilities

702.1. Most abilities describe exactly what they do in the card’s rules text. Some, though, are very common or would require too much space to define on the card. In these cases, the object lists only the name of the ability as a “keyword”; sometimes reminder text summarizes the game rule.

702.1a If an effect refers to a “[keyword ability] cost,” it refers only to the variable costs for that keyword.
Example: Varolz, the Scar-Striped has an ability that says “Each creature card in your graveyard has scavenge. The scavenge cost is equal to its mana cost.” A creature card’s scavenge cost is an amount of mana equal to its mana cost, and the activation cost of the scavenge ability is that amount of mana plus “Exile this card from your graveyard.”

702.1b An effect that grants an object a keyword ability may define a variable in that ability based on characteristics of that object or other information about the game state. For these abilities, the value of that variable is constantly reevaluated.
Example: Volcano Hellion has the ability “Volcano Hellion has echo {X}, where X is your life total.” If your life total is 10 when Volcano Hellion’s echo ability triggers but 5 when it resolves, the echo cost to pay is {5}.
Example: Fire//Ice is a split card whose halves have the mana costs {1}{R} and {1}{U}. Past in Flames reads “Each instant and sorcery card in your graveyard gains flashback until end of turn. The flashback cost is equal to its mana cost.” Fire//Ice has “Flashback {2}{U}{R}” while it is in your graveyard, but if you choose to cast Fire, the resulting spell has “Flashback {1}{R}.”

702.1c An effect may state that “the same is true for” a list of keyword abilities or similar. If one of those keyword abilities has variants or variables and the effect grants that keyword or counters of that keyword to one or more objects and/or players, it grants each appropriate variant and variable of that keyword.
Example: Concerted Effort is an enchantment that reads “At the beginning of each upkeep, creatures you control gain flying until end of turn if a creature you control has flying. The same is true for fear, first strike, double strike, landwalk, protection, trample, and vigilance.” As that triggered ability resolves, each landwalk and protection ability from among creatures you control is granted to each creature you control.

702.1d An effect may refer to an object “with [keyword ability]” or “that has [keyword ability].” This means the same thing as an object “with a [keyword ability] ability” or an object “that has a [keyword ability] ability.”

702.2. Deathtouch

702.2a Deathtouch is a static ability.

702.2b A creature with toughness greater than 0 that’s been dealt damage by a source with deathtouch since the last time state-based actions were checked is destroyed as a state-based action. See rule 704.

702.2c Any nonzero amount of combat damage assigned to a creature by a source with deathtouch is considered to be lethal damage for the purposes of determining if a proposed combat damage assignment is valid, regardless of that creature’s toughness. See rules 510.1c–d.

702.2d The deathtouch rules function no matter what zone an object with deathtouch deals damage from.

702.2e If an object changes zones before an effect causes it to deal damage, its last known information is used to determine whether it had deathtouch.

702.2f Multiple instances of deathtouch on the same object are redundant.

702.3. Defender

702.3a Defender is a static ability.

702.3b A creature with defender can’t attack.

702.3c Multiple instances of defender on the same creature are redundant.

702.4. Double Strike

702.4a Double strike is a static ability that modifies the rules for the combat damage step. (See rule 510, “Combat Damage Step.”)

702.4b If at least one attacking or blocking creature has first strike (see rule 702.7) or double strike as the combat damage step begins, the only creatures that assign combat damage in that step are those with first strike or double strike. After that step, instead of proceeding to the end of combat step, the phase gets a second combat damage step. The only creatures that assign combat damage in that step are the remaining attackers and blockers that had neither first strike nor double strike as the first combat damage step began, as well as the remaining attackers and blockers that currently have double strike. After that step, the phase proceeds to the end of combat step.

702.4c Removing double strike from a creature during the first combat damage step will stop it from assigning combat damage in the second combat damage step.

702.4d Giving double strike to a creature with first strike after it has already dealt combat damage in the first combat damage step will allow the creature to assign combat damage in the second combat damage step.

702.4e Multiple instances of double strike on the same creature are redundant.

702.5. Enchant

702.5a Enchant is a static ability, written “Enchant [object or player].” The enchant ability restricts what an Aura spell can target and what an Aura can enchant.

702.5b For more information about Auras, see rule 303, “Enchantments.”

702.5c If an Aura has multiple instances of enchant, all of them apply. The Aura’s target must follow the restrictions from all the instances of enchant. The Aura can enchant only objects or players that match all of its enchant abilities.

702.5d Auras that can enchant a player can target and be attached to players. Such Auras can’t target permanents and can’t be attached to permanents.

702.6. Equip

702.6a Equip is an activated ability of Equipment cards. “Equip [cost]” means “[Cost]: Attach this permanent to target creature you control. Activate only as a sorcery.”

702.6b For more information about Equipment, see rule 301, “Artifacts.”

702.6c “Equip [quality] creature” is a variant of the equip ability. “Equip [quality] [cost]” means “[Cost]: Attach this permanent to target [quality] creature you control. Activate only as a sorcery.” This ability doesn’t restrict what the Equipment may be attached to.

702.6d An “equip [quality] creature” ability is an equip ability, and an “equip [quality] creature” cost is an equip cost. Any effect that modifies how or whether a player may activate an equip ability of an object affects “equip [quality] creature” abilities of that object. Any effect that increases or reduces an equip cost will increase or reduce a “equip [quality] creature” cost.

702.6e If a permanent has multiple equip abilities, any of its equip abilities may be activated.

702.7. First Strike

702.7a First strike is a static ability that modifies the rules for the combat damage step. (See rule 510, “Combat Damage Step.”)

702.7b If at least one attacking or blocking creature has first strike or double strike (see rule 702.4) as the combat damage step begins, the only creatures that assign combat damage in that step are those with first strike or double strike. After that step, instead of proceeding to the end of combat step, the phase gets a second combat damage step. The only creatures that assign combat damage in that step are the remaining attackers and blockers that had neither first strike nor double strike as the first combat damage step began, as well as the remaining attackers and blockers that currently have double strike. After that step, the phase proceeds to the end of combat step.

702.7c Giving first strike to a creature without it after combat damage has already been dealt in the first combat damage step won’t preclude that creature from assigning combat damage in the second combat damage step. Removing first strike from a creature after it has already dealt combat damage in the first combat damage step won’t allow it to also assign combat damage in the second combat damage step (unless the creature has double strike).

702.7d Multiple instances of first strike on the same creature are redundant.

702.8. Flash

702.8a Flash is a static ability that functions in any zone from which you could play the card it’s on. “Flash” means “You may play this card any time you could cast an instant.”

702.8b Multiple instances of flash on the same object are redundant.

702.9. Flying

702.9a Flying is an evasion ability.

702.9b A creature with flying can’t be blocked except by creatures with flying and/or reach. A creature with flying can block a creature with or without flying. (See rule 509, “Declare Blockers Step,” and rule 702.17, “Reach.”)

702.9c Multiple instances of flying on the same creature are redundant.

702.10. Haste

702.10a Haste is a static ability.

702.10b If a creature has haste, it can attack even if it hasn’t been controlled by its controller continuously since their most recent turn began. (See rule 302.6.)

702.10c If a creature has haste, its controller can activate its activated abilities whose cost includes the tap symbol or the untap symbol even if that creature hasn’t been controlled by that player continuously since their most recent turn began. (See rule 302.6.)

702.10d Multiple instances of haste on the same creature are redundant.

702.11. Hexproof

702.11a Hexproof is a static ability.

702.11b “Hexproof” on a permanent means “This permanent can’t be the target of spells or abilities your opponents control.”

702.11c “Hexproof” on a player means “You can’t be the target of spells or abilities your opponents control.”

702.11d “Hexproof from [quality]” is a variant of the hexproof ability. “Hexproof from [quality]” on a permanent means “This permanent can’t be the target of [quality] spells your opponents control or abilities your opponents control from [quality] sources.” A “hexproof from [quality]” ability is a hexproof ability.

702.11e Any effect that causes an object to lose hexproof will cause an object to lose all “hexproof from [quality]” abilities. Any effect that allows a player to choose a creature with hexproof as a target as though it didn’t have hexproof will allow a player to choose a creature with a “hexproof from [quality]” ability. Any effect that looks for a card with hexproof will find a card with a “hexproof from [quality]” ability.

702.11f “Hexproof from [quality A] and from [quality B]” is shorthand for “hexproof from [quality A]” and “hexproof from [quality B]”; it behaves as two separate hexproof abilities. If an effect causes an object with such an ability to lose hexproof from [quality A], for example, that object would still have hexproof from [quality B].

702.11g Multiple instances of the same hexproof ability on the same permanent or player are redundant.

702.12. Indestructible

702.12a Indestructible is a static ability.

702.12b A permanent with indestructible can’t be destroyed. Such permanents aren’t destroyed by lethal damage, and they ignore the state-based action that checks for lethal damage (see rule 704.5g).

702.12c Multiple instances of indestructible on the same permanent are redundant.

702.13. Intimidate

702.13a Intimidate is an evasion ability.

702.13b A creature with intimidate can’t be blocked except by artifact creatures and/or creatures that share a color with it. (See rule 509, “Declare Blockers Step.”)

702.13c Multiple instances of intimidate on the same creature are redundant.

702.14. Landwalk

702.14a Landwalk is a generic term that appears within an object’s rules text as “[type]walk,” where [type] is usually a subtype, but can be the card type land, any land type, any supertype, or any combination thereof.

702.14b Landwalk is an evasion ability.

702.14c A creature with landwalk can’t be blocked as long as the defending player controls at least one land with the specified subtype (as in “islandwalk”), with the specified supertype (as in “legendary landwalk”), without the specified supertype (as in “nonbasic landwalk”), or with both the specified supertype and the specified subtype (as in “snow swampwalk”). (See rule 509, “Declare Blockers Step.”)

702.14d Landwalk abilities don’t “cancel” one another.
Example: If a player controls a snow Forest, that player can’t block an attacking creature with snow forestwalk even if they also control a creature with snow forestwalk.

702.14e Multiple instances of the same kind of landwalk on the same creature are redundant.

702.15. Lifelink

702.15a Lifelink is a static ability.

702.15b Damage dealt by a source with lifelink causes that source’s controller, or its owner if it has no controller, to gain that much life (in addition to any other results that damage causes). See rule 120.3.

702.15c If a permanent leaves the battlefield before an effect causes it to deal damage, its last known information is used to determine whether it had lifelink.

702.15d The lifelink rules function no matter what zone an object with lifelink deals damage from.

702.15e If multiple sources with lifelink deal damage at the same time, they cause separate life gain events (see rules 119.9–10).
Example: A player controls Ajani’s Pridemate, which reads “Whenever you gain life, put a +1/+1 counter on Ajani’s Pridemate,” and two creatures with lifelink. The creatures with lifelink deal combat damage simultaneously. Ajani’s Pridemate’s ability triggers twice.

702.15f Multiple instances of lifelink on the same object are redundant.

702.16. Protection

702.16a Protection is a static ability, written “Protection from [quality].” This quality is usually a color (as in “protection from black”) but can be any characteristic value or information. If the quality happens to be a card name, it is treated as such only if the protection ability specifies that the quality is a name. If the quality is a card type, subtype, or supertype, the ability applies to sources that are permanents with that card type, subtype, or supertype and to any sources not on the battlefield that are of that card type, subtype, or supertype. This is an exception to rule 109.2.

702.16b A permanent or player with protection can’t be targeted by spells with the stated quality and can’t be targeted by abilities from a source with the stated quality.

702.16c A permanent or player with protection can’t be enchanted by Auras that have the stated quality. Such Auras attached to the permanent or player with protection will be put into their owners’ graveyards as a state-based action. (See rule 704, “State-Based Actions.”)

702.16d A permanent with protection can’t be equipped by Equipment that have the stated quality or fortified by Fortifications that have the stated quality. Such Equipment or Fortifications become unattached from that permanent as a state-based action, but remain on the battlefield. (See rule 704, “State-Based Actions.”)

702.16e Any damage that would be dealt by sources that have the stated quality to a permanent or player with protection is prevented.

702.16f Attacking creatures with protection can’t be blocked by creatures that have the stated quality.

702.16g “Protection from [quality A] and from [quality B]” is shorthand for “protection from [quality A]” and “protection from [quality B]”; it behaves as two separate protection abilities. If an effect causes an object with such an ability to lose protection from [quality A], for example, that object would still have protection from [quality B].

702.16h “Protection from all [characteristic]” is shorthand for “protection from [quality A],” “protection from [quality B],” and so on for each possible quality the listed characteristic could have; it behaves as multiple separate protection abilities. If an effect causes an object with such an ability to lose protection from [quality A], for example, that object would still have protection from [quality B], [quality C], and so on.

702.16i “Protection from each [set of characteristics, qualities, or players]” is shorthand for “protection from [A],” “protection from [B],” and so on for each characteristic, quality, or player in the set. It behaves as multiple separate protection abilities.

702.16j “Protection from everything” is a variant of the protection ability. A permanent with protection from everything has protection from each object regardless of that object’s characteristic values. Such a permanent can’t be targeted by spells or abilities, enchanted by Auras, equipped by Equipment, fortified by Fortifications, or blocked by creatures, and all damage that would be dealt to it is prevented.

702.16k “Protection from [a player]” is a variant of the protection ability. A permanent with protection from a specific player has protection from each object the player controls and protection from each object the player owns not controlled by another player, regardless of that object’s characteristic values. Such a permanent can’t be targeted by spells or abilities the player controls, enchanted by Auras the player controls, equipped by Equipment the player controls, fortified by Fortifications the player controls, or blocked by creatures the player controls, and all damage that would be dealt to it by sources controlled by the player or owned by the player but not controlled by another player is prevented.

702.16m Multiple instances of protection from the same quality on the same permanent or player are redundant.

702.16n Some Auras both give the enchanted creature protection from a quality and say “this effect doesn’t remove” either that specific Aura or all Auras. This means that the specified Auras aren’t put into their owners’ graveyards as a state-based action. If the creature has other instances of protection from the same quality, those instances affect Auras as normal.

702.16p One Aura (Benevolent Blessing) gives the enchanted creature protection from a quality and says the effect doesn’t remove certain permanents that are “already attached to” that creature. This means that, when the protection effect starts to apply, any objects with the stated quality that are already attached to that creature (including the Aura giving that creature protection) will not be put into their owners’ graveyards as a state-based action. Other permanents with the stated quality can’t become attached to the creature. If the creature has other instances of protection from the same quality, those instances affect attached permanents as normal. 

702.17. Reach

702.17a Reach is a static ability.

702.17b A creature with flying can’t be blocked except by creatures with flying and/or reach. (See rule 509, “Declare Blockers Step,” and rule 702.9, “Flying.”)

702.17c Multiple instances of reach on the same creature are redundant.

702.18. Shroud

702.18a Shroud is a static ability. “Shroud” means “This permanent or player can’t be the target of spells or abilities.”

702.18b Multiple instances of shroud on the same permanent or player are redundant.

702.19. Trample

702.19a Trample is a static ability that modifies the rules for assigning an attacking creature’s combat damage. The ability has no effect when a creature with trample is blocking or is dealing noncombat damage. (See rule 510, “Combat Damage Step.”)

702.19b The controller of an attacking creature with trample first assigns damage to the creature(s) blocking it. Once all those blocking creatures are assigned lethal damage, any excess damage is assigned as its controller chooses among those blocking creatures and the player or planeswalker the creature is attacking. When checking for assigned lethal damage, take into account damage already marked on the creature and damage from other creatures that’s being assigned during the same combat damage step, but not any abilities or effects that might change the amount of damage that’s actually dealt. The attacking creature’s controller need not assign lethal damage to all those blocking creatures but in that case can’t assign any damage to the player or planeswalker it’s attacking.
Example: A 2/2 creature that can block an additional creature blocks two attackers: a 1/1 with no abilities and a 3/3 with trample. The active player could assign 1 damage from the first attacker and 1 damage from the second to the blocking creature, and 2 damage to the defending player from the creature with trample.
Example: A 6/6 green creature with trample is blocked by a 2/2 creature with protection from green. The attacking creature’s controller must assign at least 2 damage to the blocker, even though that damage will be prevented by the blocker’s protection ability. The attacking creature’s controller can divide the rest of the damage as they choose between the blocking creature and the defending player.

702.19c If an attacking creature with trample is blocked, but there are no creatures blocking it when damage is assigned, all its damage is assigned to the player or planeswalker it’s attacking.

702.19d If a creature with trample is attacking a planeswalker, none of its combat damage can be assigned to the defending player, even if that planeswalker has been removed from combat or the damage the attacking creature could assign is greater than the planeswalker’s loyalty.

702.19e Multiple instances of trample on the same creature are redundant.

702.20. Vigilance

702.20a Vigilance is a static ability that modifies the rules for the declare attackers step.

702.20b Attacking doesn’t cause creatures with vigilance to tap. (See rule 508, “Declare Attackers Step.”)

702.20c Multiple instances of vigilance on the same creature are redundant.

702.21. Ward

702.21a Ward is a triggered ability. Ward [cost] means “Whenever this permanent becomes the target of a spell or ability an opponent controls, counter that spell or ability unless that player pays [cost].”

702.22. Banding

702.22a Banding is a static ability that modifies the rules for combat.

702.22b “Bands with other” is a special form of banding. If an effect causes a permanent to lose banding, the permanent loses all “bands with other” abilities as well.

702.22c As a player declares attackers, they may declare that one or more attacking creatures with banding and up to one attacking creature without banding (even if it has “bands with other”) are all in a “band.” They may also declare that one or more attacking [quality] creatures with “bands with other [quality]” and any number of other attacking [quality] creatures are all in a band. A player may declare as many attacking bands as they want, but each creature may be a member of only one of them. (Defending players can’t declare bands but may use banding in a different way; see rule 702.22j.)

702.22d All creatures in an attacking band must attack the same player or planeswalker.

702.22e Once an attacking band has been announced, it lasts for the rest of combat, even if something later removes banding or “bands with other” from one or more of the creatures in the band.

702.22f An attacking creature that’s removed from combat is also removed from the band it was in.

702.22g Banding doesn’t cause attacking creatures to share abilities, nor does it remove any abilities. The attacking creatures in a band are separate permanents.

702.22h If an attacking creature becomes blocked by a creature, each other creature in the same band as the attacking creature becomes blocked by that same blocking creature.
Example: A player attacks with a band consisting of a creature with flying and a creature with swampwalk. The defending player, who controls a Swamp, can block the flying creature if able. If they do, then the creature with swampwalk will also become blocked by the blocking creature(s).

702.22i If one member of a band would become blocked due to an effect, the entire band becomes blocked.

702.22j During the combat damage step, if an attacking creature is being blocked by a creature with banding, or by both a [quality] creature with “bands with other [quality]” and another [quality] creature, the defending player (rather than the active player) chooses how the attacking creature’s damage is assigned. That player can divide that creature’s combat damage as they choose among any creatures blocking it. This is an exception to the procedure described in rule 510.1c.

702.22k During the combat damage step, if a blocking creature is blocking a creature with banding, or both a [quality] creature with “bands with other [quality]” and another [quality] creature, the active player (rather than the defending player) chooses how the blocking creature’s damage is assigned. That player can divide that creature’s combat damage as they choose among any creatures it’s blocking. This is an exception to the procedure described in rule 510.1d.

702.22m Multiple instances of banding on the same creature are redundant. Multiple instances of “bands with other” of the same kind on the same creature are redundant.

702.23. Rampage

702.23a Rampage is a triggered ability. “Rampage N” means “Whenever this creature becomes blocked, it gets +N/+N until end of turn for each creature blocking it beyond the first.” (See rule 509, “Declare Blockers Step.”)

702.23b The rampage bonus is calculated only once per combat, when the triggered ability resolves. Adding or removing blockers later in combat won’t change the bonus.

702.23c If a creature has multiple instances of rampage, each triggers separately.

702.24. Cumulative Upkeep

702.24a Cumulative upkeep is a triggered ability that imposes an increasing cost on a permanent. “Cumulative upkeep [cost]” means “At the beginning of your upkeep, if this permanent is on the battlefield, put an age counter on this permanent. Then you may pay [cost] for each age counter on it. If you don’t, sacrifice it.” If [cost] has choices associated with it, each choice is made separately for each age counter, then either the entire set of costs is paid, or none of them is paid. Partial payments aren’t allowed.
Example: A creature has “Cumulative upkeep {W} or {U}” and two age counters on it. When its ability next triggers and resolves, the creature’s controller puts an age counter on it and then may pay {W}{W}{W}, {W}{W}{U}, {W}{U}{U}, or {U}{U}{U} to keep the creature on the battlefield.
Example: A creature has “Cumulative upkeep—Sacrifice a creature” and one age counter on it. When its ability next triggers and resolves, its controller can’t choose the same creature to sacrifice twice. Either two different creatures must be sacrificed, or the creature with cumulative upkeep must be sacrificed.

702.24b If a permanent has multiple instances of cumulative upkeep, each triggers separately. However, the age counters are not connected to any particular ability; each cumulative upkeep ability will count the total number of age counters on the permanent at the time that ability resolves.
Example: A creature has two instances of “Cumulative upkeep—Pay 1 life.” The creature has no age counters, and both cumulative upkeep abilities trigger. When the first ability resolves, the controller adds a counter and then chooses to pay 1 life. When the second ability resolves, the controller adds another counter and then chooses to pay an additional 2 life.

702.25. Flanking

702.25a Flanking is a triggered ability that triggers during the declare blockers step. (See rule 509, “Declare Blockers Step.”) “Flanking” means “Whenever this creature becomes blocked by a creature without flanking, the blocking creature gets -1/-1 until end of turn.”

702.25b If a creature has multiple instances of flanking, each triggers separately.

702.26. Phasing

702.26a Phasing is a static ability that modifies the rules of the untap step. During each player’s untap step, before the active player untaps permanents, all phased-in permanents with phasing that player controls “phase out.” Simultaneously, all phased-out permanents that had phased out under that player’s control “phase in.”

702.26b If a permanent phases out, its status changes to “phased out.” Except for rules and effects that specifically mention phased-out permanents, a phased-out permanent is treated as though it does not exist. It can’t affect or be affected by anything else in the game. A permanent that phases out is removed from combat. (See rule 506.4.)
Example: You control three creatures, one of which is phased out. You cast a spell that says “Draw a card for each creature you control.” You draw two cards.
Example: You control a phased-out creature. You cast a spell that says “Destroy all creatures.” The phased-out creature is not destroyed.

702.26c If a permanent phases in, its status changes to “phased in.” The game once again treats it as though it exists.

702.26d The phasing event doesn’t actually cause a permanent to change zones or control, even though it’s treated as though it’s not on the battlefield and not under its controller’s control while it’s phased out. Zone-change triggers don’t trigger when a permanent phases in or out. Tokens continue to exist on the battlefield while phased out. Counters remain on a permanent while it’s phased out. Effects that check a phased-in permanent’s history won’t treat the phasing event as having caused the permanent to leave or enter the battlefield or its controller’s control.

702.26e If a continuous effect generated by the resolution of a spell or ability modifies the characteristics or changes the controller of any objects, a phased-out permanent won’t be included in the set of affected objects. This includes continuous effects that reference the permanent specifically, unless they also specifically refer to the permanent as phased out.

702.26f Continuous effects that affect a phased-out permanent may expire while that permanent is phased out. If so, they will no longer affect that permanent once it’s phased in. In particular, effects with “for as long as” durations that track that permanent (see rule 611.2b) end when that permanent phases out because they can no longer see it.

702.26g When a permanent phases out, any Auras, Equipment, or Fortifications attached to that permanent phase out at the same time. This alternate way of phasing out is known as phasing out “indirectly.” An Aura, Equipment, or Fortification that phased out indirectly won’t phase in by itself, but instead phases in along with the permanent it’s attached to.

702.26h If an object would simultaneously phase out directly and indirectly, it just phases out indirectly.

702.26i An Aura, Equipment, or Fortification that phased out directly will phase in attached to the object or player it was attached to when it phased out, if that object is still in the same zone or that player is still in the game. If not, that Aura, Equipment, or Fortification phases in unattached. State-based actions apply as appropriate. (See rules 704.5m and 704.5n.)

702.26j Abilities that trigger when a permanent becomes attached or unattached from an object or player don’t trigger when that permanent phases in or out.

702.26k Phased-out permanents owned by a player who leaves the game also leave the game. This doesn’t trigger zone-change triggers. See rule 800.4.

702.26m If an effect causes a player to skip their untap step, the phasing event simply doesn’t occur that turn.

702.26n In a multiplayer game, game rules may cause a phased-out permanent to leave the game or to be exiled once a player leaves the game. (See rules 800.4a and 800.4c.) If a phased-out permanent phased out under the control of a player who has left the game, that permanent phases in during the next untap step after that player’s next turn would have begun.

702.26p Multiple instances of phasing on the same permanent are redundant.

702.27. Buyback

702.27a Buyback appears on some instants and sorceries. It represents two static abilities that function while the spell is on the stack. “Buyback [cost]” means “You may pay an additional [cost] as you cast this spell” and “If the buyback cost was paid, put this spell into its owner’s hand instead of into that player’s graveyard as it resolves.” Paying a spell’s buyback cost follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

702.28. Shadow

702.28a Shadow is an evasion ability.

702.28b A creature with shadow can’t be blocked by creatures without shadow, and a creature without shadow can’t be blocked by creatures with shadow. (See rule 509, “Declare Blockers Step.”)

702.28c Multiple instances of shadow on the same creature are redundant.

702.29. Cycling

702.29a Cycling is an activated ability that functions only while the card with cycling is in a player’s hand. “Cycling [cost]” means “[Cost], Discard this card: Draw a card.”

702.29b Although the cycling ability can be activated only if the card is in a player’s hand, it continues to exist while the object is on the battlefield and in all other zones. Therefore objects with cycling will be affected by effects that depend on objects having one or more activated abilities.

702.29c Some cards with cycling have abilities that trigger when they’re cycled. “When you cycle [this card]” means “When you discard [this card] to pay an activation cost of a cycling ability.” These abilities trigger from whatever zone the card winds up in after it’s cycled.

702.29d Some cards have abilities that trigger whenever a player “cycles or discards” a card. These abilities trigger only once when a card is cycled.

702.29e Typecycling is a variant of the cycling ability. “[Type]cycling [cost]” means “[Cost], Discard this card: Search your library for a [type] card, reveal it, and put it into your hand. Then shuffle your library.” This type is usually a subtype (as in “mountaincycling”) but can be any card type, subtype, supertype, or combination thereof (as in “basic landcycling”).

702.29f Typecycling abilities are cycling abilities, and typecycling costs are cycling costs. Any cards that trigger when a player cycles a card will trigger when a card is discarded to pay an activation cost of a typecycling ability. Any effect that stops players from cycling cards will stop players from activating cards’ typecycling abilities. Any effect that increases or reduces a cycling cost will increase or reduce a typecycling cost. Any effect that looks for a card with cycling will find a card with typecycling.

702.30. Echo

702.30a Echo is a triggered ability. “Echo [cost]” means “At the beginning of your upkeep, if this permanent came under your control since the beginning of your last upkeep, sacrifice it unless you pay [cost].”

702.30b Urza block cards with the echo ability were printed without an echo cost. These cards have been given errata in the Oracle card reference; each one now has an echo cost equal to its mana cost.

702.31. Horsemanship

702.31a Horsemanship is an evasion ability.

702.31b A creature with horsemanship can’t be blocked by creatures without horsemanship. A creature with horsemanship can block a creature with or without horsemanship. (See rule 509, “Declare Blockers Step.”)

702.31c Multiple instances of horsemanship on the same creature are redundant.

702.32. Fading

702.32a Fading is a keyword that represents two abilities. “Fading N” means “This permanent enters the battlefield with N fade counters on it” and “At the beginning of your upkeep, remove a fade counter from this permanent. If you can’t, sacrifice the permanent.”

702.33. Kicker

702.33a Kicker is a static ability that functions while the spell with kicker is on the stack. “Kicker [cost]” means “You may pay an additional [cost] as you cast this spell.” Paying a spell’s kicker cost(s) follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

702.33b The phrase “Kicker [cost 1] and/or [cost 2]” means the same thing as “Kicker [cost 1], kicker [cost 2].”

702.33c Multikicker is a variant of the kicker ability. “Multikicker [cost]” means “You may pay an additional [cost] any number of times as you cast this spell.” A multikicker cost is a kicker cost.

702.33d If a spell’s controller declares the intention to pay any of that spell’s kicker costs, that spell has been “kicked.” If a spell has two kicker costs or has multikicker, it may be kicked multiple times. See rule 601.2b.

702.33e Objects with kicker or multikicker have additional abilities that specify what happens if they are kicked. These abilities are linked to the kicker or multikicker abilities printed on that object: they can refer only to those specific kicker or multikicker abilities. See rule 607, “Linked Abilities.”

702.33f Objects with more than one kicker cost have abilities that each correspond to a specific kicker cost. They contain the phrases “if it was kicked with its [A] kicker” and “if it was kicked with its [B] kicker,” where A and B are the first and second kicker costs listed on the card, respectively. Each of those abilities is linked to the appropriate kicker ability.

702.33g If part of a spell’s ability has its effect only if that spell was kicked, and that part of the ability includes any targets, the spell’s controller chooses those targets only if that spell was kicked. Otherwise, the spell is cast as if it did not have those targets. See rule 601.2c.

702.34. Flashback

702.34a Flashback appears on some instants and sorceries. It represents two static abilities: one that functions while the card is in a player’s graveyard and another that functions while the card is on the stack. “Flashback [cost]” means “You may cast this card from your graveyard if the resulting spell is an instant or sorcery spell by paying [cost] rather than paying its mana cost” and “If the flashback cost was paid, exile this card instead of putting it anywhere else any time it would leave the stack.” Casting a spell using its flashback ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.35. Madness

702.35a Madness is a keyword that represents two abilities. The first is a static ability that functions while the card with madness is in a player’s hand. The second is a triggered ability that functions when the first ability is applied. “Madness [cost]” means “If a player would discard this card, that player discards it, but exiles it instead of putting it into their graveyard” and “When this card is exiled this way, its owner may cast it by paying [cost] rather than paying its mana cost. If that player doesn’t, they put this card into their graveyard.”

702.35b Casting a spell using its madness ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.35c After resolving a madness triggered ability, if the exiled card wasn’t cast and was moved to a public zone, effects referencing the discarded card can find that card. See rule 400.7i.

702.36. Fear

702.36a Fear is an evasion ability.

702.36b A creature with fear can’t be blocked except by artifact creatures and/or black creatures. (See rule 509, “Declare Blockers Step.”)

702.36c Multiple instances of fear on the same creature are redundant.

702.37. Morph

702.37a Morph is a static ability that functions in any zone from which you could play the card it’s on, and the morph effect works any time the card is face down. “Morph [cost]” means “You may cast this card as a 2/2 face-down creature with no text, no name, no subtypes, and no mana cost by paying {3} rather than paying its mana cost.” (See rule 707, “Face-Down Spells and Permanents.”)

702.37b Megamorph is a variant of the morph ability. “Megamorph [cost]” means “You may cast this card as a 2/2 face-down creature with no text, no name, no subtypes, and no mana cost by paying {3} rather than paying its mana cost” and “As this permanent is turned face up, put a +1/+1 counter on it if its megamorph cost was paid to turn it face up.” A megamorph cost is a morph cost.

702.37c To cast a card using its morph ability, turn it face down. It becomes a 2/2 face-down creature card with no text, no name, no subtypes, and no mana cost. Any effects or prohibitions that would apply to casting a card with these characteristics (and not the face-up card’s characteristics) are applied to casting this card. These values are the copiable values of that object’s characteristics. (See rule 613, “Interaction of Continuous Effects,” and rule 706, “Copying Objects.”) Put it onto the stack (as a face-down spell with the same characteristics), and pay {3} rather than pay its mana cost. This follows the rules for paying alternative costs. You can use a morph ability to cast a card from any zone from which you could normally play it. When the spell resolves, it enters the battlefield with the same characteristics the spell had. The morph effect applies to the face-down object wherever it is, and it ends when the permanent is turned face up.

702.37d You can’t normally cast a card face down. A morph ability allows you to do so.

702.37e Any time you have priority, you may turn a face-down permanent you control with a morph ability face up. This is a special action; it doesn’t use the stack (see rule 116). To do this, show all players what the permanent’s morph cost would be if it were face up, pay that cost, then turn the permanent face up. (If the permanent wouldn’t have a morph cost if it were face up, it can’t be turned face up this way.) The morph effect on it ends, and it regains its normal characteristics. Any abilities relating to the permanent entering the battlefield don’t trigger when it’s turned face up and don’t have any effect, because the permanent has already entered the battlefield.

702.37f If a permanent’s morph cost includes X, other abilities of that permanent may also refer to X. The value of X in those abilities is equal to the value of X chosen as the morph special action was taken.

702.37g See rule 707, “Face-Down Spells and Permanents,” for more information about how to cast cards with a morph ability.

702.38. Amplify

702.38a Amplify is a static ability. “Amplify N” means “As this object enters the battlefield, reveal any number of cards from your hand that share a creature type with it. This permanent enters the battlefield with N +1/+1 counters on it for each card revealed this way. You can’t reveal this card or any other cards that are entering the battlefield at the same time as this card.”

702.38b If a creature has multiple instances of amplify, each one works separately.

702.39. Provoke

702.39a Provoke is a triggered ability. “Provoke” means “Whenever this creature attacks, you may choose to have target creature defending player controls block this creature this combat if able. If you do, untap that creature.”

702.39b If a creature has multiple instances of provoke, each triggers separately.

702.40. Storm

702.40a Storm is a triggered ability that functions on the stack. “Storm” means “When you cast this spell, copy it for each other spell that was cast before it this turn. If the spell has any targets, you may choose new targets for any of the copies.”

702.40b If a spell has multiple instances of storm, each triggers separately.

702.41. Affinity

702.41a Affinity is a static ability that functions while the spell with affinity is on the stack. “Affinity for [text]” means “This spell costs you {1} less to cast for each [text] you control.”

702.41b If a spell has multiple instances of affinity, each of them applies.

702.42. Entwine

702.42a Entwine is a static ability of modal spells (see rule 700.2) that functions while the spell is on the stack. “Entwine [cost]” means “You may choose all modes of this spell instead of just the number specified. If you do, you pay an additional [cost].” Using the entwine ability follows the rules for choosing modes and paying additional costs in rules 601.2b and 601.2f–h.

702.42b If the entwine cost was paid, follow the text of each of the modes in the order written on the card when the spell resolves.

702.43. Modular

702.43a Modular represents both a static ability and a triggered ability. “Modular N” means “This permanent enters the battlefield with N +1/+1 counters on it” and “When this permanent is put into a graveyard from the battlefield, you may put a +1/+1 counter on target artifact creature for each +1/+1 counter on this permanent.”

702.43b If a creature has multiple instances of modular, each one works separately.

702.44. Sunburst

702.44a Sunburst is a static ability that functions as an object is entering the battlefield. “Sunburst” means “If this object is entering the battlefield as a creature, ignoring any type-changing effects that would affect it, it enters the battlefield with a +1/+1 counter on it for each color of mana spent to cast it. Otherwise, it enters the battlefield with a charge counter on it for each color of mana spent to cast it.”

702.44b Sunburst adds counters only if the object with sunburst is entering the battlefield from the stack as a resolving spell and only if one or more colored mana was spent on its costs, including additional or alternative costs.

702.44c Sunburst can also be used to set a variable number for another ability. If the keyword is used in this way, it doesn’t matter whether the ability is on a creature spell or on a noncreature spell.
Example: The ability “Modular—Sunburst” means “This permanent enters the battlefield with a +1/+1 counter on it for each color of mana spent to cast it” and “When this permanent is put into a graveyard from the battlefield, you may put a +1/+1 counter on target artifact creature for each +1/+1 counter on this permanent.”

702.44d If an object has multiple instances of sunburst, each one works separately.

702.45. Bushido

702.45a Bushido is a triggered ability. “Bushido N” means “Whenever this creature blocks or becomes blocked, it gets +N/+N until end of turn.” (See rule 509, “Declare Blockers Step.”)

702.45b If a creature has multiple instances of bushido, each triggers separately.

702.46. Soulshift

702.46a Soulshift is a triggered ability. “Soulshift N” means “When this permanent is put into a graveyard from the battlefield, you may return target Spirit card with mana value N or less from your graveyard to your hand.”

702.46b If a permanent has multiple instances of soulshift, each triggers separately.

702.47. Splice

702.47a Splice is a static ability that functions while a card is in your hand. “Splice onto [quality] [cost]” means “You may reveal this card from your hand as you cast a [quality] spell. If you do, that spell gains the text of this card’s rules text and you pay [cost] as an additional cost to cast that spell.” Paying a card’s splice cost follows the rules for paying additional costs in rules 601.2b and 601.2f–h.
Example: Since the card with splice remains in the player’s hand, it can later be cast normally or spliced onto another spell. It can even be discarded to pay a “discard a card” cost of the spell it’s spliced onto.

702.47b You can’t choose to use a splice ability if you can’t make the required choices (targets, etc.) for that card’s rules text. You can’t splice any one card onto the same spell more than once. If you’re splicing more than one card onto a spell, reveal them all at once and choose the order in which their effects will happen. The effects of the main spell must happen first.

702.47c The spell has the characteristics of the main spell, plus the rules text of each of the spliced cards. This is a text-changing effect (see rule 612, “Text-Changing Effects”). The spell doesn’t gain any other characteristics (name, mana cost, color, supertypes, card types, subtypes, etc.) of the spliced cards. Text gained by the spell that refers to a card by name refers to the spell on the stack, not the card from which the text was copied.
Example: Glacial Ray is a red card with splice onto Arcane that reads, “Glacial Ray deals 2 damage to any target.” Suppose Glacial Ray is spliced onto Reach Through Mists, a blue spell. The spell is still blue, and Reach Through Mists deals the damage. This means that the ability can target a creature with protection from red and deal 2 damage to that creature.

702.47d Choose targets for the added text normally (see rule 601.2c). Note that a spell with one or more targets won’t resolve if all of its targets are illegal on resolution.

702.47e The spell loses any splice changes once it leaves the stack for any reason.

702.48. Offering

702.48a Offering is a static ability that functions while the spell with offering is on the stack. “[Subtype] offering” means “As an additional cost to cast this spell, you may sacrifice a [subtype] permanent. If you chose to pay the additional cost, this spell’s total cost is reduced by the sacrificed permanent’s mana cost, and you may cast this spell any time you could cast an instant.”

702.48b You choose which permanent to sacrifice as you make choices for the spell (see rule 601.2b), and you sacrifice that permanent as you pay the total cost (see rule 601.2h).

702.48c Generic mana in the sacrificed permanent’s mana cost reduces generic mana in the spell’s total cost. Colored and colorless mana in the sacrificed permanent’s mana cost reduces mana of the same type in spell’s total cost, and any excess reduces that much generic mana in spell’s total cost. (See rule 118.7.)

702.49. Ninjutsu

702.49a Ninjutsu is an activated ability that functions only while the card with ninjutsu is in a player’s hand. “Ninjutsu [cost]” means “[Cost], Reveal this card from your hand, Return an unblocked attacking creature you control to its owner’s hand: Put this card onto the battlefield from your hand tapped and attacking.”

702.49b The card with ninjutsu remains revealed from the time the ability is announced until the ability leaves the stack.

702.49c A ninjutsu ability may be activated only while a creature on the battlefield is unblocked (see rule 509.1h). The creature with ninjutsu is put onto the battlefield unblocked. It will be attacking the same player or planeswalker as the creature that was returned to its owner’s hand.

702.49d Commander ninjutsu is a variant of the ninjutsu ability that also functions while the card with commander ninjutsu is in the command zone. “Commander ninjutsu [cost]” means “[Cost], Reveal this card from your hand or from the command zone, Return an unblocked attacking creature you control to its owner’s hand: Put this card onto the battlefield tapped and attacking.”

702.50. Epic

702.50a Epic represents two spell abilities, one of which creates a delayed triggered ability. “Epic” means “For the rest of the game, you can’t cast spells,” and “At the beginning of each of your upkeeps for the rest of the game, copy this spell except for its epic ability. If the spell has any targets, you may choose new targets for the copy.” See rule 706.10.

702.50b A player can’t cast spells once a spell with epic they control resolves, but effects (such as the epic ability itself) can still put copies of spells onto the stack.

702.51. Convoke

702.51a Convoke is a static ability that functions while the spell with convoke is on the stack. “Convoke” means “For each colored mana in this spell’s total cost, you may tap an untapped creature of that color you control rather than pay that mana. For each generic mana in this spell’s total cost, you may tap an untapped creature you control rather than pay that mana.”

702.51b The convoke ability isn’t an additional or alternative cost and applies only after the total cost of the spell with convoke is determined.
Example: Heartless Summoning says, in part, “Creature spells you cast cost {2} less to cast.” You control Heartless Summoning and cast Siege Wurm, a spell with convoke that costs {5}{G}{G}. The total cost to cast Siege Wurm is {3}{G}{G}. After activating mana abilities, you pay that total cost. You may tap up to two green creatures and up to three other creatures to pay that cost, and the remainder is paid with mana.

702.51c A creature tapped to pay for mana in a spell’s total cost this way is said to have “convoked” that spell.

702.51d Multiple instances of convoke on the same spell are redundant.

702.52. Dredge

702.52a Dredge is a static ability that functions only while the card with dredge is in a player’s graveyard. “Dredge N” means “As long as you have at least N cards in your library, if you would draw a card, you may instead mill N cards and return this card from your graveyard to your hand.”

702.52b A player with fewer cards in their library than the number required by a dredge ability can’t mill any of them this way.

702.53. Transmute

702.53a Transmute is an activated ability that functions only while the card with transmute is in a player’s hand. “Transmute [cost]” means “[Cost], Discard this card: Search your library for a card with the same mana value as the discarded card, reveal that card, and put it into your hand. Then shuffle your library. Activate only as a sorcery.”

702.53b Although the transmute ability can be activated only if the card is in a player’s hand, it continues to exist while the object is on the battlefield and in all other zones. Therefore objects with transmute will be affected by effects that depend on objects having one or more activated abilities.

702.54. Bloodthirst

702.54a Bloodthirst is a static ability. “Bloodthirst N” means “If an opponent was dealt damage this turn, this permanent enters the battlefield with N +1/+1 counters on it.”

702.54b “Bloodthirst X” is a special form of bloodthirst. “Bloodthirst X” means “This permanent enters the battlefield with X +1/+1 counters on it, where X is the total damage your opponents have been dealt this turn.”

702.54c If an object has multiple instances of bloodthirst, each applies separately.

702.55. Haunt

702.55a Haunt is a triggered ability. “Haunt” on a permanent means “When this permanent is put into a graveyard from the battlefield, exile it haunting target creature.” “Haunt” on an instant or sorcery spell means “When this spell is put into a graveyard during its resolution, exile it haunting target creature.”

702.55b Cards that are in the exile zone as the result of a haunt ability “haunt” the creature targeted by that ability. The phrase “creature it haunts” refers to the object targeted by the haunt ability, regardless of whether or not that object is still a creature.

702.55c Triggered abilities of cards with haunt that refer to the haunted creature can trigger in the exile zone.

702.56. Replicate

702.56a Replicate is a keyword that represents two abilities. The first is a static ability that functions while the spell with replicate is on the stack. The second is a triggered ability that functions while the spell with replicate is on the stack. “Replicate [cost]” means “As an additional cost to cast this spell, you may pay [cost] any number of times” and “When you cast this spell, if a replicate cost was paid for it, copy it for each time its replicate cost was paid. If the spell has any targets, you may choose new targets for any of the copies.” Paying a spell’s replicate cost follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

702.56b If a spell has multiple instances of replicate, each is paid separately and triggers based on the payments made for it, not any other instance of replicate.

702.57. Forecast

702.57a A forecast ability is a special kind of activated ability that can be activated only from a player’s hand. It’s written “Forecast — [Activated ability].”

702.57b A forecast ability may be activated only during the upkeep step of the card’s owner and only once each turn. The controller of the forecast ability reveals the card with that ability from their hand as the ability is activated. That player plays with that card revealed in their hand until it leaves the player’s hand or until a step or phase that isn’t an upkeep step begins, whichever comes first.

702.58. Graft

702.58a Graft represents both a static ability and a triggered ability. “Graft N” means “This permanent enters the battlefield with N +1/+1 counters on it” and “Whenever another creature enters the battlefield, if this permanent has a +1/+1 counter on it, you may move a +1/+1 counter from this permanent onto that creature.”

702.58b If a permanent has multiple instances of graft, each one works separately.

702.59. Recover

702.59a Recover is a triggered ability that functions only while the card with recover is in a player’s graveyard. “Recover [cost]” means “When a creature is put into your graveyard from the battlefield, you may pay [cost]. If you do, return this card from your graveyard to your hand. Otherwise, exile this card.”

702.60. Ripple

702.60a Ripple is a triggered ability that functions only while the card with ripple is on the stack. “Ripple N” means “When you cast this spell, you may reveal the top N cards of your library, or, if there are fewer than N cards in your library, you may reveal all the cards in your library. If you reveal cards from your library this way, you may cast any of those cards with the same name as this spell without paying their mana costs, then put all revealed cards not cast this way on the bottom of your library in any order.”

702.60b If a spell has multiple instances of ripple, each triggers separately.

702.61. Split Second

702.61a Split second is a static ability that functions only while the spell with split second is on the stack. “Split second” means “As long as this spell is on the stack, players can’t cast other spells or activate abilities that aren’t mana abilities.”

702.61b Players may activate mana abilities and take special actions while a spell with split second is on the stack. Triggered abilities trigger and are put on the stack as normal while a spell with split second is on the stack.

702.61c Multiple instances of split second on the same spell are redundant.

702.62. Suspend

702.62a Suspend is a keyword that represents three abilities. The first is a static ability that functions while the card with suspend is in a player’s hand. The second and third are triggered abilities that function in the exile zone. “Suspend N—[cost]” means “If you could begin to cast this card by putting it onto the stack from your hand, you may pay [cost] and exile it with N time counters on it. This action doesn’t use the stack,” and “At the beginning of your upkeep, if this card is suspended, remove a time counter from it,” and “When the last time counter is removed from this card, if it’s exiled, play it without paying its mana cost if able. If you can’t, it remains exiled. If you cast a creature spell this way, it gains haste until you lose control of the spell or the permanent it becomes.”

702.62b A card is “suspended” if it’s in the exile zone, has suspend, and has a time counter on it.

702.62c While determining if you could begin to cast a card with suspend, take into consideration any effects that would prohibit that card from being cast.

702.62d Casting a spell as an effect of its suspend ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.63. Vanishing

702.63a Vanishing is a keyword that represents three abilities. “Vanishing N” means “This permanent enters the battlefield with N time counters on it,” “At the beginning of your upkeep, if this permanent has a time counter on it, remove a time counter from it,” and “When the last time counter is removed from this permanent, sacrifice it.”

702.63b Vanishing without a number means “At the beginning of your upkeep, if this permanent has a time counter on it, remove a time counter from it” and “When the last time counter is removed from this permanent, sacrifice it.”

702.63c If a permanent has multiple instances of vanishing, each works separately.

702.64. Absorb

702.64a Absorb is a static ability. “Absorb N” means “If a source would deal damage to this creature, prevent N of that damage.”

702.64b Each absorb ability can prevent only N damage from any one source at any one time. It will apply separately to damage from other sources, or to damage dealt by the same source at a different time.

702.64c If an object has multiple instances of absorb, each applies separately.

702.65. Aura Swap

702.65a Aura swap is an activated ability of some Aura cards. “Aura swap [cost]” means “[Cost]: You may exchange this permanent with an Aura card in your hand.”

702.65b If either half of the exchange can’t be completed, the ability has no effect.
Example: You activate the aura swap ability of an Aura. The only Aura card in your hand can’t enchant the permanent that’s enchanted by the Aura with aura swap. The ability has no effect.
Example: You activate the aura swap ability of an Aura that you control but you don’t own. The ability has no effect.

702.66. Delve

702.66a Delve is a static ability that functions while the spell with delve is on the stack. “Delve” means “For each generic mana in this spell’s total cost, you may exile a card from your graveyard rather than pay that mana.”

702.66b The delve ability isn’t an additional or alternative cost and applies only after the total cost of the spell with delve is determined.

702.66c Multiple instances of delve on the same spell are redundant.

702.67. Fortify

702.67a Fortify is an activated ability of Fortification cards. “Fortify [cost]” means “[Cost]: Attach this Fortification to target land you control. Activate only as a sorcery.”

702.67b For more information about Fortifications, see rule 301, “Artifacts.”

702.67c If a Fortification has multiple instances of fortify, any of its fortify abilities may be used.

702.68. Frenzy

702.68a Frenzy is a triggered ability. “Frenzy N” means “Whenever this creature attacks and isn’t blocked, it gets +N/+0 until end of turn.”

702.68b If a creature has multiple instances of frenzy, each triggers separately.

702.69. Gravestorm

702.69a Gravestorm is a triggered ability that functions on the stack. “Gravestorm” means “When you cast this spell, copy it for each permanent that was put into a graveyard from the battlefield this turn. If the spell has any targets, you may choose new targets for any of the copies.”

702.69b If a spell has multiple instances of gravestorm, each triggers separately.

702.70. Poisonous

702.70a Poisonous is a triggered ability. “Poisonous N” means “Whenever this creature deals combat damage to a player, that player gets N poison counters.” (For information about poison counters, see rule 104.3d.)

702.70b If a creature has multiple instances of poisonous, each triggers separately.

702.71. Transfigure

702.71a Transfigure is an activated ability. “Transfigure [cost]” means “[Cost], Sacrifice this permanent: Search your library for a creature card with the same mana value as this permanent and put it onto the battlefield. Then shuffle your library. Activate only as a sorcery.”

702.72. Champion

702.72a Champion represents two triggered abilities. “Champion an [object]” means “When this permanent enters the battlefield, sacrifice it unless you exile another [object] you control” and “When this permanent leaves the battlefield, return the exiled card to the battlefield under its owner’s control.”

702.72b The two abilities represented by champion are linked. See rule 607, “Linked Abilities.”

702.72c A permanent is “championed” by another permanent if the latter exiles the former as the direct result of a champion ability.

702.73. Changeling

702.73a Changeling is a characteristic-defining ability. “Changeling” means “This object is every creature type.” This ability works everywhere, even outside the game. See rule 604.3.

702.74. Evoke

702.74a Evoke represents two abilities: a static ability that functions in any zone from which the card with evoke can be cast and a triggered ability that functions on the battlefield. “Evoke [cost]” means “You may cast this card by paying [cost] rather than paying its mana cost” and “When this permanent enters the battlefield, if its evoke cost was paid, its controller sacrifices it.” Casting a spell for its evoke cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.75. Hideaway

702.75a Hideaway represents a static ability and a triggered ability. “Hideaway” means “This permanent enters the battlefield tapped” and “When this permanent enters the battlefield, look at the top four cards of your library. Exile one of them face down and put the rest on the bottom of your library in any order. The exiled card gains ‘Any player who has controlled the permanent that exiled this card may look at this card in the exile zone.’”

702.76. Prowl

702.76a Prowl is a static ability that functions on the stack. “Prowl [cost]” means “You may pay [cost] rather than pay this spell’s mana cost if a player was dealt combat damage this turn by a source that, at the time it dealt that damage, was under your control and had any of this spell’s creature types.” Casting a spell for its prowl cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.77. Reinforce

702.77a Reinforce is an activated ability that functions only while the card with reinforce is in a player’s hand. “Reinforce N—[cost]” means “[Cost], Discard this card: Put N +1/+1 counters on target creature.”

702.77b Although the reinforce ability can be activated only if the card is in a player’s hand, it continues to exist while the object is on the battlefield and in all other zones. Therefore objects with reinforce will be affected by effects that depend on objects having one or more activated abilities.

702.78. Conspire

702.78a Conspire is a keyword that represents two abilities. The first is a static ability that functions while the spell with conspire is on the stack. The second is a triggered ability that functions while the spell with conspire is on the stack. “Conspire” means “As an additional cost to cast this spell, you may tap two untapped creatures you control that each share a color with it” and “When you cast this spell, if its conspire cost was paid, copy it. If the spell has any targets, you may choose new targets for the copy.” Paying a spell’s conspire cost follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

702.78b If a spell has multiple instances of conspire, each is paid separately and triggers based on its own payment, not any other instance of conspire.

702.79. Persist

702.79a Persist is a triggered ability. “Persist” means “When this permanent is put into a graveyard from the battlefield, if it had no -1/-1 counters on it, return it to the battlefield under its owner’s control with a -1/-1 counter on it.”

702.80. Wither

702.80a Wither is a static ability. Damage dealt to a creature by a source with wither isn’t marked on that creature. Rather, it causes that source’s controller to put that many -1/-1 counters on that creature. See rule 120.3.

702.80b If a permanent leaves the battlefield before an effect causes it to deal damage, its last known information is used to determine whether it had wither.

702.80c The wither rules function no matter what zone an object with wither deals damage from.

702.80d Multiple instances of wither on the same object are redundant.

702.81. Retrace

702.81a Retrace appears on some instants and sorceries. It represents a static ability that functions while the card with retrace is in a player’s graveyard. “Retrace” means “You may cast this card from your graveyard by discarding a land card as an additional cost to cast it.” Casting a spell using its retrace ability follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

702.82. Devour

702.82a Devour is a static ability. “Devour N” means “As this object enters the battlefield, you may sacrifice any number of creatures. This permanent enters the battlefield with N +1/+1 counters on it for each creature sacrificed this way.”

702.82b Some objects have abilities that refer to the number of creatures the permanent devoured. “It devoured” means “sacrificed as a result of its devour ability as it entered the battlefield.”

702.83. Exalted

702.83a Exalted is a triggered ability. “Exalted” means “Whenever a creature you control attacks alone, that creature gets +1/+1 until end of turn.”

702.83b A creature “attacks alone” if it’s the only creature declared as an attacker in a given combat phase. See rule 506.5.

702.84. Unearth

702.84a Unearth is an activated ability that functions while the card with unearth is in a graveyard. “Unearth [cost]” means “[Cost]: Return this card from your graveyard to the battlefield. It gains haste. Exile it at the beginning of the next end step. If it would leave the battlefield, exile it instead of putting it anywhere else. Activate only as a sorcery.”

702.85. Cascade

702.85a Cascade is a triggered ability that functions only while the spell with cascade is on the stack. “Cascade” means “When you cast this spell, exile cards from the top of your library until you exile a nonland card whose mana value is less than this spell’s mana value. You may cast that card without paying its mana cost if the resulting spell’s mana value is less than this spell’s mana value. Then put all cards exiled this way that weren’t cast on the bottom of your library in a random order.”

702.85b If an effect allows a player to take an action with one or more of the exiled cards “as you cascade,” the player may take that action after they have finished exiling cards due to the cascade ability. This action is taken before choosing whether to cast the last exiled card or, if no appropriate card was exiled, before putting the exiled cards on the bottom of their library in a random order.

702.85c If a spell has multiple instances of cascade, each triggers separately.

702.86. Annihilator

702.86a Annihilator is a triggered ability. “Annihilator N” means “Whenever this creature attacks, defending player sacrifices N permanents.”

702.86b If a creature has multiple instances of annihilator, each triggers separately.

702.87. Level Up

702.87a Level up is an activated ability. “Level up [cost]” means “[Cost]: Put a level counter on this permanent. Activate only as a sorcery.”

702.87b Each card printed with a level up ability is known as a leveler card. It has a nonstandard layout and includes two level symbols that are themselves keyword abilities. See rule 710, “Leveler Cards.”

702.88. Rebound

702.88a Rebound appears on some instants and sorceries. It represents a static ability that functions while the spell is on the stack and may create a delayed triggered ability. “Rebound” means “If this spell was cast from your hand, instead of putting it into your graveyard as it resolves, exile it and, at the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.”

702.88b Casting a spell as an effect of its rebound ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.88c Multiple instances of rebound on the same spell are redundant.

702.89. Totem Armor

702.89a Totem armor is a static ability that appears on some Auras. “Totem armor” means “If enchanted permanent would be destroyed, instead remove all damage marked on it and destroy this Aura.”

702.90. Infect

702.90a Infect is a static ability.

702.90b Damage dealt to a player by a source with infect doesn’t cause that player to lose life. Rather, it causes that source’s controller to give the player that many poison counters. See rule 120.3.

702.90c Damage dealt to a creature by a source with infect isn’t marked on that creature. Rather, it causes that source’s controller to put that many -1/-1 counters on that creature. See rule 120.3.

702.90d If a permanent leaves the battlefield before an effect causes it to deal damage, its last known information is used to determine whether it had infect.

702.90e The infect rules function no matter what zone an object with infect deals damage from.

702.90f Multiple instances of infect on the same object are redundant.

702.91. Battle Cry

702.91a Battle cry is a triggered ability. “Battle cry” means “Whenever this creature attacks, each other attacking creature gets +1/+0 until end of turn.”

702.91b If a creature has multiple instances of battle cry, each triggers separately.

702.92. Living Weapon

702.92a Living weapon is a triggered ability. “Living weapon” means “When this Equipment enters the battlefield, create a 0/0 black Germ creature token, then attach this Equipment to it.”

702.93. Undying

702.93a Undying is a triggered ability. “Undying” means “When this permanent is put into a graveyard from the battlefield, if it had no +1/+1 counters on it, return it to the battlefield under its owner’s control with a +1/+1 counter on it.”

702.94. Miracle

702.94a Miracle is a static ability linked to a triggered ability. (See rule 603.11.) “Miracle [cost]” means “You may reveal this card from your hand as you draw it if it’s the first card you’ve drawn this turn. When you reveal this card this way, you may cast it by paying [cost] rather than its mana cost.”

702.94b If a player chooses to reveal a card using its miracle ability, they play with that card revealed until that card leaves their hand, that ability resolves, or that ability otherwise leaves the stack. (See rule 701.16a.)

702.95. Soulbond

702.95a Soulbond is a keyword that represents two triggered abilities. “Soulbond” means “When this creature enters the battlefield, if you control both this creature and another creature and both are unpaired, you may pair this creature with another unpaired creature you control for as long as both remain creatures on the battlefield under your control” and “Whenever another creature enters the battlefield under your control, if you control both that creature and this one and both are unpaired, you may pair that creature with this creature for as long as both remain creatures on the battlefield under your control.”

702.95b A creature becomes “paired” with another as the result of a soulbond ability. Abilities may refer to a paired creature, the creature another creature is paired with, or whether a creature is paired. An “unpaired” creature is one that is not paired.

702.95c When the soulbond ability resolves, if either object that would be paired is no longer a creature, no longer on the battlefield, or no longer under the control of the player who controls the soulbond ability, neither object becomes paired.

702.95d A creature can be paired with only one other creature.

702.95e A paired creature becomes unpaired if any of the following occur: another player gains control of it or the creature it’s paired with; it or the creature it’s paired with stops being a creature; or it or the creature it’s paired with leaves the battlefield.

702.96. Overload

702.96a Overload is a keyword that represents two static abilities that function while the spell with overload is on the stack. Overload [cost] means “You may choose to pay [cost] rather than pay this spell’s mana cost” and “If you chose to pay this spell’s overload cost, change its text by replacing all instances of the word ‘target’ with the word ‘each.’” Casting a spell using its overload ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.96b If a player chooses to pay the overload cost of a spell, that spell won’t require any targets. It may affect objects that couldn’t be chosen as legal targets if the spell were cast without its overload cost being paid.

702.96c Overload’s second ability creates a text-changing effect. See rule 612, “Text-Changing Effects.”

702.97. Scavenge

702.97a Scavenge is an activated ability that functions only while the card with scavenge is in a graveyard. “Scavenge [cost]” means “[Cost], Exile this card from your graveyard: Put a number of +1/+1 counters equal to the power of the card you exiled on target creature. Activate only as a sorcery.”

702.98. Unleash

702.98a Unleash is a keyword that represents two static abilities. “Unleash” means “You may have this permanent enter the battlefield with an additional +1/+1 counter on it” and “This permanent can’t block as long as it has a +1/+1 counter on it.”

702.99. Cipher

702.99a Cipher appears on some instants and sorceries. It represents two abilities. The first is a spell ability that functions while the spell with cipher is on the stack. The second is a static ability that functions while the card with cipher is in the exile zone. “Cipher” means “If this spell is represented by a card, you may exile this card encoded on a creature you control” and “For as long as this card is encoded on that creature, that creature has ‘Whenever this creature deals combat damage to a player, you may copy the encoded card and you may cast the copy without paying its mana cost.’”

702.99b The term “encoded” describes the relationship between the card with cipher while in the exile zone and the creature chosen when the spell represented by that card resolves.

702.99c The card with cipher remains encoded on the chosen creature as long as the card with cipher remains exiled and the creature remains on the battlefield. The card remains encoded on that object even if it changes controller or stops being a creature, as long as it remains on the battlefield.

702.100. Evolve

702.100a Evolve is a triggered ability. “Evolve” means “Whenever a creature enters the battlefield under your control, if that creature’s power is greater than this creature’s power and/or that creature’s toughness is greater than this creature’s toughness, put a +1/+1 counter on this creature.”

702.100b A creature “evolves” when one or more +1/+1 counters are put on it as a result of its evolve ability resolving.

702.100c A creature can’t have a greater power or toughness than a noncreature permanent.

702.100d If a creature has multiple instances of evolve, each triggers separately.

702.101. Extort

702.101a Extort is a triggered ability. “Extort” means “Whenever you cast a spell, you may pay {W/B}. If you do, each opponent loses 1 life and you gain life equal to the total life lost this way.”

702.101b If a permanent has multiple instances of extort, each triggers separately.

702.102. Fuse

702.102a Fuse is a static ability found on some split cards (see rule 708, “Split Cards”) that applies while the card with fuse is in a player’s hand. If a player casts a split card with fuse from their hand, the player may choose to cast both halves of that split card rather than choose one half. This choice is made before putting the split card with fuse onto the stack. The resulting spell is a fused split spell.

702.102b A fused split spell has the combined characteristics of its two halves. (See rule 708.4.)

702.102c The total cost of a fused split spell includes the mana cost of each half.

702.102d As a fused split spell resolves, the controller of the spell follows the instructions of the left half and then follows the instructions of the right half.

702.103. Bestow

702.103a Bestow represents a static ability that functions in any zone from which you could play the card it’s on. “Bestow [cost]” means “As you cast this spell, you may choose to cast it bestowed. If you do, you pay [cost] rather than its mana cost.” Casting a spell using its bestow ability follows the rules for paying alternative costs (see 601.2b and 601.2f–h).

702.103b As a spell cast bestowed is put onto the stack, it becomes an Aura enchantment and gains enchant creature. It is a bestowed Aura spell, and the permanent it becomes as it resolves will be a bestowed Aura. These effects last until the spell or the permanent it becomes ceases to be bestowed (see rules 702.103d–f). Because the spell is an Aura spell, its controller must choose a legal target for that spell as defined by its enchant creature ability and rule 601.2c. See also rule 303.4.

702.103c When casting a spell bestowed, only its characteristics as modified by the bestow ability are evaluated to determine if it can be cast.
Example: Aether Storm is an enchantment with the ability “Creature spells can’t be cast.” This effect doesn’t stop a creature card with bestow from being cast bestowed.
Example: Garruk’s Horde says, in part, “You may cast creature spells from the top of your library.” If you control Garruk’s Horde and the top card of your library is a creature card with bestow, you can cast it as a creature spell, but you can’t cast it bestowed.

702.103d As a bestowed Aura spell begins resolving, if its target is illegal, it ceases to be bestowed and the effect making it an Aura spell ends. It continues resolving as a creature spell and will be put onto the battlefield under the control of the spell’s controller. This is an exception to rule 608.3a.

702.103e If a bestowed Aura becomes unattached, it ceases to be bestowed. If a bestowed Aura is attached to an illegal object or player, it becomes unattached and ceases to be bestowed. This is an exception to rule 704.5m.

702.103f If a bestowed Aura phases in unattached, it ceases to be bestowed. See rule 702.26, “Phasing.”

702.104. Tribute

702.104a Tribute is a static ability that functions as the creature with tribute is entering the battlefield. “Tribute N” means “As this creature enters the battlefield, choose an opponent. That player may put an additional N +1/+1 counters on it as it enters the battlefield.”

702.104b Objects with tribute have triggered abilities that check “if tribute wasn’t paid.” This condition is true if the opponent chosen as a result of the tribute ability didn’t have the creature enter the battlefield with +1/+1 counters as specified by the creature’s tribute ability.

702.105. Dethrone

702.105a Dethrone is a triggered ability. “Dethrone” means “Whenever this creature attacks the player with the most life or tied for most life, put a +1/+1 counter on this creature.”

702.105b If a creature has multiple instances of dethrone, each triggers separately.

702.106. Hidden Agenda

702.106a Hidden agenda is a static ability that functions as a conspiracy card with hidden agenda is put into the command zone. “Hidden agenda” means “As you put this conspiracy card into the command zone, turn it face down and secretly choose a card name.”

702.106b To secretly choose a card name, note that name on a piece of paper kept with the face-down conspiracy card.

702.106c Any time you have priority, you may turn a face-down conspiracy card you control in the command zone face up. This is a special action. Doing so will reveal the chosen name. See rule 116.2j.

702.106d Hidden agenda and another ability of the object with hidden agenda that refers to “the chosen name” are linked. The second ability refers only to the card name chosen as a result of that object’s hidden agenda ability. See rule 607.2d.

702.106e If a player leaves the game, all face-down conspiracy cards controlled by that player must be revealed to all players. At the end of each game, all face-down conspiracy cards must be revealed to all players.

702.106f Double agenda is a variant of the hidden agenda ability. As you put a conspiracy card with double agenda into the command zone, you secretly name two different cards rather than one. You don’t reveal that more than one name was secretly chosen until you reveal the chosen names.

702.107. Outlast

702.107a Outlast is an activated ability. “Outlast [cost]” means “[Cost], {T}: Put a +1/+1 counter on this creature. Activate only as a sorcery.”

702.108. Prowess

702.108a Prowess is a triggered ability. “Prowess” means “Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.”

702.108b If a creature has multiple instances of prowess, each triggers separately.

702.109. Dash

702.109a Dash represents three abilities: two static abilities that function while the card with dash is on the stack, one of which may create a delayed triggered ability, and a static ability that functions while the object with dash is on the battlefield. “Dash [cost]” means “You may cast this card by paying [cost] rather than its mana cost,” “If this spell’s dash cost was paid, return the permanent this spell becomes to its owner’s hand at the beginning of the next end step,” and “As long as this permanent’s dash cost was paid, it has haste.” Casting a spell for its dash cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.110. Exploit

702.110a Exploit is a triggered ability. “Exploit” means “When this creature enters the battlefield, you may sacrifice a creature.”

702.110b A creature with exploit “exploits a creature” when the controller of the exploit ability sacrifices a creature as that ability resolves.

702.111. Menace

702.111a Menace is an evasion ability.

702.111b A creature with menace can’t be blocked except by two or more creatures. (See rule 509, “Declare Blockers Step.”)

702.111c Multiple instances of menace on the same creature are redundant.

702.112. Renown

702.112a Renown is a triggered ability. “Renown N” means “When this creature deals combat damage to a player, if it isn’t renowned, put N +1/+1 counters on it and it becomes renowned.”

702.112b Renowned is a designation that has no rules meaning other than to act as a marker that the renown ability and other spells and abilities can identify. Only permanents can be or become renowned. Once a permanent becomes renowned, it stays renowned until it leaves the battlefield. Renowned is neither an ability nor part of the permanent’s copiable values.

702.112c If a creature has multiple instances of renown, each triggers separately. The first such ability to resolve will cause the creature to become renowned, and subsequent abilities will have no effect. (See rule 603.4)

702.113. Awaken

702.113a Awaken appears on some instants and sorceries. It represents two abilities: a static ability that functions while the spell with awaken is on the stack and a spell ability. “Awaken N—[cost]” means “You may pay [cost] rather than pay this spell’s mana cost as you cast this spell” and “If this spell’s awaken cost was paid, put N +1/+1 counters on target land you control. That land becomes a 0/0 Elemental creature with haste. It’s still a land.” Casting a spell using its awaken ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.113b The controller of a spell with awaken chooses the target of the awaken spell ability only if that player chose to pay the spell’s awaken cost. Otherwise the spell is cast as if it didn’t have that target.

702.114. Devoid

702.114a Devoid is a characteristic-defining ability. “Devoid” means “This object is colorless.” This ability functions everywhere, even outside the game. See rule 604.3.

702.115. Ingest

702.115a Ingest is a triggered ability. “Ingest” means “Whenever this creature deals combat damage to a player, that player exiles the top card of their library.”

702.115b If a creature has multiple instances of ingest, each triggers separately.

702.116. Myriad

702.116a Myriad is a triggered ability that may also create a delayed triggered ability. “Myriad” means “Whenever this creature attacks, for each opponent other than defending player, you may create a token that’s a copy of this creature that’s tapped and attacking that player or a planeswalker they control. If one or more tokens are created this way, exile the tokens at end of combat.”

702.116b If a creature has multiple instances of myriad, each triggers separately.

702.117. Surge

702.117a Surge is a static ability that functions while the spell with surge is on the stack. “Surge [cost]” means “You may pay [cost] rather than pay this spell’s mana cost as you cast this spell if you or one of your teammates has cast another spell this turn.” Casting a spell for its surge cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.118. Skulk

702.118a Skulk is an evasion ability.

702.118b A creature with skulk can’t be blocked by creatures with greater power. (See rule 509, “Declare Blockers Step.”)

702.118c Multiple instances of skulk on the same creature are redundant.

702.119. Emerge

702.119a Emerge represents two static abilities that function while the spell with emerge is on the stack. “Emerge [cost]” means “You may cast this spell by paying [cost] and sacrificing a creature rather than paying its mana cost” and “If you chose to pay this spell’s emerge cost, its total cost is reduced by an amount of generic mana equal to the sacrificed creature’s mana value.” Casting a spell using its emerge ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.119b You choose which creature to sacrifice as you choose to pay a spell’s emerge cost (see rule 601.2b), and you sacrifice that creature as you pay the total cost (see rule 601.2h).

702.120. Escalate

702.120a Escalate is a static ability of modal spells (see rule 700.2) that functions while the spell with escalate is on the stack. “Escalate [cost]” means “For each mode you choose beyond the first as you cast this spell, you pay an additional [cost].” Paying a spell’s escalate cost follows the rules for paying additional costs in rules 601.2f–h.

702.121. Melee

702.121a Melee is a triggered ability. “Melee” means “Whenever this creature attacks, it gets +1/+1 until end of turn for each opponent you attacked with a creature this combat.”

702.121b If a creature has multiple instances of melee, each triggers separately.

702.122. Crew

702.122a Crew is an activated ability of Vehicle cards. “Crew N” means “Tap any number of untapped creatures you control with total power N or greater: This permanent becomes an artifact creature until end of turn.”

702.122b A creature “crews a Vehicle” when it’s tapped to pay the cost to activate a Vehicle’s crew ability.

702.122c If an effect states that a creature “can’t crew Vehicles,” that creature can’t be tapped to pay the crew cost of a Vehicle.

702.123. Fabricate

702.123a Fabricate is a triggered ability. “Fabricate N” means “When this permanent enters the battlefield, you may put N +1/+1 counters on it. If you don’t, create N 1/1 colorless Servo artifact creature tokens.”

702.123b If a permanent has multiple instances of fabricate, each triggers separately.

702.124. Partner

702.124a Partner is an ability that modifies the rules for deck construction in the Commander variant (see rule 903), and it functions before the game begins. Rather than a single legendary creature card, you may designate two legendary creature cards as your commander if each has partner.

702.124b Your deck must contain exactly 100 cards, including its two commanders. Both commanders begin the game in the command zone.

702.124c A rule or effect that refers to your commander’s color identity refers to the combined color identities of your two commanders. See rule 903.4.

702.124d Except for determining the color identity of your commander, the two commanders function independently. When casting a commander with partner, ignore how many times your other commander has been cast (see rule 903.6). When determining whether a player has been dealt 21 or more combat damage by the same commander, consider damage from each of your two commanders separately (see rule 903.10a).

702.124e If an effect refers to your commander while you have two commanders, it refers to either one. If an effect causes you to perform an action on your commander and it could affect both, you choose which it refers to at the time the effect is applied.

702.124f “Partner with [name]” is a variant of the partner ability. “Partner with [name]” represents two abilities. One is a static ability that modifies the rules for deck construction. Rather than a single legendary creature card, you may designate two legendary creature cards as your commander if each has a “partner with [name]” ability with the other’s name. You can’t designate two legendary cards as your commander if one has a “partner with [name]” ability and the other isn’t the named card. The other ability represented by “partner with [name]” is a triggered ability that means “When this permanent enters the battlefield, target player may search their library for a card named [name], reveal it, put it into their hand, then shuffle their library.”

702.125. Undaunted

702.125a Undaunted is a static ability that functions while the spell with undaunted is on the stack. Undaunted means “This spell costs {1} less to cast for each opponent you have.”

702.125b Players who have left the game are not counted when determining how many opponents you have.

702.125c If a spell has multiple instances of undaunted, each of them applies.

702.126. Improvise

702.126a Improvise is a static ability that functions while the spell with improvise is on the stack. “Improvise” means “For each generic mana in this spell’s total cost, you may tap an untapped artifact you control rather than pay that mana.”

702.126b The improvise ability isn’t an additional or alternative cost and applies only after the total cost of the spell with improvise is determined.

702.126c Multiple instances of improvise on the same spell are redundant.

702.127. Aftermath

702.127a Aftermath is an ability found on some split cards (see rule 708, “Split Cards”). It represents three static abilities. “Aftermath” means “You may cast this half of this split card from your graveyard,” “This half of this split card can’t be cast from any zone other than a graveyard,” and “If this spell was cast from a graveyard, exile it instead of putting it anywhere else any time it would leave the stack.”

702.128. Embalm

702.128a Embalm is an activated ability that functions while the card with embalm is in a graveyard. “Embalm [cost]” means “[Cost], Exile this card from your graveyard: Create a token that’s a copy of this card, except it’s white, it has no mana cost, and it’s a Zombie in addition to its other types. Activate only as a sorcery.”

702.128b A token is “embalmed” if it’s created by a resolving embalm ability.

702.129. Eternalize

702.129a Eternalize is an activated ability that functions while the card with eternalize is in a graveyard. “Eternalize [cost]” means “[Cost], Exile this card from your graveyard: Create a token that’s a copy of this card, except it’s black, it’s 4/4, it has no mana cost, and it’s a Zombie in addition to its other types. Activate only as a sorcery.”

702.130. Afflict

702.130a Afflict is a triggered ability. “Afflict N” means “Whenever this creature becomes blocked, defending player loses N life.”

702.130b If a creature has multiple instances of afflict, each triggers separately.

702.131. Ascend

702.131a Ascend on an instant or sorcery spell represents a spell ability. It means “If you control ten or more permanents and you don’t have the city’s blessing, you get the city’s blessing for the rest of the game.”

702.131b Ascend on a permanent represents a static ability. It means “Any time you control ten or more permanents and you don’t have the city’s blessing, you get the city’s blessing for the rest of the game.”

702.131c The city’s blessing is a designation that has no rules meaning other than to act as a marker that other rules and effects can identify. Any number of players may have the city’s blessing at the same time.

702.131d After a player gets the city’s blessing, continuous effects are reapplied before the game checks to see if the game state or preceding events have matched any trigger conditions.

702.132. Assist

702.132a Assist is a static ability that modifies the rules of paying for the spell with assist (see rules 601.2g-h). If the total cost to cast a spell with assist includes a generic mana component, before you activate mana abilities while casting it, you may choose another player. That player has a chance to activate mana abilities. Once that player chooses not to activate any more mana abilities, you have a chance to activate mana abilities. Before you begin to pay the total cost of the spell, the player you chose may pay for any amount of the generic mana in the spell’s total cost.

702.133. Jump-Start

702.133a Jump-start appears on some instants and sorceries. It represents two static abilities: one that functions while the card is in a player’s graveyard and another that functions while the card is on the stack. “Jump-start” means “You may cast this card from your graveyard if the resulting spell is an instant or sorcery spell by discarding a card as an additional cost to cast it” and “If this spell was cast using its jump-start ability, exile this card instead of putting it anywhere else any time it would leave the stack.” Casting a spell using its jump-start ability follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

702.134. Mentor

702.134a Mentor is a triggered ability. “Mentor” means “Whenever this creature attacks, put a +1/+1 counter on target attacking creature with power less than this creature’s power.”

702.134b If a creature has multiple instances of mentor, each triggers separately.

702.135. Afterlife

702.135a Afterlife is a triggered ability. “Afterlife N” means “When this permanent is put into a graveyard from the battlefield, create N 1/1 white and black Spirit creature tokens with flying.”

702.135b If a permanent has multiple instances of afterlife, each triggers separately.

702.136. Riot

702.136a Riot is a static ability. “Riot” means “You may have this permanent enter the battlefield with an additional +1/+1 counter on it. If you don’t, it gains haste.”

702.136b If a permanent has multiple instances of riot, each works separately.

702.137. Spectacle

702.137a Spectacle is a static ability that functions on the stack. “Spectacle [cost]” means “You may pay [cost] rather than pay this spell’s mana cost if an opponent lost life this turn.” Casting a spell for its spectacle cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.138. Escape

702.138a Escape represents a static ability that functions while the card with escape is in a player’s graveyard. “Escape [cost]” means “You may cast this card from your graveyard by paying [cost] rather than paying its mana cost.” Casting a spell using its escape ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.138b A spell or permanent “escaped” if that spell or the spell that became that permanent as it resolved was cast from a graveyard with an escape ability.

702.138c An ability that reads “[This permanent] escapes with . . .” means “If this permanent escaped, it enters the battlefield with . . .” That ability may have a triggered ability linked to it that triggers “When it enters the battlefield this way.” (See rule 603.11.) Such a triggered ability triggers when that permanent enters the battlefield after its replacement effect was applied, even if that replacement effect had no effect.

702.139. Companion

702.139a Companion is a keyword ability that functions outside the game. It’s written as “Companion—[Condition].” Before the game begins, you may reveal one card you own from outside the game with a companion ability whose condition is fulfilled by your starting deck. (See rule 103.2b.) Once during the game, any time you have priority and the stack is empty, but only during a main phase of your turn, you may pay {3} and put that card into your hand. This is a special action that doesn’t use the stack (see rule 116.2g). This is a change from previous rules.

702.139b If a companion ability refers to your starting deck, it refers to your deck after you’ve set aside any sideboard cards. In a Commander game, this is also before you’ve set aside your commander.

702.139c Once you take the special action and put the card with companion into your hand, it remains in the game until the game ends.

702.140. Mutate

702.140a Mutate appears on some creature cards. It represents a static ability that functions while the spell with mutate is on the stack. “Mutate [cost]” means “You may pay [cost] rather than pay this spell’s mana cost. If you do, it becomes a mutating creature spell and targets a non-Human creature with the same owner as this spell.” Casting a spell using its mutate ability follows the rules for paying alternative costs (see 601.2b and 601.2f–h).

702.140b As a mutating creature spell begins resolving, if its target is illegal, it ceases to be a mutating creature spell and continues resolving as a creature spell and will be put onto the battlefield under the control of the spell’s controller.

702.140c As a mutating creature spell resolves, if its target is legal, it doesn’t enter the battlefield. Rather, it merges with the target creature and becomes one object represented by more than one card or token (see rule 721, “Merging with Permanents”). The spell’s controller chooses whether the spell is put on top of the creature or on the bottom. The resulting permanent is a mutated permanent.

702.140d An ability that triggers whenever a creature mutates triggers when a spell merges with a creature as a result of a resolving mutating creature spell.

702.140e A mutated permanent has all abilities of each card and token that represents it. Its other characteristics are derived from the topmost card or token.

702.140f Any effect that refers to or modifies the mutating creature spell refers to or modifies the mutated permanent it merges with as it resolves.

702.141. Encore

702.141a Encore is an activated ability that functions while the card with encore is in a graveyard. “Encore [cost]” means “[Cost], Exile this card from your graveyard: For each opponent, create a token that’s a copy of this card that attacks that opponent this turn if able. The tokens gain haste. Sacrifice them at the beginning of the next end step. Activate only as a sorcery.”

702.142. Boast

702.142a A boast ability is a special kind of activated ability. “Boast — [Cost]: [Effect]” means “[Cost]: [Effect]. Activate this ability only if this creature attacked this turn and only once each turn.”

702.142b Effects may refer to boast abilities. If an effect refers to a creature boasting, it means its boast ability being activated.

702.143. Foretell

702.143a Foretell is a keyword that functions while the card with foretell is in a player’s hand. Any time a player has priority during their turn, that player may pay {2} and exile a card with foretell from their hand face down. That player may look at that card as long as it remains in exile. They may cast that card after the current turn has ended by paying any foretell cost it has rather than paying that spell’s mana cost. Casting a spell this way follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

702.143b Exiling a card using its foretell ability is a special action, which doesn’t use the stack. See rule 116, “Special Actions.”

702.143c If an effect refers to foretelling a card, it means performing the special action associated with a foretell ability. If an effect refers to a card or spell that was foretold, it means a card put in the exile zone as a result of the special action associated with a foretell ability, or a spell that was a foretold card before it was cast, even if it was cast for a cost other than a foretell cost.

702.143d If an effect states that a card in exile becomes foretold, that card becomes a foretold card. That effect may give the card a foretell cost. That card may be cast for any foretell cost it has after the turn it became a foretold card has ended, even if the resulting spell doesn’t have foretell.

702.143e If a player owns multiple foretold cards in exile, they must ensure that those cards can be easily differentiated from each other and from any other face-down cards in exile which that player owns. This includes knowing both the order in which those cards were put into exile and any foretell costs other than their printed foretell costs those cards may have.

702.143f If a player leaves the game, all face-down foretold cards that player owns must be revealed to all players. At the end of each game, all face-down foretold cards must be revealed to all players.

702.144. Demonstrate

702.144a Demonstrate is a triggered ability. “Demonstrate” means “When you cast this spell, you may copy it and you may choose new targets for the copy. If you copy the spell, choose an opponent. That player copies the spell and may choose new targets for that copy.”

703. Turn-Based Actions

703.1. Turn-based actions are game actions that happen automatically when certain steps or phases begin, or when each step and phase ends. Turn-based actions don’t use the stack.

703.1a Abilities that watch for a specified step or phase to begin are triggered abilities, not turn-based actions. (See rule 603, “Handling Triggered Abilities.”)

703.2. Turn-based actions are not controlled by any player.

703.3. Whenever a step or phase begins, if it’s a step or phase that has any turn-based action associated with it, those turn-based actions are automatically dealt with first. This happens before state-based actions are checked, before triggered abilities are put on the stack, and before players receive priority.

703.4. The turn-based actions are as follows:

703.4a Immediately after the untap step begins, all phased-in permanents with phasing that the active player controls phase out, and all phased-out permanents that the active player controlled when they phased out phase in. This all happens simultaneously. See rule 502.1.

703.4b Immediately after the phasing action has been completed during the untap step, the active player determines which permanents they control will untap. Then they untap them all simultaneously. See rule 502.2.

703.4c Immediately after the draw step begins, the active player draws a card. See rule 504.1.

703.4d In an Archenemy game (see rule 904), immediately after the archenemy’s precombat main phase begins, that player sets the top card of their scheme deck in motion. See rule 701.25.

703.4e Immediately after a player’s precombat main phase begins, that player puts a lore counter on each Saga enchantment they control. In an Archenemy game, this happens after the archenemy’s scheme action. See rule 714, “Saga Cards.”

703.4f Immediately after the beginning of combat step begins, if the game being played is a multiplayer game in which the active player’s opponents don’t all automatically become defending players, the active player chooses one of their opponents. That player becomes the defending player. See rule 507.1.

703.4g Immediately after the declare attackers step begins, the active player declares attackers. See rule 508.1.

703.4h Immediately after the declare blockers step begins, the defending player declares blockers. See rule 509.1.

703.4i Immediately after blockers have been declared during the declare blockers step, for each attacking creature that’s become blocked by multiple creatures, the active player announces the damage assignment order among the blocking creatures. See rule 509.2.

703.4j Immediately after the active player has announced damage assignment orders (if necessary) during the declare blockers step, for each creature that’s blocking multiple creatures, the defending player announces the damage assignment order among the attacking creatures. See rule 509.3.

703.4k Immediately after the combat damage step begins, each player in APNAP order announces how each attacking or blocking creature they control assigns its combat damage. See rule 510.1.

703.4m Immediately after combat damage has been assigned during the combat damage step, all combat damage is dealt simultaneously. See rule 510.2.

703.4n Immediately after the cleanup step begins, if the active player’s hand contains more cards than their maximum hand size (normally seven), they discard enough cards to reduce their hand size to that number. See rule 514.1.

703.4p Immediately after the active player has discarded cards (if necessary) during the cleanup step, all damage is removed from permanents and all “until end of turn” and “this turn” effects end. These actions happen simultaneously. See rule 514.2.

703.4q When each step or phase ends, any unused mana left in a player’s mana pool empties. See rule 500.4.

704. State-Based Actions

704.1. State-based actions are game actions that happen automatically whenever certain conditions (listed below) are met. State-based actions don’t use the stack.

704.1a Abilities that watch for a specified game state are triggered abilities, not state-based actions. (See rule 603, “Handling Triggered Abilities.”)

704.2. State-based actions are checked throughout the game and are not controlled by any player.

704.3. Whenever a player would get priority (see rule 117, “Timing and Priority”), the game checks for any of the listed conditions for state-based actions, then performs all applicable state-based actions simultaneously as a single event. If any state-based actions are performed as a result of a check, the check is repeated; otherwise all triggered abilities that are waiting to be put on the stack are put on the stack, then the check is repeated. Once no more state-based actions have been performed as the result of a check and no triggered abilities are waiting to be put on the stack, the appropriate player gets priority. This process also occurs during the cleanup step (see rule 514), except that if no state-based actions are performed as the result of the step’s first check and no triggered abilities are waiting to be put on the stack, then no player gets priority and the step ends.

704.4. Unlike triggered abilities, state-based actions pay no attention to what happens during the resolution of a spell or ability.
Example: A player controls a creature with the ability “This creature’s power and toughness are each equal to the number of cards in your hand” and casts a spell whose effect is “Discard your hand, then draw seven cards.” The creature will temporarily have toughness 0 in the middle of the spell’s resolution but will be back up to toughness 7 when the spell finishes resolving. Thus the creature will survive when state-based actions are checked. In contrast, an ability that triggers when the player has no cards in hand goes on the stack after the spell resolves, because its trigger event happened during resolution.

704.5. The state-based actions are as follows:

704.5a If a player has 0 or less life, that player loses the game.

704.5b If a player attempted to draw a card from a library with no cards in it since the last time state-based actions were checked, that player loses the game.

704.5c If a player has ten or more poison counters, that player loses the game. Ignore this rule in Two-Headed Giant games; see rule 704.6b instead.

704.5d If a token is in a zone other than the battlefield, it ceases to exist.

704.5e If a copy of a spell is in a zone other than the stack, it ceases to exist. If a copy of a card is in any zone other than the stack or the battlefield, it ceases to exist.

704.5f If a creature has toughness 0 or less, it’s put into its owner’s graveyard. Regeneration can’t replace this event.

704.5g If a creature has toughness greater than 0, it has damage marked on it, and the total damage marked on it is greater than or equal to its toughness, that creature has been dealt lethal damage and is destroyed. Regeneration can replace this event.

704.5h If a creature has toughness greater than 0, and it’s been dealt damage by a source with deathtouch since the last time state-based actions were checked, that creature is destroyed. Regeneration can replace this event.

704.5i If a planeswalker has loyalty 0, it’s put into its owner’s graveyard.

704.5j If a player controls two or more legendary permanents with the same name, that player chooses one of them, and the rest are put into their owners’ graveyards. This is called the “legend rule.”

704.5k If two or more permanents have the supertype world, all except the one that has had the world supertype for the shortest amount of time are put into their owners’ graveyards. In the event of a tie for the shortest amount of time, all are put into their owners’ graveyards. This is called the “world rule.”

704.5m If an Aura is attached to an illegal object or player, or is not attached to an object or player, that Aura is put into its owner’s graveyard.

704.5n If an Equipment or Fortification is attached to an illegal permanent or to a player, it becomes unattached from that permanent or player. It remains on the battlefield.

704.5p If a creature is attached to an object or player, it becomes unattached and remains on the battlefield. Similarly, if a permanent that’s neither an Aura, an Equipment, nor a Fortification is attached to an object or player, it becomes unattached and remains on the battlefield.

704.5q If a permanent has both a +1/+1 counter and a -1/-1 counter on it, N +1/+1 and N -1/-1 counters are removed from it, where N is the smaller of the number of +1/+1 and -1/-1 counters on it.

704.5r If a permanent with an ability that says it can’t have more than N counters of a certain kind on it has more than N counters of that kind on it, all but N of those counters are removed from it.

704.5s If the number of lore counters on a Saga permanent is greater than or equal to its final chapter number and it isn’t the source of a chapter ability that has triggered but not yet left the stack, that Saga’s controller sacrifices it. See rule 714, “Saga Cards.”

704.6. Some variant games include additional state-based actions that aren’t normally applicable:

704.6a In a Two-Headed Giant game, if a team has 0 or less life, that team loses the game. See rule 810, “Two-Headed Giant Variant.”

704.6b In a Two-Headed Giant game, if a team has fifteen or more poison counters, that team loses the game. See rule 810, “Two-Headed Giant Variant.”

704.6c In a Commander game, a player that’s been dealt 21 or more combat damage by the same commander over the course of the game loses the game. See rule 903, “Commander.”

704.6d In a Commander game, if a commander is in a graveyard or in exile and that object was put into that zone since the last time state-based actions were checked, its owner may put it into the command zone. See rule 903, “Commander.” 

704.6e In an Archenemy game, if a non-ongoing scheme card is face up in the command zone, and no triggered abilities of any scheme are on the stack or waiting to be put on the stack, that scheme card is turned face down and put on the bottom of its owner’s scheme deck. See rule 904, “Archenemy.”

704.6f In a Planechase game, if a phenomenon card is face up in the command zone, and it isn’t the source of a triggered ability that has triggered but not yet left the stack, the planar controller planeswalks. See rule 901, “Planechase.”

704.7. If multiple state-based actions would have the same result at the same time, a single replacement effect will replace all of them.
Example: You control Lich’s Mirror, which says “If you would lose the game, instead shuffle your hand, your graveyard, and all permanents you own into your library, then draw seven cards and your life total becomes 20.” There’s one card in your library and your life total is 1. A spell causes you to draw two cards and lose 2 life. The next time state-based actions are checked, you’d lose the game due to rule 704.5a and rule 704.5b. Instead, Lich’s Mirror replaces that game loss and you keep playing.

704.8. If a state-based action results in a permanent leaving the battlefield at the same time other state-based actions were performed, that permanent’s last known information is derived from the game state before any of those state-based actions were performed.
Example: You control Young Wolf, a 1/1 creature with undying, and it has a +1/+1 counter on it. A spell puts three -1/-1 counters on Young Wolf. Before state-based actions are performed, Young Wolf has one +1/+1 counter and three -1/-1 counters on it. After state-based actions are performed, Young Wolf is in the graveyard. When it was last on the battlefield, it had a +1/+1 counter on it, so undying will not trigger.

705. Flipping a Coin

705.1. An effect that instructs a player to flip a coin may care whether that player wins or loses the flip. To flip a coin for such an effect, the player flips the coin and calls “heads” or “tails.” If the call matches the result, the player wins the flip. Otherwise, the player loses the flip. Only the player who flips the coin wins or loses the flip; no other players are involved.

705.2. If an effect instructs a player to flip a coin and that effect cares only whether the coin comes up heads or tails without specifying a winner or loser of the flip, that player flips a coin without making a call. No player wins or loses this kind of flip.

705.3. A coin used in a flip must be a two-sided object with easily distinguished sides and equal likelihood that either side lands face up. If the coin that’s being flipped doesn’t have an obvious “heads” or “tails,” designate one side to be “heads,” and the other side to be “tails.” Other methods of randomization may be substituted for flipping a coin as long as there are two possible outcomes of equal likelihood and all players agree to the substitution. For example, the player may roll an even-sided die and call “odds” or “evens,” or roll an even-sided die and designate that “odds” means “heads” and “evens” means “tails.”

706. Copying Objects

706.1. Some objects become or turn another object into a “copy” of a spell, permanent, or card. Some effects create a token that’s a copy of another object. (Certain older cards were printed with the phrase “search for a copy.” This section doesn’t cover those cards, which have received new text in the Oracle card reference.)

706.2. When copying an object, the copy acquires the copiable values of the original object’s characteristics and, for an object on the stack, choices made when casting or activating it (mode, targets, the value of X, whether it was kicked, how it will affect multiple targets, and so on). The copiable values are the values derived from the text printed on the object (that text being name, mana cost, color indicator, card type, subtype, supertype, rules text, power, toughness, and/or loyalty), as modified by other copy effects, by its face-down status, and by “as . . . enters the battlefield” and “as . . . is turned face up” abilities that set power and toughness (and may also set additional characteristics). Other effects (including type-changing and text-changing effects), status, and counters are not copied.
Example: Chimeric Staff is an artifact that reads, “{X}: Chimeric Staff becomes an X/X artifact creature until end of turn.” Clone is a creature that reads, “You may have Clone enter the battlefield as a copy of any creature on the battlefield.” After a Staff has become a 5/5 artifact creature, a Clone enters the battlefield as a copy of it. The Clone is an artifact, not a 5/5 artifact creature. (The copy has the Staff’s ability, however, and will become a creature if that ability is activated.)
Example: Clone enters the battlefield as a copy of a face-down Grinning Demon (a creature with morph {2}{B}{B}). The Clone is a colorless 2/2 creature with no name, no types, no abilities, and no mana cost. It will still be face up. Its controller can’t pay {2}{B}{B} to turn it face up.

706.2a A copy acquires the color of the object it’s copying because that value is derived from its mana cost or color indicator. A copy acquires the abilities of the object it’s copying because those values are derived from its rules text. A copy doesn’t wind up with two values of each ability (that is, it doesn’t copy the object’s abilities and its rules text, then have that rules text define a new set of abilities).

706.2b Once an object has been copied, changing the copiable values of the original object won’t cause the copy to change.

706.2c If a static ability generates a continuous effect that’s a copy effect, the copiable values that effect grants are determined only at the time that effect first starts to apply.

706.3. The copy’s copiable values become the copied information, as modified by the copy’s status (see rule 110.5). Objects that copy the object will use the new copiable values.
Example: Vesuvan Doppelganger reads, “You may have Vesuvan Doppelganger enter the battlefield as a copy of any creature on the battlefield, except it doesn’t copy that creature’s color and it gains ‘At the beginning of your upkeep, you may have this creature become a copy of target creature, except it doesn’t copy that creature’s color. If you do, this creature gains this ability.’” A Vesuvan Doppelganger enters the battlefield as a copy of Runeclaw Bear (a 2/2 green Bear creature with no abilities). Then a Clone enters the battlefield as a copy of the Doppelganger. The Clone is a 2/2 blue Bear named Runeclaw Bear that has the Doppelganger’s upkeep-triggered ability.
Example: Tomoya the Revealer (a flipped flip card) becomes a copy of Nezumi Shortfang (an unflipped flip card). Tomoya’s characteristics become the characteristics of Stabwhisker the Odious, which is the flipped version of Nezumi Shortfang.
Example: A face-down Grinning Demon (a creature with morph) becomes a copy of a face-up Branchsnap Lorian (a 4/1 green creature with trample and morph {G}). The Demon’s characteristics become the characteristics of Branchsnap Lorian. However, since the creature is face down, it remains a 2/2 colorless creature with no name, types, or abilities, and no mana cost. It can be turned face up for {G}. If it’s turned face up, it will have the characteristics of Branchsnap Lorian.
Example: A face-down Grinning Demon (a creature with morph) becomes a copy of Wandering Ones (a 1/1 blue Spirit creature that doesn’t have morph). It will be a face-down Wandering Ones. It remains a 2/2 colorless creature with no name, types, or abilities, and no mana cost. Its controller can’t turn it face up as a special action. If an effect turns it face up, it will have the characteristics of Wandering Ones.

706.4. Some effects cause a permanent that’s copying a permanent to copy a different object while remaining on the battlefield. The change doesn’t trigger enters-the-battlefield or leaves-the-battlefield abilities. This also doesn’t change any noncopy effects presently affecting the permanent.
Example: Unstable Shapeshifter reads, “Whenever a creature enters the battlefield, Unstable Shapeshifter becomes a copy of that creature and gains this ability.” It’s affected by Giant Growth, which reads “Target creature gets +3/+3 until end of turn.” If a creature enters the battlefield later this turn, Unstable Shapeshifter will become a copy of that creature, but it will still get +3/+3 from the Giant Growth.

706.5. An object that enters the battlefield “as a copy” or “that’s a copy” of another object becomes a copy as it enters the battlefield. It doesn’t enter the battlefield, and then become a copy of that permanent. If the text that’s being copied includes any abilities that replace the enters-the-battlefield event (such as “enters the battlefield with” or “as [this] enters the battlefield” abilities), those abilities will take effect. Also, any enters-the-battlefield triggered abilities of the copy will have a chance to trigger.
Example: Skyshroud Behemoth reads, “Fading 2 (This creature enters the battlefield with two fade counters on it. At the beginning of your upkeep, remove a fade counter from it. If you can’t, sacrifice it.)” and “Skyshroud Behemoth enters the battlefield tapped.” A Clone that enters the battlefield as a copy of a Skyshroud Behemoth will also enter the battlefield tapped with two fade counters on it.
Example: Wall of Omens reads, “When Wall of Omens enters the battlefield, draw a card.” A Clone enters the battlefield as a copy of Wall of Omens. The Clone has the Wall’s enters-the-battlefield triggered ability, so the Clone’s controller draws a card.

706.6. When copying a permanent, any choices that have been made for that permanent aren’t copied. Instead, if an object enters the battlefield as a copy of another permanent, the object’s controller will get to make any “as [this] enters the battlefield” choices for it.
Example: A Clone enters the battlefield as a copy of Adaptive Automaton. Adaptive Automaton reads, in part, “As Adaptive Automaton enters the battlefield, choose a creature type.” The Clone won’t copy the creature type choice of the Automaton; rather, the controller of the Clone will get to make a new choice.

706.7. If a pair of linked abilities are copied, those abilities will be similarly linked to one another on the object that copied them. One ability refers only to actions that were taken or objects that were affected by the other. They can’t be linked to any other ability, regardless of what other abilities the copy may currently have or may have had in the past. See rule 607, “Linked Abilities.”

706.8. When copying a double-faced permanent, a face-up meld card, or a melded permanent, only the copiable values of the face that’s currently up are copied. (See rule 711, “Double-Faced Cards,” and rule 712, “Meld Cards.”)

706.9. Copy effects may include modifications or exceptions to the copying process.

706.9a Some copy effects cause the copy to gain an ability as part of the copying process. This ability becomes part of the copiable values for the copy, along with any other abilities that were copied.
Example: Quirion Elves enters the battlefield and an Unstable Shapeshifter copies it. The copiable values of the Shapeshifter now match those of the Elves, except that the Shapeshifter also has the ability “Whenever a creature enters the battlefield, Unstable Shapeshifter becomes a copy of that creature, except it has this ability.” Then a Clone enters the battlefield as a copy of the Unstable Shapeshifter. The Clone copies the new copiable values of the Shapeshifter, including the ability that the Shapeshifter gave itself when it copied the Elves.

706.9b Some copy effects modify a characteristic as part of the copying process. The final set of values for that characteristic becomes part of the copiable values of the copy.
Example: Copy Artifact is an enchantment that reads, “You may have Copy Artifact enter the battlefield as a copy of any artifact on the battlefield, except it’s an enchantment in addition to its other types.” It enters the battlefield as a copy of Juggernaut. The copiable values of the Copy Artifact now match those of Juggernaut with one modification: its types are now artifact, creature, and enchantment.

706.9c Some copy effects specifically state that they don’t copy certain characteristics and the affected objects instead retain their original values. Copy effects may also simply state that certain characteristics are not copied.

706.9d When applying a copy effect that doesn’t copy a certain characteristic, retains one or more original values for a certain characteristic, or provides a specific set of values for a certain characteristic, any characteristic-defining ability (see rule 604.3) of the object being copied that defines that characteristic is not copied. If that characteristic is color, any color indicator (see rule 204) of that object is also not copied. This rule does not apply to copy effects with exceptions that state the object is a certain card type, supertype, and/or subtype “in addition to its other types.” In those cases, any characteristic-defining ability that defines card type, supertype, and/or subtype is copied.
Example: Quicksilver Gargantuan is a creature that reads, “You may have Quicksilver Gargantuan enter the battlefield as a copy of any creature on the battlefield, except it’s 7/7.” Quicksilver Gargantuan enters the battlefield as a copy of Tarmogoyf, which has a characteristic-defining ability that defines its power and toughness. Quicksilver Gargantuan does not have that ability. It will be 7/7.
Example: Glasspool Mimic is a creature that reads “You may have Glasspool Mimic enter the battlefield as a copy of a creature you control, except it’s a Shapeshifter Rogue in addition to its other types.” Glasspool Mimic enters the battlefield as a copy of a creature with changeling. Glasspool Mimic will have changeling and will have all creature types.

706.9e Some replacement effects that generate copy effects include an exception that’s an additional effect rather than a modification of the affected object’s characteristics. If another copy effect is applied to that object after applying the copy effect with that exception, the exception’s effect doesn’t happen.
Example: Altered Ego reads, “You may have Altered Ego enter the battlefield as a copy of any creature on the battlefield, except it enters with X additional +1/+1 counters on it.” You choose for it to enter the battlefield as a copy of Clone, which reads “You may have Clone enter the battlefield as a copy of any creature on the battlefield,” for which no creature was chosen as it entered the battlefield. If you then choose a creature to copy as you apply the replacement effect Altered Ego gains by copying Clone, Altered Ego’s replacement effect won’t cause it to enter the battlefield with any +1/+1 counters on it.

706.9f Some exceptions to the copying process apply only if the copy is or has certain characteristics. To determine whether such an exception applies, consider what the resulting permanent’s characteristics would be if the copy effect were applied without that exception, taking into account any other exceptions that effect includes.
Example: Moritte of the Frost says, in part, “You may have Moritte of the Frost enter the battlefield as a copy of a permanent you control, except it’s legendary and snow in addition to its other types and, if it’s a creature, it enters with two additional +1/+1 counters on it and it has changeling.” Moritte of the Frost copies a land that has become a creature until end of turn. It would enter as a noncreature permanent, so it won’t enter with two additional +1+1 counters on it and it won’t have changeling, even if it becomes a creature later in the turn.

706.9g Some replacement effects that generate copy effects are linked to triggered abilities written in the same paragraph. (See rule 603.11.) If another copy effect is applied to that object after applying the copy effect with the linked triggered ability, the ability doesn’t trigger.

706.10. To copy a spell, activated ability, or triggered ability means to put a copy of it onto the stack; a copy of a spell isn’t cast and a copy of an activated ability isn’t activated. A copy of a spell or ability copies both the characteristics of the spell or ability and all decisions made for it, including modes, targets, the value of X, and additional or alternative costs. (See rule 601, “Casting Spells.”) Choices that are normally made on resolution are not copied. If an effect of the copy refers to objects used to pay its costs, it uses the objects used to pay the costs of the original spell or ability. A copy of a spell is owned by the player under whose control it was put on the stack. A copy of a spell or ability is controlled by the player under whose control it was put on the stack. A copy of a spell is itself a spell, even though it has no spell card associated with it. A copy of an ability is itself an ability.
Example: A player casts Fork, targeting an Emerald Charm. Fork reads, “Copy target instant or sorcery spell, except that the copy is red. You may choose new targets for the copy.” Emerald Charm is a modal green instant. When the Fork resolves, it puts a copy of the Emerald Charm on the stack except the copy is red, not green. The copy has the same mode that was chosen for the original Emerald Charm. It does not necessarily have the same target, but only because Fork allows choosing of new targets.
Example: Fling is an instant that reads, “As an additional cost to cast this spell, sacrifice a creature” and “Fling deals damage equal to the sacrificed creature’s power to any target.” When determining how much damage a copy of Fling deals, it checks the power of the creature sacrificed to pay for the original Fling.
Example: Dawnglow Infusion is a sorcery that reads, “You gain X life if {G} was spent to cast this spell and X life if {W} was spent to cast it.” Because mana isn’t an object, a copy of Dawnglow Infusion won’t cause you to gain any life, no matter what mana was spent to cast the original spell.

706.10a If a copy of a spell is in a zone other than the stack, it ceases to exist. If a copy of a card is in any zone other than the stack or the battlefield, it ceases to exist. These are state-based actions. See rule 704.

706.10b A copy of an ability has the same source as the original ability. If the ability refers to its source by name, the copy refers to that same object and not to any other object with the same name. The copy is considered to be the same ability by effects that count how many times that ability has resolved during the turn.

706.10c Some effects copy a spell or ability and state that its controller may choose new targets for the copy. The player may leave any number of the targets unchanged, even if those targets would be illegal. If the player chooses to change some or all of the targets, the new targets must be legal. Once the player has decided what the copy’s targets will be, the copy is put onto the stack with those targets.

706.10d Some effects copy a spell or ability for each player or object it “could target.” The copies are put onto the stack with those targets in the order of their controller’s choice. If the spell or ability has more than one target, each of its targets must be the same player or object. If that player or object isn’t a legal target for each instance of the word “target,” a copy isn’t created for that player or object.

706.10e Some effects copy a spell or ability and specify a new target for the copy. If the spell or ability has more than one target, each of the copy’s targets must be that player or object. If that player or object isn’t a legal target for each instance of the word “target,” the copy isn’t created.

706.10f Some effects copy a permanent spell. As that copy resolves, it ceases being a copy of a spell and becomes a token permanent. (See rule 608.3b.)

706.11. If an effect refers to a permanent by name, the effect still tracks that permanent even if it changes names or becomes a copy of something else.
Example: An Unstable Shapeshifter copies a Crazed Armodon. Crazed Armodon reads, “{G}: Crazed Armodon gets +3/+0 and gains trample until end of turn. Destroy Crazed Armodon at the beginning of the next end step. Activate this ability only once each turn.” If this ability of the Shapeshifter is activated, the Shapeshifter will be destroyed at the beginning of the next end step, even if it’s no longer a copy of Crazed Armodon at that time.

706.12. An effect that instructs a player to cast a copy of an object (and not just copy a spell) follows the rules for casting spells, except that the copy is created in the same zone the object is in and then cast while another spell or ability is resolving. Casting a copy of an object follows steps 601.2a–h of rule 601, “Casting Spells,” and then the copy becomes cast. Once cast, the copy is a spell on the stack, and just like any other spell it can resolve or be countered.

707. Face-Down Spells and Permanents

707.1. Some cards allow spells and permanents to be face down.

707.2. Face-down spells and face-down permanents have no characteristics other than those listed by the ability or rules that allowed the spell or permanent to be face down. Any listed characteristics are the copiable values of that object’s characteristics. (See rule 613, “Interaction of Continuous Effects,” and rule 706, “Copying Objects.”)

707.2a If a face-up permanent is turned face down by a spell or ability that doesn’t list any characteristics for that object, it becomes a 2/2 face-down creature with no text, no name, no subtypes, and no mana cost. A permanent that enters the battlefield face down also has these characteristics unless otherwise specified by the effect that put it onto the battlefield face down or allowed it to be cast face down. These values are the copiable values of that object’s characteristics.

707.3. Objects that are put onto the battlefield face down are turned face down before they enter the battlefield, so the permanent’s enters-the-battlefield abilities won’t trigger (if triggered) or have any effect (if static).

707.4. Objects that are cast face down are turned face down before they are put onto the stack, so effects that care about the characteristics of a spell will see only the face-down spell’s characteristics. Any effects or prohibitions that would apply to casting an object with these characteristics (and not the face-up object’s characteristics) are applied to casting this object. The permanent the spell becomes will be a face-down permanent.

707.5. At any time, you may look at a face-down spell you control on the stack or a face-down permanent you control (even if it’s phased out). You can’t look at face-down cards in any other zone or face-down spells or permanents controlled by another player.

707.6. If you control multiple face-down spells or face-down permanents, you must ensure at all times that your face-down spells and permanents can be easily differentiated from each other. This includes, but is not limited to, knowing what ability or rules caused the permanents to be face down, the order spells were cast, the order that face-down permanents entered the battlefield, which creature(s) attacked last turn, and any other differences between face-down spells or permanents. Common methods for distinguishing between face-down objects include using counters or dice to mark the different objects, or clearly placing those objects in order on the table.

707.7. The ability or rules that allow a permanent to be face down may also allow the permanent’s controller to turn it face up. Spells normally can’t be turned face up.

707.8. As a face-down permanent is turned face up, its copiable values revert to its normal copiable values. Any effects that have been applied to the face-down permanent still apply to the face-up permanent. Any abilities relating to the permanent entering the battlefield don’t trigger and don’t have any effect, because the permanent has already entered the battlefield.

707.9. If a face-down permanent or a face-down component of a merged permanent moves from the battlefield to any other zone, its owner must reveal it to all players as they move it. If a face-down spell moves from the stack to any zone other than the battlefield, its owner must reveal it to all players as they move it. If a player leaves the game, all face-down permanents, face-down components of merged permanents, and face-down spells owned by that player must be revealed to all players. At the end of each game, all face-down permanents, face-down components of merged permanents, and face-down spells must be revealed to all players.

707.10. If a face-down permanent becomes a copy of another permanent, its copiable values become the copiable values of that permanent, as modified by its face-down status. Its characteristics therefore remain the same: the characteristics listed by the ability or rules that allowed it to be turned face down. However, if it is turned face up, its copiable values become the values it copied from the other permanent. See rule 706.3.

707.11. If a face-down permanent would have an “As [this permanent] is turned face up . . .” ability after it’s turned face up, that ability is applied while that permanent is being turned face up, not afterward.

708. Split Cards

708.1. Split cards have two card faces on a single card. The back of a split card is the normal Magic card back.

708.2. Although split cards have two castable halves, each split card is only one card. For example, a player who has drawn or discarded a split card has drawn or discarded one card, not two.

708.3. A player chooses which half of a split card they are casting before putting it onto the stack.

708.3a Only the chosen half is evaluated to see if it can be cast. Only that half is considered to be put onto the stack.

708.3b While on the stack, only the characteristics of the half being cast exist. The other half’s characteristics are treated as though they didn’t exist.

708.3c An effect may create a copy of a split card and allow a player to cast the copy. That copy retains the characteristics of the two halves separated into the same two halves as the original card. (See rule 706.12.)

708.4. In every zone except the stack, the characteristics of a split card are those of its two halves combined. This is a change from previous rules.

708.4a Each split card has two names. If an effect instructs a player to choose a card name and the player wants to choose a split card’s name, the player must choose one of those names and not both. An object has the chosen name if one of its names is the chosen name.

708.4b The mana cost of a split card is the combined mana costs of its two halves. A split card’s colors and mana value are determined from its combined mana cost. An effect that refers specifically to the symbols in a split card’s mana cost sees the separate symbols rather than the whole mana cost.
Example: Assault//Battery’s mana cost is {3}{R}{G}. It’s a red and green card with a mana value of 5. If you cast Assault, the resulting spell is a red spell with a mana value of 1.
Example: Fire//Ice’s mana cost is {2}{U}{R}. It has the same mana cost as Steam Augury, but an effect such as that of Jegantha, the Wellspring sees that it contains the mana symbol {1} twice.

708.4c A split card has each card type specified on either of its halves and each ability in the text box of each half.

708.4d The characteristics of a fused split spell on the stack are also those of its two halves combined (see rule 702.102, “Fuse”).

709. Flip Cards

709.1. Flip cards have a two-part card frame on a single card. The text that appears right side up on the card defines the card’s normal characteristics. Additional alternative characteristics appear upside down on the card. The back of a flip card is the normal Magic card back.

709.1a The top half of a flip card contains the card’s normal name, text box, type line, power, and toughness. The text box usually contains an ability that causes the permanent to “flip” if certain conditions are met.

709.1b The bottom half of a flip card contains an alternative name, text box, type line, power, and toughness. These characteristics are used only if the permanent is on the battlefield and only if the permanent is flipped.

709.1c A flip card’s color and mana cost don’t change if the permanent is flipped. Also, any changes to it by external effects will still apply.

709.2. In every zone other than the battlefield, and also on the battlefield before the permanent flips, a flip card has only the normal characteristics of the card. Once a permanent is flipped, its normal name, text box, type line, power, and toughness don’t apply and the alternative versions of those characteristics apply instead.
Example: Akki Lavarunner is a nonlegendary creature that flips into a legendary creature named Tok-Tok, Volcano Born. An effect that says “Search your library for a legendary card” can’t find this flip card. An effect that says “Legendary creatures get +2/+2” doesn’t affect Akki Lavarunner, but it does affect Tok-Tok.

709.3. You must ensure that it’s clear at all times whether a permanent you control is flipped or not, both when it’s untapped and when it’s tapped. Common methods for distinguishing between flipped and unflipped permanents include using coins or dice to mark flipped objects.

709.4. Flipping a permanent is a one-way process. Once a permanent is flipped, it’s impossible for it to become unflipped. However, if a flipped permanent leaves the battlefield, it retains no memory of its status. See rule 110.5.

709.5. If an effect instructs a player to choose a card name and the player wants to choose a flip card’s alternative name, the player may do so.

710. Leveler Cards

710.1. Each leveler card has a striated text box and three power/toughness boxes. The text box of a leveler card contains two level symbols.

710.2. A level symbol is a keyword ability that represents a static ability. The level symbol includes either a range of numbers, indicated here as “N1-N2,” or a single number followed by a plus sign, indicated here as “N3+.” Any abilities printed within the same text box striation as a level symbol are part of its static ability. The same is true of the power/toughness box printed within that striation, indicated here as “[P/T].”

710.2a “{LEVEL N1-N2} [Abilities] [P/T]” means “As long as this creature has at least N1 level counters on it, but no more than N2 level counters on it, it has base power and toughness [P/T] and has [abilities].”

710.2b “{LEVEL N3+} [Abilities] [P/T]” means “As long as this creature has N3 or more level counters on it, it has base power and toughness [P/T] and has [abilities].”

710.3. The text box striations have no game significance other than clearly demarcating which abilities and which power/toughness box are associated with which level symbol. Leveler cards each contain only one text box.

710.4. Any ability a leveler card has that isn’t preceded by a level symbol is treated normally. In particular, each leveler permanent has its level up ability (see rule 702.87) at all times; it may be activated regardless of how many level counters are on that permanent.

710.5. If the number of level counters on a leveler creature is less than N1 (the first number printed in its {LEVEL N1-N2} symbol), it has the power and toughness denoted by its uppermost power/toughness box.

710.6. In every zone other than the battlefield, a leveler card has the power and toughness denoted by its uppermost power/toughness box.

711. Double-Faced Cards

711.1. A double-faced card has a Magic card face on each side rather than a Magic card face on one side and a Magic card back on the other. There are two kinds of double-faced cards. Transforming double-faced cards include abilities on one or both of their faces that allow the card to “transform” (turn over to its other face) or allow the card to enter the battlefield “transformed” (with its back face up). Modal double-faced cards have two faces that are independent from one another and can’t transform.

711.1a A transforming double-faced card’s front face is marked by a front-face symbol in its upper left corner. On Magic Origins® and Core Set 2019 double-faced cards, the front-face symbol is a modified Planeswalker icon. On cards in the Innistrad™ block and Shadows over Innistrad set, as well as on Ulrich of the Krallenhorde in the Eldritch Moon™ set, the front-face symbol is a sun. On other Eldritch Moon double-faced cards, the front-face symbol is a full moon. On Ixalan™ and Rivals of Ixalan™ cards, the front-face symbol is a compass rose.

711.1b A transforming double-faced card’s back face is marked by a back-face symbol in its upper left corner. On Magic Origins and Core Set 2019 double-faced cards, the back-face symbol is a full Planeswalker icon. On cards in the Innistrad block and Shadows over Innistrad set, as well as on Ulrich, Uncontested Alpha in the Eldritch Moon set, the back-face symbol is a crescent moon. On other Eldritch Moon double-faced cards, the back-face symbol is a stylized image of Emrakul. On Ixalan and Rivals of Ixalan cards, the back-face symbol is a land icon.

711.1c The front face of a transforming double-faced card whose back face is a creature has the back face’s power and toughness printed in gray above the power and toughness box. This is reminder text and has no effect on game play.

711.1d A modal double-faced card’s front face is marked by a front-face symbol in its upper left corner. The front-face symbol is a single black triangle inside a sideways teardrop.

711.1e A modal double-faced card’s back face is marked by a back-face symbol in its upper left corner. The back-face symbol is two white triangles inside a sideways teardrop.

711.1f Each face of a modal double-faced card includes a hint bar in the lower left corner with information about the opposite face. This is reminder text and has no effect on game play.

711.1g Meld cards have a Magic card face on one side and half of an oversized Magic card face on the other. These aren’t double-faced cards and are subject to their own set of rules. See rule 712, “Meld Cards.”

711.2. Players who are allowed to look at a double-faced card may look at both faces.

711.3. Players must ensure that double-faced cards in hidden zones are indistinguishable from other cards in the same zone. To do this, the owner of a double-faced card may use completely opaque card sleeves and/or a substitute card (see rule 713). Sanctioned tournaments have additional rules for playing with double-faced cards. See rule 100.6.

711.4. Each face of a double-faced card has its own set of characteristics.

711.4a While a double-faced card is outside the game or in a zone other than the battlefield or stack, it has only the characteristics of its front face.

711.4b While a transforming double-faced spell is on the stack or a transforming double-faced permanent has its front face up, it has only the characteristics of its front face.

711.4c While a transforming double-faced permanent has its back face up, it has only the characteristics of its back face. However, its mana value is calculated using the mana cost of its front face. If a permanent is copying the back face of a transforming double-faced card (even if the card representing that copy is itself a double-faced card), the mana value of that permanent is 0.

711.4d While a modal double-faced spell is on the stack or a modal double-faced permanent is on the battlefield, it has only the characteristics of the face that’s up.

711.5. Only permanents represented by transforming double-faced cards can transform. (See rule 701.28, “Transform.”) If a spell or ability instructs a player to transform any permanent that isn’t represented by a transforming double-faced card, nothing happens.
Example: A Clone enters the battlefield as a copy of Wildblood Pack (the back face of a transforming double-faced card). The Clone will be a copy of the Wildblood Pack. Because the Clone is itself not a transforming double-faced card, it can’t transform.
Example: A player casts Cytoshape, causing a Kruin Outlaw (the front face of a transforming double-faced card) to become a copy of Elite Vanguard (a 2/1 Human Soldier creature) until end of turn. The player then casts Moonmist, which reads, in part, “Transform all Humans.” Because the copy of Elite Vanguard is a transforming double-faced card, it will transform. The resulting permanent will have its back face up, but it will still be a copy of Elite Vanguard that turn.
Example: A player controls Blackbloom Rogue, a Human Rogue that’s the front face of a modal double-faced card. They cast Moonmist. Blackbloom Rogue doesn’t transform.

711.6. If a spell or ability instructs a player to transform a permanent, and the face that permanent would transform into is represented by an instant or sorcery card face, nothing happens.

711.7. If a transforming double-faced card is cast as a spell, it’s put on the stack with its front face up. A player casting a modal double-faced card as a spell chooses which face they are casting before putting it onto the stack. See rule 601, “Casting Spells.”

711.7a Only the face that will be face up on the stack is evaluated to determine if it can be cast. Only that face is considered to be put onto the stack.

711.8. A player playing a modal double-faced card as a land chooses one of its faces that’s a land before putting it onto the battlefield. It enters the battlefield with that face up. See rule 305, “Lands.”

711.9. A resolving transforming double-faced spell is put onto the battlefield front face up. A resolving modal double-faced spell that becomes a permanent is put onto the battlefield with the same face up that was face up on the stack.

711.10. A double-faced card put onto the battlefield from a zone other than the stack enters the battlefield with its front face up by default.

711.10a If a spell or ability puts a transforming double-faced card onto the battlefield “transformed,” it enters the battlefield with its back face up. If a player is instructed to put a card that isn’t a transforming double-faced card onto the battlefield transformed, that card stays in its current zone.

711.10b If a player is instructed to put a modal double-faced card onto the battlefield and its front face isn’t a permanent card, the card stays in its current zone.

711.11. If an effect allows a player to cast a double-faced card as a face-down creature spell, or if a double-faced card enters the battlefield face down, it will have the characteristics given to it by the rule or effect that caused it to be face down. That card remains hidden, using a face-down substitute card (see rule 713) and/or opaque sleeves. See rule 707, “Face-Down Spells and Permanents.”

711.11a While face down, a transforming double-faced permanent can’t transform. If it’s turned face up, it will have its front face up.

711.12. Double-faced permanents can’t be turned face down. If a spell or ability tries to turn a double-faced permanent face down, nothing happens.

711.13. A double-faced card that is exiled face down remains hidden, using a face-down substitute card and/or opaque sleeves. See rule 713, “Substitute Cards.”

711.14. When a transforming double-faced permanent transforms, it doesn’t become a new object. Any effects that applied to that permanent will continue to apply to it after it transforms.
Example: An effect gives Village Ironsmith (the front face of a transforming double-faced card) +2/+2 until end of turn and then Village Ironsmith transforms into Ironfang. Ironfang will continue to get +2/+2 until end of turn.

711.15. If an effect instructs a player to choose a card name, the player may name either face of a double-faced card but not both.

712. Meld Cards

712.1. A meld card has a Magic card face on one side and half of an oversized Magic card face on the other. It doesn’t have a Magic card back.

712.1a There are three specific meld pairs. Each meld pair consists of two specific cards whose back faces combine to form one oversized Magic card face: Midnight Scavengers and Graf Rats meld to form Chittering Host; Hanweir Garrison and Hanweir Battlements meld to form Hanweir, the Writhing Township; and Bruna, the Fading Light and Gisela, the Broken Blade meld to form Brisela, Voice of Nightmares.

712.1b A meld card isn’t a double-faced card. Its back face can’t be cast or put onto the battlefield, and it can’t transform or enter the battlefield transformed. (See rule 711, “Double-Faced Cards.”)

712.2. One card in each meld pair has an ability that exiles both that object and its counterpart and melds them. To meld the two cards in a meld pair, put them onto the battlefield with their back faces up and combined (see rule 701.37, “Meld”). The resulting permanent is a single object represented by two cards.

712.3. The front face of each meld card and the combined face formed by a meld pair each has its own set of characteristics.

712.3a While a meld card is outside the game, in a zone other than the battlefield, or on the battlefield with its front face up, it has only the characteristics of its front face.

712.3b While the two cards of a meld pair are on the battlefield as a melded permanent, the object represented by those cards has only the characteristics of the combined back face, and its mana value is the sum of the mana values of its front faces. If a permanent is copying a melded permanent, the mana value of the copy is 0. See rule 202.3c.

712.3c Anything that needs information about a meld card or a melded permanent sees only the information given by the face that is currently up.
Example: A Clone enters the battlefield as a copy of Chittering Host (the combined back face of a meld pair). It has the characteristics of Chittering Host, even though the object it becomes is represented by only a single card, and its mana value is 0.

712.4. If a melded permanent leaves the battlefield, one permanent leaves the battlefield and two cards are put into the appropriate zone.
Example: Chittering Host, a melded permanent, dies. An ability that triggers “whenever a creature dies” triggers once. An ability that triggers “whenever a card is put into a graveyard from anywhere” triggers twice.

712.4a If a melded permanent is put into its owner’s graveyard or library, that player may arrange the two cards in any order. If it’s put into its owner’s library, that player doesn’t reveal the order.

712.4b If a player exiles a melded permanent, that player determines the relative timestamp order of the two cards at that time. This is an exception to the procedure described in rule 613.7k.
Example: Duplicant is a card with the abilities “When Duplicant enters the battlefield, you may exile target nontoken creature” and “As long as a card exiled with Duplicant is a creature card, Duplicant has the power, toughness, and creature types of the last creature card exiled with Duplicant. It’s still a Shapeshifter.” As Duplicant’s first ability exiles Chittering Host, a melded permanent, Duplicant’s controller chooses whether the last creature card exiled is Midnight Scavengers or Graf Rats.

712.4c If an effect can find the new object that a melded permanent becomes as it leaves the battlefield, it finds both cards. (See rule 400.7.) If that effect causes actions to be taken upon those cards, the same actions are taken upon each of them.
Example: Otherworldly Journey is an instant that reads “Exile target creature. At the beginning of the next end step, return that card to the battlefield under its owner’s control with a +1/+1 counter on it.” A player casts Otherworldly Journey targeting Chittering Host, a melded permanent. Chittering Host is exiled. At the beginning of the next end step, Midnight Scavengers and Graf Rats are both returned to the battlefield, each with a +1/+1 counter on it.
Example: False Demise is an Aura with the ability “When enchanted creature dies, return that card to the battlefield under your control.” A Chittering Host enchanted by False Demise dies. The triggered ability returns both Midnight Scavengers and Graf Rats to the battlefield.
Example: Mimic Vat is an artifact that reads, in part, “Whenever a nontoken creature dies, you may exile that card.” A Chittering Host dies. As Mimic Vat’s triggered ability resolves, its controller makes a single choice and both cards that represented Chittering Host are either exiled or not.

712.4d If multiple replacement effects could be applied to the event of a melded permanent leaving the battlefield or being put into the new zone, applying one of those replacement effects to one of the two cards affects both cards. If the melded permanent is a commander, it may be exempt from this rule; see rule 903.9a.
Example: Leyline of the Void is an enchantment that reads, in part, “If a card would be put into an opponent’s graveyard from anywhere, exile it instead.” Wheel of Sun and Moon is an Aura with enchant player and the ability “If a card would be put into enchanted player’s graveyard from anywhere, instead that card is revealed and put on the bottom of its owner’s library.” If the controller of Chittering Host is affected by both cards’ effects, that player chooses one effect to apply to the event and Midnight Scavengers and Graf Rats are both moved to the appropriate zone.

712.4e If an effect needs to know the number of objects that changed zones, a melded permanent among those objects counts as one object that moved. If the effect needs to know the number of cards that changed zones, that melded permanent counts as two cards that moved.

712.5. Players who are allowed to look at a meld card may look at its half of the combined back face. Players may access Oracle text for the other member of the meld pair and the combined face at any time (see rule 108.1).

712.6. Meld cards in a player’s deck may be represented by substitute cards. See rule 713, “Substitute Cards.”

712.7. If a meld card is cast as a spell, it’s put on the stack with its front face up. See rule 601, “Casting Spells.”

712.8. A meld card enters the battlefield with its front face up unless it’s being melded with its counterpart.

712.9. If an effect allows a player to cast a meld card as a face-down spell, or if a meld card enters the battlefield face down, it will have the characteristics given to it by the rule or effect that caused it to be face down. That card remains hidden, using either a face-down substitute card or opaque sleeves. See rule 707, “Face-Down Spells and Permanents.”

712.10. Meld cards on the battlefield and melded permanents can’t be turned face down. If a spell or ability tries to turn such a permanent face down, nothing happens.

712.11. If an effect instructs a player to choose a card name, the player may choose the name of a front face of a meld card or the combined back face of a meld pair.

713. Substitute Cards

713.1. A substitute card is a game supplement that can be used to represent a double-faced card or meld card. A substitute card has a normal Magic card back.

713.2. Each substitute card must clearly indicate the name of at least the front face of the card that it represents. Other information from the printed card (e.g. card type, mana cost, and power and toughness) may also be written on the substitute card.

713.2a Some substitute cards list the names and mana costs of the cards they can represent. Exactly one of the fill-in circles must be marked to denote which card the substitute card represents. This style of substitute card was found in Magic products that released 2011–2018.

713.2b Some substitute cards represent one specific listed card. This style of substitute card was found in the Core Set 2019 release, and it represents the card Nicol Bolas, the Ravager.

713.2c Some substitute cards can represent any modal double-faced card. These substitute cards include the front-face and back-face symbols on the front face of the card. To use one of them, write in the name of each face of the card it represents. This style of substitute card is found in the Zendikar Rising release.

713.3. If a substitute card is used in a deck, the card it represents is set aside prior to the beginning of the game (see rule 103.2a) and must remain available throughout the game. A substitute card can’t be included in a deck unless it is representing a double-faced card or a meld card.

713.4. For all game purposes, the substitute card is considered to be the card it’s representing.

713.5. If the substitute card is face up in a public zone, it should be set aside and the double-faced card or meld card that it represents should be used instead.

714. Saga Cards

714.1. Each Saga card has a striated text box containing a number of chapter symbols. Its illustration is vertically oriented on the right side of the card, and its type line is along the bottom of the card.

714.2. A chapter symbol is a keyword ability that represents a triggered ability referred to as a chapter ability.

714.2a A chapter symbol includes a Roman numeral, indicated here as “{rN}.” The numeral I represents 1, II represents 2, III represents 3, and so on.

714.2b “{rN}—[Effect]” means “When one or more lore counters are put onto this Saga, if the number of lore counters on it was less than N and became at least N, [effect].”

714.2c “{rN1}, {rN2}—[Effect]” means the same as “{rN1}—[Effect]” and “{rN2}—[Effect].”

714.2d A Saga’s final chapter number is the greatest value among chapter abilities it has. If a Saga somehow has no chapter abilities, its final chapter number is 0.

714.3. Sagas use lore counters to track their progress.

714.3a As a Saga enters the battlefield, its controller puts a lore counter on it.

714.3b As a player’s precombat main phase begins, that player puts a lore counter on each Saga they control. This turn-based action doesn’t use the stack.

714.4. If the number of lore counters on a Saga permanent is greater than or equal to its final chapter number, and it isn’t the source of a chapter ability that has triggered but not yet left the stack, that Saga’s controller sacrifices it. This state-based action doesn’t use the stack.

715. Adventurer Cards

715.1. Adventurer cards have a two-part card frame, with a smaller frame inset within their text box.

715.2. The text that appears in the inset frame on the left defines alternative characteristics that the object may have while it’s a spell. The card’s normal characteristics appear as usual, although with a smaller text box on the right.

715.2a If an effect refers to a card, spell, or permanent that “has an Adventure,” it refers to an object for which these alternative characteristics exist, even if the object currently doesn’t use them.

715.2b The existence and values of these alternative characteristics is part of the object’s copiable values.

715.2c Although adventurer cards are printed with multiple sets of characteristics, each adventurer card is only one card. For example, a player who has drawn or discarded an adventurer card has drawn or discarded one card, not two.

715.3. As a player casts an adventurer card, the player chooses whether they cast the card normally or as an Adventure.

715.3a When casting an adventurer card as an Adventure, only the alternative characteristics are evaluated to see if it can be cast.

715.3b While on the stack as an Adventure, the spell has only its alternative characteristics.

715.3c If an Adventure spell is copied, the copy is also an Adventure. It has the alternative characteristics of the spell and not the normal characteristics of the card that represents the Adventure spell. Any rule or effect that refers to a spell cast as an Adventure refers to the copy as well.

715.3d Instead of putting a spell that was cast as an Adventure into its owner’s graveyard as it resolves, its controller exiles it. For as long as that card remains exiled, that player may cast it. It can’t be cast as an Adventure this way, although other effects that allow a player to cast it may allow a player to cast it as an Adventure.

715.4. In every zone except the stack, and while on the stack not as an Adventure, an adventurer card has only its normal characteristics.

715.5. If an effect instructs a player to choose a card name and the player wants to choose an adventurer card’s alternative name, the player may do so.

716. Controlling Another Player

716.1. Some cards allow a player to control another player during that player’s next turn. This effect applies to the next turn that the affected player actually takes. The affected player is controlled during the entire turn; the effect doesn’t end until the beginning of the next turn.

716.1a Multiple player-controlling effects that affect the same player overwrite each other. The last one to be created is the one that works.

716.1b If a turn is skipped, any pending player-controlling effects wait until the player who would be affected actually takes a turn.

716.2. Two cards (Word of Command and Opposition Agent) allow a player to control another player for a limited duration.

716.3. Only control of the player changes. All objects are controlled by their normal controllers. A player who’s being controlled during their turn is still the active player.

716.4. If information about an object in the game would be visible to the player being controlled, it’s visible to both that player and the controller of the player. If information about cards outside the game would be visible to the player being controlled, it’s visible only to that player, not the controller of the player.
Example: The controller of a player can see that player’s hand and the face of any face-down creatures they control.

716.5. While controlling another player, a player makes all choices and decisions the controlled player is allowed to make or is told to make by the rules or by any objects. This includes choices and decisions about what to play, and choices and decisions called for by spells and abilities.
Example: The controller of another player decides which spells that player casts and what those spells target, and makes any required decisions when those spells resolve.
Example: The controller of another player decides which of that player’s creatures attack, which player or planeswalker each one attacks, what the damage assignment order of the creatures that block them is (if any of the attacking creatures are blocked by multiple creatures), and how those attacking creatures assign their combat damage.

716.5a The controller of another player can use only that player’s resources (cards, mana, and so on) to pay costs for that player.
Example: If the controller of a player decides that the controlled player will cast a spell with an additional cost of discarding cards, the cards are discarded from the controlled player’s hand.

716.5b The controller of another player can’t make choices or decisions for that player that aren’t called for by the rules or by any objects. The controller also can’t make any choices or decisions for the player that would be called for by the tournament rules.
Example: The player who’s being controlled still decides if they will leave to visit the restroom, trade a card to someone else, agree to an intentional draw, or call a judge about an error or infraction.

716.6. The controller of another player can’t make that player concede. A player may concede the game at any time, even if they are controlled by another player. See rule 104.3a.

716.7. The effect that gives control of a player to another player may restrict the actions the controlled player is allowed to take or specify actions that the controlled player must take.

716.8. A player who controls another player also continues to make their own choices and decisions.

716.9. A player may gain control of themselves. That player will make their own decisions and choices as normal.

717. Ending Turns and Phases

717.1. Some cards end the turn. When an effect ends the turn, follow these steps in order, as they differ from the normal process for resolving spells and abilities (see rule 608, “Resolving Spells and Abilities”).

717.1a If there are any triggered abilities that triggered before this process began but haven’t been put onto the stack yet, those abilities cease to exist. They won’t be put onto the stack. This rule does not apply to abilities that trigger during this process (see rule 717.1f).

717.1b Exile every object on the stack, including the object that’s resolving. All objects not on the battlefield or in the command zone that aren’t represented by cards will cease to exist the next time state-based actions are checked (see rule 704, “State-Based Actions”).

717.1c Check state-based actions. No player gets priority, and no triggered abilities are put onto the stack.

717.1d The current phase and/or step ends. If this happens during combat, remove all creatures and planeswalkers from combat. The game skips straight to the cleanup step; skip any phases or steps between this phase or step and the cleanup step. If an effect ends the turn during the cleanup step, a new cleanup step begins.

717.1e Even though the turn ends, “at the beginning of the end step” triggered abilities don’t trigger because the end step is skipped.

717.1f No player gets priority during this process, so triggered abilities are not put onto the stack. If any triggered abilities have triggered since this process began, those abilities are put onto the stack during the cleanup step, then the active player gets priority and players can cast spells and activate abilities. Then there will be another cleanup step before the turn finally ends. If no triggered abilities have triggered during this process, no player gets priority during the cleanup step. See rule 514, “Cleanup Step.”

717.2. One card (Mandate of Peace) ends the combat phase. When an effect ends the combat phase, follow these steps in order, as they differ from the normal process for resolving spells and abilities (see rule 608, “Resolving Spells and Abilities”).

717.2a If there are any triggered abilities that triggered before this process began but haven’t been put onto the stack yet, those abilities cease to exist. They won’t be put onto the stack. This rule does not apply to abilities that trigger during this process (see rule 717.2f).

717.2b Exile every object on the stack, including the object that’s resolving. All objects not on the battlefield or in the command zone that aren’t represented by cards will cease to exist the next time state-based actions are checked (see rule 704, “State-Based Actions”).

717.2c Check state-based actions. No player gets priority, and no triggered abilities are put onto the stack.

717.2d The current combat phase ends. Remove all creatures and planeswalkers from combat. Effects that last “until end of combat” expire. The game skips straight to the next phase, usually the postcombat main phase; skip any steps between this step and that phase.

717.2e Even though the combat phase ends, “at end of combat” triggered abilities don’t trigger because the end of combat step is skipped.

717.2f No player gets priority during this process, so triggered abilities are not put onto the stack. If any triggered abilities have triggered since this process began, those abilities are put onto the stack during the following phase, then the active player gets priority and players can cast spells and activate abilities.

717.2g If an effect attempts to end the combat phase at any time that’s not a combat phase, nothing happens.

718. The Monarch

718.1. The monarch is a designation a player can have. There is no monarch in a game until an effect instructs a player to become the monarch.

718.2. There are two inherent triggered abilities associated with being the monarch. These triggered abilities have no source and are controlled by the player who was the monarch at the time the abilities triggered. This is an exception to rule 113.8. The full texts of these abilities are “At the beginning of the monarch’s end step, that player draws a card” and “Whenever a creature deals combat damage to the monarch, its controller becomes the monarch.”

718.3. Only one player can be the monarch at a time. As a player becomes the monarch, the current monarch ceases to be the monarch.

718.4. If the monarch leaves the game, the active player becomes the monarch at the same time as that player leaves the game. If the active player is leaving the game or if there is no active player, the next player in turn order becomes the monarch. If no player still in the game can become the monarch, the game continues with no monarch.

719. Restarting the Game

719.1. One card (Karn Liberated) restarts the game. A game that is restarted immediately ends. No players in that game win, lose, or draw that game. All players in that game when it ended then start a new game following the procedures set forth in rule 103, “Starting the Game,” with the following exception:

719.1a The starting player in the new game is the player who controlled the spell or ability that restarted the game.

719.2. All Magic cards involved in the game that was restarted when it ended, including phased-out permanents and nontraditional Magic cards, are involved in the new game, even if those cards were not originally involved in the restarted game. Ownership of cards in the new game doesn’t change, regardless of their location when the new game begins.
Example: A player casts Living Wish, bringing a creature card into the game from outside the game. Then that game is restarted. The creature card will be part of that player’s library when the new game begins.

719.3. Because each player draws seven cards when the new game begins, any player with fewer than seven cards in their library will lose the game when state-based actions are checked during the upkeep step of the first turn, regardless of any mulligans that player takes. (See rule 704, “State-Based Actions.”)

719.4. The effect that restarts the game finishes resolving just before the first turn’s untap step. If the spell or ability that generated that effect has additional instructions, those instructions are followed at this time. No player has priority, and any triggered abilities that trigger as a result will go on the stack the next time a player receives priority, usually during the first turn’s upkeep step.

719.5. Effects may exempt certain cards from the procedure that restarts the game. These cards are not in their owner’s deck as the new game begins.

719.5a In a Commander game, a commander that has been exempted from the procedure that restarts the game won’t begin the new game in the command zone. However, it remains that deck’s commander for the new game. See rule 903, “Commander.”

719.6. If a Magic subgame (see rule 720) is restarted, the main game is unaffected. Main-game effects that refer to the winner or loser of the subgame now refer to the winner or loser of the restarted subgame.

719.7. If a multiplayer game using the limited range of influence option (see rule 801) is restarted, all players in the game are involved, regardless of the range of influence of the player who controls the ability that restarted the game.

720. Subgames

720.1. One card (Shahrazad) allows players to play a Magic subgame.

720.1a A “subgame” is a completely separate Magic game created by an effect. Essentially, it’s a game within a game. The “main game” is the game in which the spell or ability that created the subgame was cast or activated. The main game is temporarily discontinued while the subgame is in progress. It resumes when the subgame ends.

720.1b No effects or definitions created in either the main game or the subgame have any meaning in the other, except as defined by the effect that created the subgame. For example, the effect may say that something happens in the main game to the winner or loser of the subgame.

720.2. As the subgame starts, an entirely new set of game zones is created. Each player takes all the cards in their main-game library, moves them to their subgame library, and shuffles them. No other cards in a main-game zone are moved to their corresponding subgame zone, except as specified in rules 720.2a–d. Randomly determine which player goes first. The subgame proceeds like a normal game, following all other rules in rule 103, “Starting the Game.”

720.2a As a subgame of a Planechase game starts, each player moves their planar deck from the main-game command zone to the subgame command zone and shuffles it. (Face-up plane and phenomenon cards remain in the main-game command zone.)

720.2b As a subgame of a Vanguard game starts, each player moves their vanguard card from the main-game command zone to the subgame command zone.

720.2c As a subgame of a Commander game starts, each player moves their commander from the main-game command zone (if it’s there) to the subgame command zone.

720.2d As a subgame of an Archenemy game starts, the archenemy moves their scheme deck from the main-game command zone to the subgame command zone and shuffles it. (Face-up scheme cards remain in the main-game command zone.)

720.3. Because each player draws seven cards when a game begins, any player with fewer than seven cards in their deck will lose the subgame when state-based actions are checked during the upkeep step of the first turn, regardless of any mulligans that player takes. (See rule 704, “State-Based Actions.”)

720.4. All objects in the main game and all cards outside the main game are considered outside the subgame (except those specifically brought into the subgame). All players not currently in the subgame are considered outside the subgame.

720.4a Some effects can bring cards into a game from outside of it. If a card is brought into a subgame from a main game, abilities in the main game that trigger on objects leaving a main-game zone will trigger, but they won’t be put onto the stack until the main game resumes.

720.4b A player’s main-game counters aren’t considered part of the subgame, although the player will still have them when the main game resumes. Similarly, any counters a player gets during a subgame will cease to exist when the subgame ends.

720.5. At the end of a subgame, each player takes all cards they own that are in the subgame other than those in the subgame command zone, puts them into their main-game library, then shuffles them. This includes cards in the subgame’s exile zone. Except as specified in rules 720.5a–d, all other objects in the subgame cease to exist, as do the zones created for the subgame. The main game continues from the point at which it was discontinued: First, the spell or ability that created the subgame finishes resolving, even if it was created by a spell card that’s no longer on the stack. Then, if any main-game abilities triggered while the subgame was in progress due to cards being removed from the main game, those abilities are put onto the stack.
Example: If a card was brought into the subgame either from the main game or from outside the main game, that card will be put into its owner’s main-game library when the subgame ends.

720.5a At the end of a subgame of a Planechase game, each face-up plane card or phenomenon card is turned face down and put on the bottom of its owner’s planar deck. Then each player moves their planar deck from the subgame command zone to the main-game command zone and shuffles it.

720.5b At the end of a subgame of a Vanguard game, each player moves their vanguard card from the subgame command zone to the main-game command zone. This is an exception to rule 311.2.

720.5c At the end of a subgame of a Commander game, each player moves their commander from the subgame command zone (if it’s there) to the main-game command zone.

720.5d At the end of a subgame of an Archenemy game, any face-up scheme cards in the subgame command zone are turned face down and put on the bottom of their owner’s scheme deck. Then the archenemy moves their scheme deck from the subgame command zone to the main-game command zone and shuffles it.

720.6. A subgame can be created within a subgame. The existing subgame becomes the main game in relation to the new subgame.

721. Merging with Permanents

721.1. One keyword causes an object to merge with a permanent. See rule 702.140, “Mutate.”

721.2. To merge an object with a permanent, place that object on top of or under that permanent. That permanent becomes a merged permanent represented by the card or copy that represented that object in addition to any other components that were representing it.

721.2a A merged permanent has only the characteristics of its topmost component, unless otherwise specified by the effect that caused them to merge. This is a copiable effect whose timestamp is the time the objects merged. (See rule 613.2.)

721.2b As an object merges with a permanent, that object leaves its previous zone and becomes part of an object on the battlefield, but the resulting permanent isn’t considered to have just entered the battlefield.

721.2c Because a merged permanent is the same object that it was before, it hasn’t just come under a player’s control, any continuous effects that affected it continue to do so, and so on.

721.2d If a merged permanent contains a token, the resulting permanent is a token only if the topmost component is a token.

721.2e If a merged permanent contains face-up and face-down components, the permanent’s status is determined by its topmost component. If a face-down permanent becomes a face-up permanent as a result of an object merging with it, other effects don’t count it as being turned face up.

721.2f If a merged permanent is turned face down, each face-up component that represents it is turned face down. If a face-down merged permanent is turned face up, each face-down component that represents it is turned face up.

721.2g A face-down merged permanent that contains an instant or sorcery card can’t be turned face up. If such a permanent would turn face up, its controller reveals it and leaves it face down. Abilities that trigger when a permanent is turned face up won’t trigger.

721.2h If a merged permanent contains a flip card (see rule 709), that component’s alternative characteristics are used instead of its normal characteristics if the merged permanent is flipped.

721.2i If a merged permanent contains one or more transforming double-faced cards (see rule 711), transforming that permanent causes each of those double-faced cards to turn so that its other face is up.

721.2j A face-up merged permanent that contains a double-faced card or meld card can’t be turned face down.

721.3. If a merged permanent leaves the battlefield, one permanent leaves the battlefield and each of the individual components are put into the appropriate zone.

721.3a If a merged permanent is put into its owner’s graveyard or library, that player may arrange the new objects in any order. If it’s put into its owner’s library, that player doesn’t reveal the order.

721.3b If a player exiles a merged permanent, that player determines the relative timestamp order of the cards at that time. This is an exception to the procedure described in rule 613.7k.

721.3c If an effect can find the new object that a merged permanent becomes as it leaves the battlefield, it finds all of those objects. (See rule 400.7.) If that effect causes actions to be taken upon those objects, the same actions are taken upon each of them.

721.3d If multiple replacement effects could be applied to the event of a merged permanent leaving the battlefield or being put into the new zone, applying one of those replacement effects to the object applies it to all components of the object. If the merged permanent is a commander, it may be exempt from this rule; see rule 903.9a.

721.3e If a replacement effect applies to a “card” being put into a zone without also including tokens, that effect applies to all components of the merged permanent if it’s not a token, including components that are tokens. If the merged permanent is a token but some of its components are cards, the merged permanent and its token components are put into the appropriate zone, and the components that are cards are moved by the replacement effect.

722. Taking Shortcuts

722.1. When playing a game, players typically make use of mutually understood shortcuts rather than explicitly identifying each game choice (either taking an action or passing priority) a player makes.

722.1a The rules for taking shortcuts are largely informal. As long as each player in the game understands the intent of each other player, any shortcut system they use is acceptable.

722.1b Occasionally the game gets into a state in which a set of actions could be repeated indefinitely (thus creating a “loop”). In that case, the shortcut rules can be used to determine how many times those actions are repeated without having to actually perform them, and how the loop is broken.

722.1c Tournaments use a modified version of the rules governing shortcuts and loops. These rules are covered in the Magic: The Gathering Tournament Rules (found at WPN.Wizards.com/en/resources/rules-documents). Whenever the Tournament Rules contradict these rules during a tournament, the Tournament Rules take precedence.

722.2. Taking a shortcut follows the following procedure.

722.2a At any point in the game, the player with priority may suggest a shortcut by describing a sequence of game choices, for all players, that may be legally taken based on the current game state and the predictable results of the sequence of choices. This sequence may be a non-repetitive series of choices, a loop that repeats a specified number of times, multiple loops, or nested loops, and may even cross multiple turns. It can’t include conditional actions, where the outcome of a game event determines the next action a player takes. The ending point of this sequence must be a place where a player has priority, though it need not be the player proposing the shortcut.
Example: A player controls a creature enchanted by Presence of Gond, which grants the creature the ability “{T}: Create a 1/1 green Elf Warrior creature token,” and another player controls Intruder Alarm, which reads, in part, “Whenever a creature enters the battlefield, untap all creatures.” When the player has priority, they may suggest “I’ll create a million tokens,” indicating the sequence of activating the creature’s ability, all players passing priority, letting the creature’s ability resolve and create a token (which causes Intruder Alarm’s ability to trigger), Intruder Alarm’s controller putting that triggered ability on the stack, all players passing priority, Intruder Alarm’s triggered ability resolving, all players passing priority until the player proposing the shortcut has priority, and repeating that sequence 999,999 more times, ending just after the last token-creating ability resolves.

722.2b Each other player, in turn order starting after the player who suggested the shortcut, may either accept the proposed sequence, or shorten it by naming a place where they will make a game choice that’s different than what’s been proposed. (The player doesn’t need to specify at this time what the new choice will be.) This place becomes the new ending point of the proposed sequence.
Example: The active player draws a card during her draw step, then says, “Go.” The nonactive player is holding Into the Fray (an instant that says “Target creature attacks this turn if able”) and says, “I’d like to cast a spell during your beginning of combat step.” The current proposed shortcut is that all players pass priority at all opportunities during the turn until the nonactive player has priority during the beginning of combat step.

722.2c Once the last player has either accepted or shortened the shortcut proposal, the shortcut is taken. The game advances to the last proposed ending point, with all game choices contained in the shortcut proposal having been taken. If the shortcut was shortened from the original proposal, the player who now has priority must make a different game choice than what was originally proposed for that player.

722.3. Sometimes a loop can be fragmented, meaning that each player involved in the loop performs an independent action that results in the same game state being reached multiple times. If that happens, the active player (or, if the active player is not involved in the loop, the first player in turn order who is involved) must then make a different game choice so the loop does not continue.
Example: In a two-player game, the active player controls a creature with the ability “{0}: [This creature] gains flying,” the nonactive player controls a permanent with the ability “{0}: Target creature loses flying,” and nothing in the game cares how many times an ability has been activated. Say the active player activates his creature’s ability, it resolves, then the nonactive player activates her permanent’s ability targeting that creature, and it resolves. This returns the game to a game state it was at before. The active player must make a different game choice (in other words, anything other than activating that creature’s ability again). The creature doesn’t have flying. Note that the nonactive player could have prevented the fragmented loop simply by not activating her permanent’s ability, in which case the creature would have had flying. The nonactive player always has the final choice and is therefore able to determine whether the creature has flying.

722.4. If a loop contains only mandatory actions, the game is a draw. (See rules 104.4b and 104.4f.)

722.5. No player can be forced to perform an action that would end a loop other than actions called for by objects involved in the loop.
Example: A player controls Seal of Cleansing, an enchantment that reads, “Sacrifice Seal of Cleansing: Destroy target artifact or enchantment.” A mandatory loop that involves an artifact begins. The player is not forced to sacrifice Seal of Cleansing to destroy the artifact and end the loop.

722.6. If a loop contains an effect that says “[A] unless [B],” where [A] and [B] are each actions, no player can be forced to perform [B] to break the loop. If no player chooses to perform [B], the loop will continue as though [A] were mandatory.

723. Handling Illegal Actions

723.1. If a player takes an illegal action or starts to take an action but can’t legally complete it, the entire action is reversed and any payments already made are canceled. No abilities trigger and no effects apply as a result of an undone action. If the action was casting a spell, the spell returns to the zone it came from. Each player may also reverse any legal mana abilities that player activated while making the illegal play, unless mana from those abilities or from any triggered mana abilities they caused to trigger was spent on another mana ability that wasn’t reversed. Players may not reverse actions that moved cards to a library, moved cards from a library to any zone other than the stack, caused a library to be shuffled, or caused cards from a library to be revealed.

723.2. When reversing illegal spells and abilities, the player who had priority retains it and may take another action or pass. The player may redo the reversed action in a legal way or take any other action allowed by the rules.

8. Multiplayer Rules

800. General

800.1. A multiplayer game is a game that begins with more than two players. This section contains additional optional rules that can be used for multiplayer play.

800.2. These rules consist of a series of options that can be added to a multiplayer game and a number of variant styles of multiplayer play. A single game may use multiple options but only one variant.

800.3. Many multiplayer Magic tournaments have additional rules not included here, including rules for deck construction. See the most current Magic: The Gathering Tournament Rules for more information. They can be found at WPN.Wizards.com/en/resources/rules-documents.

800.4. Unlike two-player games, multiplayer games can continue after one or more players have left the game.

800.4a When a player leaves the game, all objects (see rule 109) owned by that player leave the game and any effects which give that player control of any objects or players end. Then, if that player controlled any objects on the stack not represented by cards, those objects cease to exist. Then, if there are any objects still controlled by that player, those objects are exiled. This is not a state-based action. It happens as soon as the player leaves the game. If the player who left the game had priority at the time they left, priority passes to the next player in turn order who’s still in the game.
Example: Alex casts Mind Control, an Aura that reads, “You control enchanted creature,” on Bianca’s Assault Griffin. If Alex leaves the game, so does Mind Control, and Assault Griffin reverts to Bianca’s control. If, instead, Bianca leaves the game, so does Assault Griffin, and Mind Control is put into Alex’s graveyard.
Example: Alex casts Act of Treason, which reads, in part, “Gain control of target creature until end of turn,” targeting Bianca’s Runeclaw Bears. If Alex leaves the game, Act of Treason’s change-of-control effect ends and Runeclaw Bears reverts to Bianca’s control.
Example: Alex casts Bribery, which reads, “Search target opponent’s library for a creature card and put that card onto the battlefield under your control. Then that player shuffles their library,” targeting Bianca. Alex puts Serra Angel onto the battlefield from Bianca’s library. If Bianca leaves the game, Serra Angel also leaves the game. If, instead, Alex leaves the game, Serra Angel is exiled.
Example: Alex controls Genesis Chamber, which reads, “Whenever a nontoken creature enters the battlefield, if Genesis Chamber is untapped, that creature’s controller creates a 1/1 colorless Myr artifact creature token.” If Alex leaves the game, all such Myr tokens that entered the battlefield under Alex’s control leave the game, and all such Myr tokens that entered the battlefield under any other player’s control remain in the game.

800.4b If an object would change to the control of a player who has left the game, it doesn’t. If a token would be created under the control of a player who has left the game, no token is created. If an object would be put onto the battlefield or onto the stack under the control of a player who has left the game, that object remains in its current zone. If a player would be controlled by a player who has left the game, they aren’t.

800.4c If an effect that gives a player still in the game control of an object ends, there is no other effect giving control of that object to another player in the game, and the player who controlled that object by default has left the game, the object is exiled. This is not a state-based action. It happens as soon as the control-changing effect ends.

800.4d If an object that would be owned by a player who has left the game would be created in any zone, it isn’t created. If a triggered ability that would be controlled by a player who has left the game would be put onto the stack, it isn’t put on the stack.
Example: Astral Slide is an enchantment that reads, “Whenever a player cycles a card, you may exile target creature. If you do, return that creature to the battlefield under its owner’s control at the beginning of the next end step.” During Alex’s turn, Bianca uses Astral Slide’s ability to exile Alex’s Hypnotic Specter. Before the end of that turn, Bianca leaves the game. At the beginning of the end step, the delayed triggered ability generated by Astral Slide that would return Hypnotic Specter to the battlefield triggers, but it isn’t put on the stack. Hypnotic Specter never returns to the battlefield.

800.4e If combat damage would be assigned to a player who has left the game, that damage isn’t assigned.

800.4f If an object requires a player who has left the game to pay a cost or choose whether to pay a cost, that cost is not paid.

800.4g If an object requires a player who has left the game to make a choice other than whether to pay a cost, the controller of the object chooses another player to make that choice. If the original choice was to be made by an opponent of the controller of the object, that player chooses another opponent if possible.

800.4h If a rule requires a player who has left the game to make a choice, the next player in turn order makes that choice.

800.4i If an effect requires information about a specific player, the effect uses the current information about that player if they are still in the game; otherwise, the effect uses the last known information about that player before they left the game. If an effect requires information from the game about actions players have taken, the effect can find actions that were taken by a player who has left the game.

800.4j If a player leaves the game during their turn, that turn continues to its completion without an active player. If the active player would receive priority, instead the next player in turn order receives priority, or the top object on the stack resolves, or the phase or step ends, whichever is appropriate.

800.4k If a player who has left the game would begin a turn, that turn doesn’t begin.

800.4m When a player leaves the game, any continuous effects with durations that last until that player’s next turn or until a specific point in that turn will last until that turn would have begun. They neither expire immediately nor last indefinitely.

800.4n When a player leaves the game, objects that player owns in the ante zone do not leave the game. This is an exception to rule 800.4a. See rule 407, “Ante.”

800.4p In a Planechase game, if the player designated as the planar controller would leave the game, instead the next player in turn order that wouldn’t leave the game becomes the planar controller, then the old planar controller leaves the game. See rule 309.5.

800.5. Unless a chosen variant or option prescribes otherwise, seating order is determined by any mutually agreeable method. For example, players could agree to remain where they were before the game began, roll dice to determine seating order, and so on.

800.6. In a multiplayer game, the first mulligan a player takes doesn’t count toward the number of cards that player will put on the bottom of their library or the number of mulligans that player may take. Subsequent mulligans are counted toward these numbers as normal.

800.7. In a multiplayer game other than a Two-Headed Giant game, the starting player doesn’t skip the draw step of their first turn. In a Two-Headed Giant game, the team who plays first skips the draw step of their first turn. See rule 103.7.

801. Limited Range of Influence Option

801.1. Limited range of influence is an option that can be applied to most multiplayer games. It’s always used in the Emperor variant (see rule 809), and it’s often used for games involving five or more players.

801.2. A player’s range of influence is the maximum distance from that player, measured in player seats, that the player can affect. Players within that many seats of the player are within that player’s range of influence. Objects controlled by players within a player’s range of influence are also within that player’s range of influence. Range of influence covers spells, abilities, effects, damage dealing, attacking, making choices, and winning the game.

801.2a The most commonly chosen limited ranges of influence are 1 seat and 2 seats. Different players may have different ranges of influence.
Example: A range of influence of 1 means that only you and the players seated directly next to you are within your range of influence.
Example: A range of influence of 2 means that you and the two players to your left and the two players to your right are within your range of influence.

801.2b A player is always within their own range of influence.

801.2c The particular players within each player’s range of influence are determined as each turn begins.
Example: In a game with a range of influence of 1, Alex is seated to the left of Rob, and Carissa is seated to the right of Rob. Carissa is not in Alex’s range of influence. If Rob leaves the game, Carissa will enter Alex’s range of influence at the start of the next turn.

801.2d An object is within a player’s range of influence if it’s controlled by that player or by another player within that many seats of that player.

801.3. Creatures can attack only opponents within their controller’s range of influence or planeswalkers controlled by those opponents. If no opponents are within a player’s range of influence, creatures that player controls can’t attack.

801.4. Objects and players outside a player’s range of influence can’t be the targets of spells or abilities that player controls.

801.5. Some cards require players to make choices. These cards work differently when the limited range of influence option is used.

801.5a If a player is asked to choose an object or player, they must choose one within their range of influence.
Example: In a game with a range of influence of 1, Alex is seated to the left of Rob. Alex activates the ability of Cuombajj Witches, which reads, “{T}: Cuombajj Witches deals 1 damage to any target and 1 damage to any target of an opponent’s choice,” targeting Rob and choosing Rob as the opponent who picks the other target. Rob must choose a target that’s in both his range of influence and in the range of influence of the controller of Cuombajj Witches. He must therefore choose himself, Alex, or a creature controlled by either himself or Alex.

801.5b If a player is asked to choose between one or more options (and not between one or more objects or players), they can choose between those options even if those options refer to objects or players outside the player’s range of influence.
Example: Alex, who has a range of influence of 2, is seated to the left of Rob, and Carissa, who has a range of influence of 1, is seated to the right of Rob. Alex casts a spell that reads, “An opponent chooses one — You draw two cards; or each creature you control gets +2/+2 until end of turn,” and chooses Carissa to make that choice. Carissa can choose the mode even though Alex is out of her range.

801.5c If an effect requires a choice and there’s no player who can make that choice within its controller’s range of influence, the closest appropriate player to its controller’s left makes that choice.
Example: In an Emperor game in which all players have range of influence 1, an emperor casts Fact or Fiction, which reads, “Reveal the top five cards of your library. An opponent separates those cards into two piles. Put one pile into your hand and the other into your graveyard.” Since no opponent is within the emperor’s range of influence, the nearest opponent to the emperor’s left separates the cards into piles.

801.6. A player can’t activate the activated abilities of an object outside of their range of influence.

801.7. A triggered ability doesn’t trigger unless its trigger event happens entirely within the range of influence of its source’s controller.
Example: In a game in which all players have range of influence 1, Alex is seated to the left of Rob. Rob controls two Auras attached to Alex’s Runeclaw Bear: One with the trigger condition “Whenever enchanted creature becomes blocked,” and one with the trigger condition “Whenever enchanted creature becomes blocked by a creature.” Alex’s Runeclaw Bear attacks the player to Alex’s left and becomes blocked. The ability of Rob’s first Aura triggers because the entire event (Runeclaw Bear becomes blocked) happens within Rob’s range of influence. The ability of Rob’s second Aura doesn’t trigger, however, because that event includes the blocking creature, which is out of Rob’s range.

801.7a If a trigger event includes an object moving out of or into a player’s range of influence, use the game state before or after the event as appropriate to determine whether the triggered ability will trigger. See rules 603.6 and 603.10.
Example: Carissa and Alex are outside each other’s range of influence. Carissa controls a Runeclaw Bear owned by Alex and they each control an Extractor Demon, a creature which reads, in part, “Whenever another creature leaves the battlefield, you may have target player mill two cards.” The Runeclaw Bear is destroyed and is put into Alex’s graveyard. The ability of Alex’s Extractor Demon doesn’t trigger because the leaves-the-battlefield event was outside Alex’s range of influence. The ability of Carissa’s Extractor Demon does trigger, even though the creature is going to a graveyard outside her range, because the leaves-the-battlefield event was within her range.

801.8. An Aura can’t enchant an object or player outside its controller’s range of influence. If an Aura is attached to an illegal object or player, the Aura is put into its owner’s graveyard as a state-based action. See rule 704.

801.9. An Equipment can’t equip an object outside its controller’s range of influence, and a Fortification can’t fortify an object outside its controller’s range of influence. If an Equipment or Fortification is attached to an illegal permanent, it becomes unattached from that permanent but remains on the battlefield. This is a state-based action. See rule 704.

801.10. Spells and abilities can’t affect objects or players outside their controller’s range of influence. The parts of the effect that attempt to affect an out-of-range object or player will do nothing. The rest of the effect will work normally.
Example: In a six-player game in which each player has range of influence 1, Alex casts Pyroclasm, which reads, “Pyroclasm deals 2 damage to each creature.” Pyroclasm deals 2 damage to each creature controlled by Alex, the player to Alex’s left, and the player to Alex’s right. No other creatures are dealt damage.

801.11. If a spell or ability requires information from the game, it gets only information from within its controller’s range of influence. It doesn’t see objects or events outside its controller’s range of influence.
Example: In a six-player game where each player has range of influence 1, Alex controls Coat of Arms, which reads, “Each creature gets +1/+1 for each other creature on the battlefield that shares at least one creature type with it.” Coat of Arms will boost Alex’s creatures based only on what creatures are controlled by Alex, the player to Alex’s left, and the player to Alex’s right. It won’t take other creatures into account.
Example: In the same game, Rob is sitting to the right of Alex. Coat of Arms will boost Rob’s creatures based on what creatures are controlled by players within Alex’s range of influence, including the player sitting to Alex’s left, who’s out of Rob’s range of influence.

801.12. The “world rule” (see rule 704.5k) applies to a permanent only if other world permanents are within its controller’s range of influence.

801.13. Replacement and prevention effects watch for a particular event to happen and then completely or partially replace that event. The limited range of influence option can cause the modified event to contain instructions that can’t be carried out, in which case the player simply ignores the impossible instructions. See rule 614, “Replacement Effects,” and rule 615, “Prevention Effects.”

801.13a If a replacement effect tries to cause a spell or ability to affect an object or player outside its controller’s range of influence, that portion of the event does nothing.
Example: Alex casts Lava Axe (“Lava Axe deals 5 damage to target player or planeswalker.”) targeting Rob. In response, Rob casts Captain’s Maneuver (“The next X damage that would be dealt to target creature, planeswalker, or player this turn is dealt to another target creature, planeswalker, or player instead.”) with X equal to 3, targeting Carissa. Carissa isn’t in Alex’s range of influence. When Lava Axe resolves, it deals 2 damage to Rob and no damage to Carissa.

801.13b If a spell or ability creates an effect that prevents damage that would be dealt by a source, it can affect only sources within the spell or ability’s controller’s range of influence. If a spell or ability creates an effect that prevents damage that would be dealt to a permanent or player, it can affect only permanents and players within the spell or ability’s controller’s range of influence. If a spell or ability creates an effect that prevents damage, but neither the source nor the would-be recipient of the damage is specified, it prevents damage only if both the source and recipient of that damage are within the spell or ability’s controller’s range of influence.
Example: Rob is within Alex’s range of influence, but Carissa is not. Alex controls an enchantment that says, “Prevent all damage that would be dealt by creatures.” Carissa attacks Rob with a creature. The creature deals combat damage to Rob.
Example: Rob is within Alex’s range of influence, but Carissa is not. Carissa casts Lightning Blast (“Lightning Blast deals 4 damage to any target.”) targeting Rob. In response, Alex casts Mending Hands (“Prevent the next 4 damage that would be dealt to any target this turn.”) targeting Rob. The damage to Rob is prevented.
Example: Rob is within Alex’s range of influence, but Carissa is not. Carissa attacks Rob with a creature, and Rob blocks with a creature. Alex casts Fog (“Prevent all combat damage that would be dealt this turn.”) Carissa and Rob’s creatures deal combat damage to each other.

801.14. If an effect states that a player wins the game, all of that player’s opponents within that player’s range of influence lose the game instead.

801.15. If the effect of a spell or ability states that the game is a draw, the game is a draw for that spell or ability’s controller and all players within that player’s range of influence. They leave the game. All remaining players continue to play the game.

801.16. If the game somehow enters a “loop” of mandatory actions, repeating a sequence of events with no way to stop, the game is a draw for each player who controls an object that’s involved in that loop, as well as for each player within the range of influence of any of those players. They leave the game. All remaining players continue to play the game.

801.17. Effects that restart the game (see rule 719) are exempt from the limited range of influence option. All players in the game will be involved in the new game.

801.18. In multiplayer Planechase games other than Grand Melee games, plane cards and phenomenon cards are exempt from the limited range of influence option. Their abilities, and the effects of those abilities, affect all applicable objects and players in the game. See rule 901, “Planechase.”

802. Attack Multiple Players Option

802.1. Some multiplayer games allow the active player to attack multiple other players. If this option is used, a player can also choose to attack only one player during a particular combat.

802.2. As the combat phase starts, the attacking player doesn’t choose an opponent to become the defending player. Instead, all the attacking player’s opponents are defending players during the combat phase.

802.2a Any rule, object, or effect that refers to a “defending player” refers to one specific defending player, not to all of the defending players. If an ability of an attacking creature refers to a defending player, or a spell or ability refers to both an attacking creature and a defending player, then unless otherwise specified, the defending player it’s referring to is the player that creature is attacking, or the controller of the planeswalker that creature is attacking. If that creature is no longer attacking, the defending player it’s referring to is the player that creature was attacking before it was removed from combat or the controller of the planeswalker that creature was attacking before it was removed from combat. If a spell or ability could apply to multiple attacking creatures, the appropriate defending player is individually determined for each of those attacking creatures. If there are multiple defending players that could be chosen, the controller of the spell or ability chooses one.
Example: Rob attacks Alex with Runeclaw Bear and attacks Carissa with a creature with mountainwalk. Whether the creature with mountainwalk can be blocked depends only on whether Carissa controls a Mountain.

802.3. As the attacking player declares each attacking creature, they choose a defending player or a planeswalker controlled by a defending player for it to attack. See rule 508, “Declare Attackers Step.”

802.3a Restrictions and requirements that don’t apply to attacking a specific player are evaluated based on the entire group of attacking creatures. Restrictions and requirements that apply to attacking a specific player apply only to creatures attacking that player. The entire group of attacking creatures must still be legal. See rule 508.1.

802.3b Creatures in a band can’t attack different players. See rule 702.22, “Banding.”

802.4. If more than one player is being attacked or controls a planeswalker that’s being attacked, each defending player in APNAP order declares blockers as the declare blockers step begins. (See rule 101.4 and rule 509, “Declare Blockers Step.”) The first defending player declares all their blocks, then the second defending player, and so on.

802.4a A defending player can block only with creatures they control. Those creatures can block only creatures attacking that player or a planeswalker that player controls.

802.4b When determining whether a defending player’s blocks are legal, ignore any creatures attacking other players and any blocking creatures controlled by other players.

802.5. After blockers have been declared, if any creatures are blocking multiple creatures, each defending player in APNAP order announces the damage assignment order among the attacking creatures for each blocking creature they control. See rule 510, “Combat Damage Step.”

802.6. Combat damage is assigned in APNAP order. Other than that, the combat damage step proceeds just as in a two-player game. See rule 510, “Combat Damage Step.”

803. Attack Left and Attack Right Options

803.1. Some multiplayer games use the optional attack left or attack right rules.

803.1a If the attack left option is used, a player can attack only an opponent seated immediately to their left. If a player’s nearest opponent to the left is more than one seat away, the player can’t attack.

803.1b If the attack right option is used, a player can attack only an opponent seated immediately to their right. If a player’s nearest opponent to the right is more than one seat away, the player can’t attack.

804. Deploy Creatures Option

804.1. The Emperor variant always uses the deploy creatures option, and it can be used in other variants that allow players to compete in teams. Multiplayer formats in which players compete as individuals usually don’t use this option.

804.2. Each creature has the ability “{T}: Target teammate gains control of this creature. Activate only as a sorcery.”

805. Shared Team Turns Option

805.1. Some multiplayer games between teams use the shared team turns option. It’s always used in the Two-Headed Giant variant (see rule 810) and the Archenemy casual variant (see rule 904). It can be used only if the members of each team are sitting in adjacent seats.

805.2. Within each team, the player seated in the rightmost seat from that team’s perspective is the primary player. If the players on a team can’t agree on a choice, such as which creatures attack or what order triggered abilities are put on the stack, the primary player makes that choice.

805.3. The methods described in rule 103.1 are used to determine which team will take the first turn. The team determined this way is the starting team.

805.3a The process for handling mulligans is altered accordingly. First, each player on the starting team, in whatever order that team likes, declares whether that player will take a mulligan. Then the players on each other team in turn order do the same. Teammates may consult while making their decisions. Then all mulligans are taken at the same time. Teammates may consult while choosing which cards, if any, to put on the bottom of their library. A player may take a mulligan even after a teammate has decided to keep their opening hand. See rule 103.4.

805.3b The process for handling cards that allow a player to begin the game with them on the battlefield is altered accordingly. First, each player on the starting team, in whatever order that team likes, may put any or all such cards onto the battlefield from that player’s opening hand. Teammates may consult while making their decisions. Then each player on each other team in turn order does the same.

805.4. Each team takes turns rather than each player.

805.4a The team whose turn it is is the active team. Each other team is a nonactive team.

805.4b Each player on a team draws a card during that team’s draw step.

805.4c Each player on a team may play a land during each of that team’s turns.

805.4d An ability that triggers at the beginning of a step or phase may trigger multiple times if it triggers at the beginning of “each player’s” or “each opponent’s” step or phase. These abilities trigger once for each appropriate player if the ability’s trigger condition, effect, or intervening “if” clause refers to “that player,” “that opponent,” or similar.

805.5. Teams have priority, not individual players.

805.5a A player may cast a spell, activate an ability, or take a special action when their team has priority.

805.5b If a team has priority and no player on that team wishes to do anything, that team passes. If all teams pass in succession (that is, if all teams pass without any player taking any actions in between passing), the top object on the stack resolves, then the active team receives priority. If the stack is empty when all teams pass in succession, the phase or step ends and the next one begins.

805.6. The Active Player, Nonactive Player order rule (see rule 101.4) is modified if the shared team turns option is used. If multiple teams would make choices and/or take actions at the same time, first the active team makes any choices required, then each nonactive team in turn order makes any choices required. If multiple players would make choices and/or take actions at the same time, first each player on the active team makes any choices required in whatever order they like, then the players on each nonactive team in turn order do the same. Once all choices have been made, the actions happen simultaneously.

805.6a If an effect instructs more than one player to draw cards in a game that’s using the shared team turns option, first each player on the active team, in whatever order that team likes, performs that player’s draws, then each player on each nonactive team in turn order does the same.

805.7. If multiple triggered abilities have triggered since the last time a team received priority, the members of the active team put all triggered abilities any of them controls on the stack in any order they choose, then the members of each nonactive team in turn order do the same.

805.8. If an effect gives a player an extra turn or adds a phase or step to that player’s turn, that player’s team takes the extra turn, phase, or step. If an effect causes a player to skip a step, phase, or turn, that player’s team does so. If a single effect causes more than one player on the same team to add or skip the same step, phase, or turn, that team adds or skips only that step, phase, or turn. If an effect causes a player to control another player, the first player controls the affected player’s team.

805.9. Any ability that refers to the “active player” refers to one specific active player, not to all of the active players. The ability’s controller chooses which one the ability refers to at the time its effect is applied.

805.10. The shared team turns option uses different combat rules than other multiplayer options.

805.10a Each team’s creatures attack the other team as a group. During the combat phase, the active team is the attacking team and each player on the active team is an attacking player. Likewise, the nonactive team is the defending team and each player on the nonactive team is a defending player.

805.10b As the declare attackers step begins, the active team declares attackers. For each attacking creature, the attacking team announces which defending player or planeswalker that creature is attacking. The active team has one combined attack, and that set of attacking creatures must be legal as a whole. See rule 508.1.

805.10c Any rule, object, or effect that refers to an “attacking player” refers to one specific attacking player, not to all attacking players. If an ability of a blocking creature refers to an attacking player, or a spell or ability refers to both a blocking creature and an attacking player, then unless otherwise specified, the attacking player it’s referring to is the player who controls the attacking creature that blocking creature is blocking. If a spell or ability could apply to multiple blocking creatures, the appropriate attacking player is individually determined for each of those blocking creatures. If there are multiple attacking players that could be chosen, the controller of the spell or ability chooses one.

805.10d As the declare blockers step begins, the defending team declares blockers. Creatures controlled by the defending players can block creatures attacking any player on the defending team or attacking a planeswalker controlled by one of those players. The defending team has one combined block, and that set of blocking creatures must be legal as a whole. See rule 509.1.

805.10e Any rule, object, or effect that refers to a “defending player” refers to one specific defending player, not to all of the defending players. If an ability of an attacking creature refers to a defending player, or a spell or ability refers to both an attacking creature and a defending player, then unless otherwise specified, the defending player it’s referring to is the player that creature is attacking, or the controller of the planeswalker that creature is attacking. If that creature is no longer attacking, the defending player it’s referring to is the player that creature was attacking before it was removed from combat or the controller of the planeswalker that creature was attacking before it was removed from combat. If a spell or ability could apply to multiple attacking creatures, the appropriate defending player is individually determined for each of those attacking creatures. If there are multiple defending players that could be chosen, the controller of the spell or ability chooses one.

805.10f Once blockers have been declared, for each attacking creature that’s become blocked by multiple creatures, the active team announces the damage assignment order among the blocking creatures. Then, for each creature that’s blocking multiple creatures, the defending team announces the damage assignment order among the attacking creatures.

805.10g As the combat damage step begins, the active team announces how each attacking creature will assign its combat damage. Then the defending team announces how each blocking creature will assign its combat damage. See rule 510.1.

806. Free-for-All Variant

806.1. In Free-for-All multiplayer games, a group of players compete as individuals against each other.

806.2. Any multiplayer options used are determined before play begins. The Free-for-All variant uses the following default options.

806.2a The limited range of influence option usually isn’t used in Free-for-All games. If it is, each player has the same range of influence, which is determined before play begins. See rule 801, “Limited Range of Influence Option.”

806.2b Exactly one of the attack left, attack right, and attack multiple players options must be used. See rule 803, “Attack Left and Attack Right Options,” and rule 802, “Attack Multiple Players Option.”

806.2c The deploy creatures option isn’t used in the Free-for-All variant.

806.3. The players are randomly seated around the table.

807. Grand Melee Variant

807.1. The Grand Melee variant is a modification of the Free-for-All variant, in which a group of players compete against each other as individuals. Grand Melee is normally used only in games begun with ten or more players.

807.2. Any multiplayer options used are decided before play begins. The Grand Melee variant uses the following default options.

807.2a Each player has a range of influence of 1 (see rule 801).

807.2b The attack left option is used (see rule 803).

807.2c The attack multiple players and deploy creatures options aren’t used in the Grand Melee variant.

807.3. The players are seated at random.

807.4. The Grand Melee variant allows multiple players to take turns at the same time. Moving turn markers keep track of which players are currently taking turns. Each turn marker represents an active player’s turn.

807.4a There is one turn marker for each full four players in the game.
Example: A Grand Melee game with sixteen players has four turn markers. A game with fifteen players has three turn markers.

807.4b The starting player in the game gets the first turn marker. The player four seats to that player’s left (the fifth player) takes the second turn marker, and so on until all the turn markers have been handed out. Each turn marker is assigned a number in this way. Then all players with turn markers start their turns at the same time.

807.4c After a player ends their turn, that player passes the turn marker to the player on their left. If a player with a turn marker leaves the game during their turn, the player to their left takes the turn marker after that turn ends. If a player with a turn marker leaves the game before their turn begins, the player to their left takes the turn marker immediately.

807.4d A player who receives a turn marker can’t begin their turn if any player in the three seats to their left has a turn marker. If this is the case, that player waits until the player four seats to their left takes the other turn marker.

807.4e If a player leaves the game and that player leaving the game would reduce the number of turn markers in the game, the turn marker immediately to the departed player’s right is designated for removal. If more than one player leaves the game simultaneously, those players leaving the game would reduce the number of turn markers in the game, and there are multiple turn markers that could be removed, the marker with the lowest number is designated for removal. A turn marker may be designated for removal multiple times.

807.4f For the purposes of determining if one or more players leaving the game would reduce the number of turn markers in the game (see rule 807.4e), disregard turn markers already designated for removal.

807.4g If a player who’s taking a turn has a turn marker that’s been designated for removal, that turn marker is removed rather than being passed after that turn ends. If a player who’s not taking a turn has a turn marker that’s been designated for removal, that turn marker is removed immediately. If a removed turn marker had been designated for removal multiple times, the turn marker to its right becomes designated for removal that many times minus one.

807.4h If one or more consecutively seated players leave the game, the players that were on either side of those seats don’t enter one another’s range of influence until the next turn begins.

807.4i If an effect causes a player with a turn marker to take an extra turn after the current one, that player keeps the turn marker and starts their next turn after the current turn ends, unless another turn marker is too close on either side at that time. If a turn marker is within three seats on the player’s left, the extra turn waits to begin until the player four seats to their left takes the other turn marker. If a turn marker is within three seats on the player’s right, the player passes the turn marker to their left when the turn ends rather than keeping it, and the player will take the extra turn immediately before their next turn.

807.4j If an effect would cause a player to take an extra turn after the current turn, but that player wouldn’t have a turn marker at the start of that turn, that player will take the extra turn immediately before their next turn instead.
Example: During Alex’s turn, he casts Time Walk, which causes him to take an extra turn after this one. During the same turn, the player to Alex’s left leaves the game, which causes the number of turn markers to be reduced. After Alex’s current turn ends, his turn marker is removed. He won’t take the extra turn from Time Walk until just before his normal turn the next time he receives a turn marker.

807.5. Rather than having a single stack, Grand Melee games contain multiple stacks. Each turn marker represents its own stack.

807.5a A player gets priority for a particular turn marker’s stack only if the turn marker is within their range of influence or an object on that stack is controlled by a player within their range of influence.

807.5b If a player has priority for multiple stacks and casts a spell, activates an ability, or a triggered ability they control triggers, the player must specify which one of those stacks the spell or ability is put on. If an object on one of those stacks caused the triggered ability to trigger, the player must put it on that stack. If a resolving spell or ability on one of those stacks causes a player to cast a spell or create a copy of a spell, the new spell must be put on the same stack. If a spell or ability targets an object on one of those stacks, it must be put on the same stack as its target; it can’t target objects on multiple stacks.

808. Team vs. Team Variant

808.1. Team vs. Team games are played with two or more teams. Each team may have any number of players on it.

808.2. Each team sits together on one side of the table. Each team decides the order in which its players sit.

808.3. Any multiplayer options used are determined before play begins. The Team vs. Team variant uses the following default options.

808.3a The attack multiple players option is used (see rule 802).

808.3b The deploy creatures options and limited range of influence options usually aren’t used in the Team vs. Team variant.

808.4. To determine which player goes first, randomly choose a team. If that team has an odd number of players, the player in its center seat goes first. If that team has an even number of players, the player to the left of its midpoint goes first. Turn order goes to the players’ left.

808.5. In the Team vs. Team variant, a team’s resources (cards in hand, mana, and so on) are not shared. Teammates may review each other’s hands and discuss strategies at any time. Teammates can’t manipulate each other’s cards or permanents.

809. Emperor Variant

809.1. The Emperor variant involves two or more teams of three players each.

809.2. Each team sits together on one side of the table. Each team decides the order in which it’s seated. Each team has one emperor, who sits in the middle of the team. The remaining players on the team are generals whose job is to protect the emperor.

809.3. The Emperor variant uses the following default options.

809.3a The range of influence is limited to 2 for emperors and 1 for generals. See rule 801, “Limited Range of Influence Option.”

809.3b Emperor games use the deploy creatures option (see rule 804).

809.3c A player can attack only an opponent seated immediately next to them.
Example: At the start of an Emperor game, neither emperor can attack any opponents, even though both of the opposing generals are within their spell range.

809.4. Randomly determine which emperor goes first. Turn order goes to the players’ left.

809.5. The Emperor variant includes the following specifications for winning and losing the game. All other rules for ending the game also apply. (See rule 104.)

809.5a A team wins the game if its emperor wins.

809.5b A team loses the game if its emperor loses.

809.5c The game is a draw for a team if the game is a draw for its emperor.

809.6. The Emperor variant can also be played with any number of equally sized teams. If the teams have more than three players, the range of influence of each player should be adjusted.

809.6a Each general’s range of influence should be the minimum number that allows one general from an opposing team to begin the game within their range of influence. Each emperor’s range of influence should be the minimum number that allows two generals from opposing teams to begin the game within their range of influence. Players should be seated such that no emperor begins the game within the range of influence of another emperor.
Example: In an Emperor game between two teams of four players each, the player configuration (either clockwise or counterclockwise around the table) should be: Team A general 1, Team A emperor, Team A general 2, Team A general 3, Team B general 1, Team B emperor, Team B general 2, Team B general 3. Each emperor has range of influence 3. Each general 2 has range of influence 2. Each general 1 and general 3 has range of influence 1.

809.7. In the Emperor variant, a team’s resources (cards in hand, mana, and so on) are not shared. Teammates may review each other’s hands and discuss strategies at any time. Teammates can’t manipulate each other’s cards or permanents.

810. Two-Headed Giant Variant

810.1. Two-Headed Giant games are played with two teams of two players each.

810.2. The Two-Headed Giant variant uses the shared team turns option. (See rule 805.)

810.3. Each team sits together on one side of the table. Each team decides the order in which its players sit.

810.4. Each team has a shared life total, which starts at 30 life.

810.5. With the exception of life total and poison counters, a team’s resources (cards in hand, mana, and so on) are not shared in the Two-Headed Giant variant. Teammates may review each other’s hands and discuss strategies at any time. Teammates can’t manipulate each other’s cards or permanents.

810.6. The team who plays first skips the draw step of its first turn.

810.7. The Two-Headed Giant variant uses the combat rules for the shared team turns option (see rule 805.10). This is a change from previous rules.

810.8. The Two-Headed Giant variant uses the normal rules for winning or losing the game (see rule 104), with the following additions and specifications.

810.8a Players win and lose the game only as a team, not as individuals. If either player on a team loses the game, the team loses the game. If either player on a team wins the game, the entire team wins the game. If an effect says that a player can’t win the game, that player’s team can’t win the game. If an effect says that a player can’t lose the game, that player’s team can’t lose the game.
Example: In a Two-Headed Giant game, a player controls Transcendence, which reads, in part, “You don’t lose the game for having 0 or less life.” If that player’s team’s life total is 0 or less, that team doesn’t lose the game.
Example: In a Two-Headed Giant game, a player attempts to draw a card while there are no cards in that player’s library. That player loses the game, so that player’s entire team loses the game.
Example: In a Two-Headed Giant game, a player controls Platinum Angel, which reads, “You can’t lose the game and your opponents can’t win the game.” Neither that player nor their teammate can lose the game while Platinum Angel is on the battlefield, and neither player on the opposing team can win the game.

810.8b If a player concedes, their team leaves the game immediately. That team loses the game.

810.8c If a team’s life total is 0 or less, the team loses the game. (This is a state-based action. See rule 704.)

810.8d If a team has fifteen or more poison counters, that team loses the game. (This is a state-based action. See rule 704.)

810.9. Damage, loss of life, and gaining life happen to each player individually. The result is applied to the team’s shared life total.
Example: In a Two-Headed Giant game, a player casts Flame Rift, which reads, “Flame Rift deals 4 damage to each player.” Each team is dealt a total of 8 damage.

810.9a If a cost or effect needs to know the value of an individual player’s life total, that cost or effect uses the team’s life total instead.
Example: In a Two-Headed Giant game, a player on a team that has 17 life is targeted by Beacon of Immortality, which reads, in part, “Double target player’s life total.” That player gains 17 life, so the team winds up at 34 life.
Example: In a Two-Headed Giant game, a player controls Test of Endurance, an enchantment that reads, “At the beginning of your upkeep, if you have 50 or more life, you win the game.” At the beginning of that player’s upkeep, the player’s team wins the game if their team’s life total is 50 or more.
Example: In a Two-Headed Giant game, a player on a team that has 11 life controls Lurking Evil, an enchantment that reads, “Pay half your life, rounded up: Lurking Evil becomes a 4/4 Horror creature with flying.” To activate the ability, that player must pay 6 life. The team winds up at 5 life.

810.9b If a cost or effect allows both members of a team to pay life simultaneously, the total amount of life they pay may not exceed their team’s life total. (Players can always pay 0 life.)

810.9c If an effect sets a single player’s life total to a specific number, the player gains or loses the necessary amount of life to end up with the new total. The team’s life total is adjusted by the amount of life that player gained or lost.
Example: In a Two-Headed Giant game, a player on a team that has 25 life is targeted by an ability that reads, “Target player’s life total becomes 10.” That player’s life total is considered to be 25, so that player loses 15 life. The team winds up at 10 life.

810.9d If an effect would set the life total of each player on a team to a number, that team chooses one of its members. On that team, only that player is affected.
Example: In a Two-Headed Giant game, one team has 7 life and the other team has 13 life. A player casts Repay in Kind, which reads, “Each player’s life total becomes the lowest life total among all players.” Each team chooses one of its members to be affected. The result is that the chosen player on the team that has 13 life loses 6 life, so that team’s life total winds up at 7.

810.9e A player can’t exchange life totals with their teammate. If an effect would cause that to occur, the exchange won’t happen.

810.9f If an effect instructs a player to redistribute any number of players’ life totals, that player may not affect more than one member of each team this way.

810.9g If an effect says that a player can’t gain life, no player on that player’s team can gain life.

810.9h If an effect says that a player can’t lose life, no player on that player’s team can lose life or pay any amount of life other than 0.

810.10. Effects that cause players to get poison counters happen to each player individually. The poison counters are shared by the team.

810.10a If an effect needs to know how many poison counters an individual player has, that effect uses the number of poison counters that player’s team has. If an effect needs to know how many poison counters a player’s opponents have, that effect uses the number of poison counters opposing teams have.

810.10b If an effect says that a player loses poison counters, that player’s team loses that many poison counters.

810.10c If an effect says that a player can’t get poison counters, no player on that player’s team can get poison counters.

810.10d If a rule or effect needs to know what kinds of counters an individual player has, that effect uses the kinds of counters that player has and the kinds of counters that player’s team has. A player is “poisoned” if that player’s team has one or more poison counters.

810.11. The Two-Headed Giant variant can also be played with equally sized teams of more than two players. For each player a team has beyond the second, that team’s starting life total is increased by 15 and the number of poison counters required for the team to lose is increased by five. (These variants are called Three-Headed Giant, Four-Headed Giant, and so on.)

811. Alternating Teams Variant

811.1. Alternating Teams games are played with two or more teams of equal size.

811.2. Any multiplayer options used are determined before play begins. The Alternating Teams variant uses the following default options.

811.2a The recommended range of influence is 2. See rule 801, “Limited Range of Influence Option.”

811.2b Exactly one of the attack left, attack right, and attack multiple players options must be used. See rule 803, “Attack Left and Attack Right Options,” and rule 802, “Attack Multiple Players Option.”

811.2c The deploy creatures option isn’t normally used in the Alternating Teams variant.

811.3. At the start of the game, players are seated so that no one is next to a teammate and each team is equally spaced out.
Example: In an Alternating Teams game with three teams, A, B, and C, the seating around the table at the start of the game is A1, B1, C1, A2, B2, C2, A3, B3, C3, and so on.

811.4. A player can’t attack opponents who aren’t seated next to them.

811.5. In the Alternating Teams variant, a team’s resources (cards in hand, mana, and so on) are not shared. Teammates can’t review each other’s hands unless they are sitting next to each other. Teammates may discuss strategies at any time. Teammates can’t manipulate each other’s cards or permanents.


9. Casual Variants

900. General

900.1. This section contains additional optional rules that can be used for certain casual game variants. It is by no means comprehensive.

900.2. The casual variants detailed here use supplemental zones, rules, cards, and other game implements not used in traditional Magic games.

901. Planechase

901.1. In the Planechase variant, plane cards and phenomenon cards add additional abilities and randomness to the game. The Planechase variant uses all the normal rules for a Magic game, with the following additions.

901.2. A Planechase game may be a two-player game or a multiplayer game. The default multiplayer setup is the Free-for-All variant with the attack multiple players option and without the limited range of influence option. See rule 806, “Free-for-All Variant.”

901.3. In addition to the normal game materials, each player needs a planar deck of at least ten plane and/or phenomenon cards and the game needs one planar die. No more than two cards in a planar deck can be phenomenon cards. Each card in a planar deck must have a different English name. (See rule 309, “Planes,” and rule 310, “Phenomena.”)

901.3a A planar die is a six-sided die. One face has the Planeswalker symbol {PW}. One face has the chaos symbol {CHAOS}. The other faces are blank.

901.4. At the start of the game, each player shuffles their planar deck so that the cards are in a random order. Each deck is placed face down next to its owner’s library. All plane and phenomenon cards remain in the command zone throughout the game, both while they’re part of a planar deck and while they’re face up.

901.5. Once all players have kept their opening hands and used the abilities of cards that allow them to take an action with those cards from their opening hands, the starting player moves the top card of their planar deck off that planar deck and turns it face up. If it’s a phenomenon card, the player puts that card on the bottom of their planar deck and repeats this process until a plane card is turned face up. (See rule 103.6.) No abilities of any card turned face up this way trigger during this process. The face-up plane card becomes the starting plane.

901.6. The owner of a plane or phenomenon card is the player who started the game with it in their planar deck. The controller of a face-up plane or phenomenon card is the player designated as the planar controller. Normally, the planar controller is whoever the active player is. However, if the current planar controller would leave the game, instead the next player in turn order that wouldn’t leave the game becomes the planar controller, then the old planar controller leaves the game. The new planar controller retains that designation until they leave the game or a different player becomes the active player, whichever comes first.

901.7. Any abilities of a face-up plane card or phenomenon card in the command zone function from that zone. The card’s static abilities affect the game, its triggered abilities may trigger, and its activated abilities may be activated.

901.7a A face-up plane card or phenomenon card that’s turned face down becomes a new object.

901.8. Planechase games have an inherent triggered ability known as the “planeswalking ability.” The full text of this ability is “Whenever you roll {PW}, planeswalk.” (See rule 701.24, “Planeswalk.”) This ability has no source and is controlled by the player whose planar die roll caused it to trigger. This is an exception to rule 113.8.

901.9. Any time the active player has priority and the stack is empty, but only during a main phase of their turn, that player may roll the planar die. Taking this action costs a player an amount of mana equal to the number of times they have previously taken this action on that turn. This is a special action and doesn’t use the stack. Note that this number won’t be equal to the number of times the player has rolled the planar die that turn if an effect has caused the player to roll the planar die that turn. (See rule 116.2i.)

901.9a If the die roll is a blank face, nothing happens. The active player gets priority.

901.9b If the die roll is the chaos symbol {CHAOS}, any ability of a face-up plane that starts “When you roll {CHAOS}” triggers and is put on the stack. The active player gets priority.

901.9c If the die roll is the Planeswalker symbol {PW}, the “planeswalking ability” triggers and is put on the stack. The active player gets priority. (See rule 901.8.)

901.10. When a player leaves the game, all objects owned by that player except abilities from phenomena leave the game. (See rule 800.4a.) If that includes a face-up plane card or phenomenon card, the planar controller turns the top card of their planar deck face up. This is not a state-based action. It happens as soon as the player leaves the game.

901.10a If a plane leaves the game while a “planeswalking ability” is on the stack, that ability ceases to exist.

901.10b Abilities from phenomena owned by a player who left the game remain on the stack controlled by the new planar controller.

901.11. After the game has started, if a player moves the top card of their planar deck off that planar deck and turns it face up, that player has “planeswalked.” Continuous effects with durations that last until a player planeswalks end. Abilities that trigger when a player planeswalks trigger. See rule 701.24.

901.11a A player may planeswalk as the result of the “planeswalking ability” (see rule 901.8), because the owner of a face-up plane card or phenomenon card leaves the game (see rule 901.10), or because a phenomenon’s triggered ability leaves the stack (see rule 704.6f). Abilities may also instruct a player to planeswalk.

901.11b The plane card that’s turned face up is the plane the player planeswalks to. The plane card or phenomenon card that’s turned face down, or that leaves the game, is the plane or phenomenon the player planeswalks away from.

901.11c If a player planeswalks when there is more than one face-up plane card, that player planeswalks away from all such planes.

901.12. A Two-Headed Giant Planechase game uses all the rules for the Two-Headed Giant multiplayer variant and all the rules for the Planechase casual variant, with the following additions.

901.12a Each player has their own planar deck.

901.12b The planar controller is normally the primary player of the active team. However, if the current planar controller’s team would leave the game, instead the primary player of the next team in turn order that wouldn’t leave the game becomes the planar controller, then the old planar controller’s team leaves the game. The new planar controller retains that designation until they leave the game or a different team becomes the active team, whichever comes first.

901.12c Even though the face-up plane or phenomenon is controlled by just one player, any ability of that plane or phenomenon that refers to “you” applies to both members of the planar controller’s team.

901.12d Since each member of the active team is an active player, each of them may roll the planar die. Each player’s cost to roll the planar die is based on the number of times that particular player has already rolled the planar die that turn.

901.13. In multiplayer formats other than Grand Melee, plane cards and phenomenon cards are exempt from the limited range of influence option. Their abilities, and the effects of those abilities, affect all applicable objects and players in the game. (See rule 801, “Limited Range of Influence Option.”)

901.14. In Grand Melee Planechase games, multiple plane cards or phenomenon cards may be face up at the same time.

901.14a Before the first turn of the game of the game, each player who will start the game with a turn marker sets a starting plane (see rule 901.5). Each of them is a planar controller.

901.14b If a player would leave the game and that player leaving the game would reduce the number of turn markers in the game, that player first ceases to be a planar controller (but no other player becomes a planar controller), then that player leaves the game. Each face-up plane card or phenomenon card that player controlled is put on the bottom of its owner’s planar deck. No player is considered to have planeswalked.

901.15. Single Planar Deck Option

901.15a As an alternative option, a Planechase game may be played with just a single communal planar deck. In that case, the number of cards in the planar deck must be at least forty or at least ten times the number of players in the game, whichever is smaller. The planar deck can’t contain more phenomenon cards than twice the number of players in the game. Each card in the planar deck must have a different English name.

901.15b In a Planechase game using the single planar deck option, the planar controller is considered to be the owner of all cards in the planar deck.

901.15c If any rule or ability refers to a player’s planar deck, the communal planar deck is used.

902. Vanguard

902.1. In the Vanguard variant, a vanguard card allows each player to play the role of a famous character. Each player will have one face-up vanguard card whose abilities and other characteristics affect the game. The Vanguard variant uses all the normal rules for a Magic game, with the following additions.

902.2. A Vanguard game may be a two-player game or a multiplayer game.

902.3. In addition to the normal game materials, each player needs a vanguard card. Each vanguard card is placed face up next to its owner’s library before the game begins. All vanguard cards remain in the command zone throughout the game.

902.4. Each player’s starting life total is 20 plus or minus the life modifier of their vanguard card.
Example: The life modifier of a player’s vanguard card is -3. That player’s starting life total is 17.

902.5. Each player’s starting hand size is seven cards, as modified by the hand modifier of their vanguard card.

902.5a If a player takes a mulligan in a Vanguard game, just like in a normal game, that player shuffles their hand back into their library, then draws a new hand equal to their starting hand size. (In a multiplayer game, a player’s first mulligan is for the same number of cards as they had before.) See rule 103.4.
Example: The hand modifier of a player’s vanguard card is +2. That player starts the game with a hand of 9 cards. If the player takes a mulligan three times before keeping, they draw a new hand of nine cards and put three of those on the bottom of their library.

902.5b A player’s maximum hand size is seven, as modified by the hand modifier of their vanguard card.
Example: The hand modifier of a player’s vanguard card is -1. That player’s maximum hand size is six. If that player has more than six cards in their hand as their cleanup step begins, they will discard all but six of them.

902.6. The owner of a vanguard card is the player who started the game with it in the command zone. The controller of a face-up vanguard card is its owner.

902.7. Any abilities of a face-up vanguard card in the command zone function from that zone. The card’s static abilities affect the game, its triggered abilities may trigger, and its activated abilities may be activated.

903. Commander

903.1. In the Commander variant, each deck is led by a legendary creature designated as that deck’s commander. The Commander variant was created and popularized by fans; an independent rules committee maintains additional resources at MTGCommander.net. The Commander variant uses all the normal rules for a Magic game, with the following additions.

903.2. A Commander game may be a two-player game or a multiplayer game. The default multiplayer setup is the Free-for-All variant with the attack multiple players option and without the limited range of influence option. See rule 806, “Free-for-All Variant.”

903.3. Each deck has a legendary creature card designated as its commander. This designation is not a characteristic of the object represented by the card; rather, it is an attribute of the card itself. The card retains this designation even when it changes zones.
Example: A commander that’s been turned face down (due to Ixidron’s effect, for example) is still a commander. A commander that’s copying another card (due to Cytoshape’s effect, for example) is still a commander. A permanent that’s copying a commander (such as a Body Double, for example, copying a commander in a player’s graveyard) is not a commander.

903.3a Some planeswalker cards have an ability that states the card can be your commander. This ability modifies the rules for deck construction, and it functions before the game begins. See also rule 113.6m.

903.3b If a player’s commander is a meld card and it’s melded with the other member of its meld pair, the resulting melded permanent is that player’s commander.

903.3c If a player’s commander is a component of a merged permanent, the resulting merged permanent is that player’s commander.

903.3d If an effect refers to controlling a commander, it refers to a permanent on the battlefield that is a commander. If an effect refers to casting a commander, it refers to a spell that is a commander. If an effect refers to a commander in a specific zone, it refers to a card in that zone that is a commander.

903.4. The Commander variant uses color identity to determine what cards can be in a deck with a certain commander. The color identity of a card is the color or colors of any mana symbols in that card’s mana cost or rules text, plus any colors defined by its characteristic-defining abilities (see rule 604.3) or color indicator (see rule 204).
Example: Bosh, Iron Golem is a legendary artifact creature with mana cost {8} and the ability “{3}{R}, Sacrifice an artifact: Bosh, Iron Golem deals damage equal to the sacrificed artifact’s mana value to any target.” Bosh’s color identity is red.

903.4a Color identity is established before the game begins.

903.4b If a commander has a static ability that causes a player to choose its color before the game begins, that choice applies during deck construction and throughout the game, even as the commander changes zones. That choice affects the commander’s color identity. The player reveals that choice as they put their commander into the command zone before the game begins. See rules 103.2c and 607.2n.

903.4c Reminder text is ignored when determining a card’s color identity. See rule 207.2.

903.4d The back face of a double-faced card (see rule 711) is included when determining a card’s color identity. This is an exception to rule 711.4a.
Example: Civilized Scholar is the front face of a double-faced card with mana cost {2}{U}. Homicidal Brute is the back face of that double-faced card and has a red color indicator. The card’s color identity is blue and red.

903.4e If an ability refers to the colors or number of colors in a commander’s color identity, that quality is undefined if that player doesn’t have a commander. That part of the ability won’t do anything. Costs that refer to that quality are unpayable.

903.5. Each Commander deck is subject to the following deck construction rules.

903.5a Each deck must contain exactly 100 cards, including its commander. In other words, the minimum deck size and the maximum deck size are both 100.

903.5b Other than basic lands, each card in a Commander deck must have a different English name.

903.5c A card can be included in a Commander deck only if every color in its color identity is also found in the color identity of the deck’s commander.
Example: Wort, the Raidmother is a legendary creature with mana cost {4}{R/G}{R/G}. Wort’s color identity is red and green. Each card in a Wort Commander deck must be only red, only green, both red and green, or have no color. Each mana symbol in the mana cost or rules text of a card in this deck must be only red, only green, both red and green, or have no color.

903.5d A card with a basic land type may be included in a Commander deck only if each color of mana it could produce is included in the commander’s color identity.
Example: Wort, the Raidmother’s color identity is red and green. A Wort Commander deck may include land cards with the basic land types Mountain and/or Forest. It can’t include any land cards with the basic land types Plains, Island, or Swamp.

903.6. At the start of the game, each player puts their commander from their deck face up into the command zone. Then each player shuffles the remaining 99 cards of their deck so that the cards are in a random order. Those cards become the player’s library.

903.7. Once the starting player has been determined, each player sets their life total to 40 and draws a hand of seven cards.

903.8. A player may cast a commander they own from the command zone. A commander cast from the command zone costs an additional {2} for each previous time the player casting it has cast it from the command zone that game. This additional cost is informally known as the “commander tax.”

903.9. A commander may return to the command zone during a Commander game.

903.9a If a commander is in a graveyard or in exile and that object was put into that zone since the last time state-based actions were checked, its owner may put it into the command zone. This is a state-based action. See rule 704.

903.9b If a commander would be put into its owner’s hand or library from anywhere, its owner may put it into the command zone instead. This replacement effect may apply more than once to the same event. This is an exception to rule 614.5.

903.9c If a commander is a melded permanent or a merged permanent and its owner chooses to put it into the command zone using the replacement effect described in rule 903.9b, that permanent and each component representing it that isn’t a commander are put into the appropriate zone, and the card that represents it and is a commander is put into the command zone.

903.10. The Commander variant includes the following specification for winning and losing the game. All other rules for ending the game also apply. (See rule 104.)

903.10a A player that’s been dealt 21 or more combat damage by the same commander over the course of the game loses the game. (This is a state-based action. See rule 704.)

903.11. If a player is allowed to bring a card from outside the game into a Commander game, that player can’t bring a card into the game this way if it has the same name as a card that player had in their starting deck, if it has the same name as a card that the player has already brought into the game, or if any color in its color identity isn’t in the color identity of the player’s commander.

903.12. Brawl Option

903.12a Brawl is an option for a different style of Commander game. Brawl games use the normal rules for the Commander variant with the following modifications.

903.12b Brawl decks are usually constructed using cards from the Standard format.

903.12c A player designates either a legendary planeswalker or a legendary creature as their commander.

903.12d A player’s deck must contain exactly 60 cards, including its commander. In other words, the minimum deck size and the maximum deck size are both 60.

903.12e If a player’s commander has no colors in its color identity, that player’s deck may contain any number of basic lands of one basic land type of their choice. This is an exception to rule 903.5d.

903.12f In a two-player Brawl game, each player’s starting life total is 25. In a multiplayer Brawl game, each player’s starting life total is 30.

903.12g In any Brawl game, the first mulligan a player takes doesn’t count toward the number of cards that player will put on the bottom of their library or the number of mulligans that player may take. Subsequent mulligans are counted toward these numbers as normal.

903.12h Brawl games do not use the state-based action described in rule 704.6c, which causes a player to lose the game if they’ve been dealt 21 or more combat damage by a commander.

903.13. Commander Draft

903.13a Commander Draft is an option for a different style of Commander game. It consists of a draft (a style of limited play where players choose cards from sealed booster packs to build their decks) followed by a multiplayer game. The Commander Draft option uses Commander Legends booster packs by default.

903.13b A draft typically consists of three draft rounds. In each draft round, each player opens a booster pack, drafts two cards by placing them in a face-down pile in front of them, then passes the remaining cards to the next player. Each player then drafts two cards from the booster pack passed to them and passes the remaining cards. This procedure continues until all cards in that draft round have been drafted.

903.13c In the first and third draft rounds, booster packs are passed to each player’s left. In the second draft round, booster packs are passed to each player’s right.

903.13d During the draft, a player can look only at cards in the booster pack they are currently drafting from and cards they have already drafted. A player may not reveal drafted cards to other players unless an ability instructs them to.

903.13e After the draft is complete, the cards a player drafted become that player’s card pool. A player may add up to two cards named The Prismatic Piper to their card pool, but only if those cards are used as the player’s commander(s).

903.13f Commander Draft deck construction follows the same rules as Commander deck construction (see rule 903.5) with two exceptions: (1) A player’s deck must contain at least 60 cards. There is no maximum deck size. (2) A player’s deck may include any number of cards from that player’s card pool with the same name.

903.13g Commander Draft games follow the same rules as Commander games. See rules 903.6–903.11.

904. Archenemy

904.1. In the Archenemy variant, a team of players faces off against a single opponent strengthened with powerful scheme cards. The Archenemy variant uses all the normal rules for a Magic game, with the following additions.

904.2. The default setup for an Archenemy game is the Team vs. Team multiplayer variant (see rule 808) involving exactly two teams. The attack multiple players option (see rule 802) and the shared team turns option (see rule 805) are used; no other multiplayer options are used.

904.2a One of the teams consists of exactly one player, who is designated the archenemy.

904.2b The other team consists of any number of players.

904.3. In addition to the normal game materials, the archenemy needs a scheme deck of at least twenty scheme cards. A scheme deck may contain no more than two of any card with a particular English name. (See rule 312, “Schemes.”)

904.4. At the start of the game, the archenemy shuffles their scheme deck so that the cards are in a random order. The scheme deck is placed face down next to the archenemy’s library. All scheme cards remain in the command zone throughout the game, both while they’re part of a scheme deck and while they’re face up.

904.5. The archenemy’s starting life total is 40. Each other player’s starting life total is 20.

904.6. Rather than a randomly determined player, the archenemy takes the first turn of the game.

904.7. The owner of a scheme card is the player who started the game with it in the command zone. The controller of a face-up scheme card is its owner.

904.8. Any abilities of a face-up scheme card in the command zone function from that zone. The card’s static abilities affect the game, its triggered abilities may trigger, and its activated abilities may be activated.

904.9. Immediately after the archenemy’s precombat main phase begins during each of their turns, that player moves the top card of their scheme deck off that scheme deck and turns it face up. This is called “setting that scheme in motion.” (See rule 701.25.) This turn-based action doesn’t use the stack. Abilities of that scheme card that trigger “When you set this scheme in motion” trigger.

904.10. If a non-ongoing scheme card is face up in the command zone, and no triggered abilities of any scheme are on the stack or waiting to be put on the stack, that scheme card is turned face down and put on the bottom of its owner’s scheme deck the next time a player would receive priority. (This is a state-based action. See rule 704.)

904.11. Once an ongoing scheme card is set in motion, it remains face up in the command zone until an ability causes it to be abandoned (see rule 701.26).

904.12. Supervillain Rumble Option

904.12a As an alternative option, players may play a Free-for-All game in which each player has their own scheme deck. The attack multiple players option (see rule 802) is used; no other multiplayer options are used.

904.12b Each player in this game is an archenemy.

904.12c As in a normal Free-for-All game, the starting player is randomly determined. All other rules that apply to the archenemy in an Archenemy game apply to each player in a Supervillain Rumble game.

905. Conspiracy Draft

905.1. The Conspiracy Draft variant consists of a draft (a style of limited play where players choose cards from sealed booster packs to build their decks) followed by a multiplayer game. The Conspiracy Draft variant uses Magic: The Gathering—Conspiracy™ and/or Conspiracy: Take the Crown™ booster packs by default.

905.1a A draft typically consists of three draft rounds. In each draft round, each player opens a booster pack, drafts one card by placing that card in a face-down pile in front of the player, then passes the remaining cards to the next player. Each player then drafts a card from the booster pack passed to them and passes the remaining cards. This procedure continues until all cards in that draft round have been drafted.

905.1b In the first and third draft rounds, booster packs are passed to each player’s left. In the second draft round, booster packs are passed to each player’s right.

905.1c During the draft, a player can look only at cards in the booster pack they are currently drafting from, cards they have already drafted, cards that are currently revealed as described in rule 905.2b, and cards that have been drafted face up as described in rule 905.2c. A player may not reveal drafted cards to other players unless an ability instructs them to.

905.1d After the draft and all actions that may be taken during or after the draft, all the cards a player has drafted become that player’s card pool. The player builds their deck from only these cards and any number of basic land cards. See rules 100.2b and 100.4b.

905.2. Some cards have abilities that function during the draft.

905.2a During a draft, there is no active player or system of priority. If multiple players wish to take an action at the same time during the draft and can’t agree on an order, those actions are taken in a random order.

905.2b Some cards instruct players to reveal them as they’re drafted and then note some information, such as a number or color. This information can be referred to by other abilities during the game. Any player can look at this information at any time during the draft or game. After the information is noted, the drafted card is turned face down and added to the player’s drafted cards pile.

905.2c Some cards instruct players to draft them face up. Each such card remains face up until the draft is complete, an effect instructs the person who drafted it to turn it face down, or the card leaves that player’s drafted cards pile. While the card is face up, all players may look at it.

905.3. A Conspiracy Draft game is a multiplayer game. The default multiplayer setup is the Free-for-All variant with the attack multiple players option and without the limited range of influence option. See rule 806, “Free-for-All Variant.”

905.4. At the start of the game, before decks are shuffled, each player may put any number of conspiracy cards from their sideboard into the command zone.

905.4a Conspiracy cards with hidden agenda are put into the command zone face down. Any time a player has priority, they may turn a face-down conspiracy card they control face up. See rule 702.106, “Hidden Agenda.”

905.5. The owner of a conspiracy card is the player who put it into the command zone at the start of the game. The controller of a conspiracy card is its owner.

905.6. Once the starting player has been determined, each player sets their life total to 20 and draws a hand of seven cards.

Glossary

Abandon
To turn a face-up ongoing scheme card face down and put it on the bottom of its owner’s scheme deck. See rule 701.26, “Abandon.”

Ability
1. Text on an object that explains what that object does or can do.
2. An activated or triggered ability on the stack. This kind of ability is an object.
See rule 113, “Abilities,” and section 6, “Spells, Abilities, and Effects.”

Ability Word
An italicized word with no rules meaning that ties together abilities on different cards that have similar functionality. See rule 207.2c.

Absorb
A keyword ability that prevents damage. See rule 702.64, “Absorb.”

Activate
To put an activated ability onto the stack and pay its costs, so that it will eventually resolve and have its effect. See rule 602, “Activating Activated Abilities.”

Activated Ability
A kind of ability. Activated abilities are written as “[Cost]: [Effect.] [Activation instructions (if any).]” See rule 113, “Abilities,” and rule 602, “Activating Activated Abilities.”

Activation Cost
Everything that appears before the colon in an activated ability’s text. It must be paid to activate the ability. See rule 118, “Costs,” and rule 602, “Activating Activated Abilities.”

Active Player
The player whose turn it is. See rule 102.1.

Active Player, Nonactive Player Order
A system that determines the order by which players make choices if multiple players are instructed to make choices at the same time. See rule 101.4. This rule is modified for games using the shared team turns option; see rule 805.6.

Active Team
The team whose turn it is in a game using the shared team turns option. See rule 805.4a.

Adapt
A keyword action that puts +1/+1 counters on a creature that doesn’t have any yet. See rule 701.43, “Adapt.”

Additional Cost
A cost a spell may have that its controller may pay (or, in some cases, must pay) in addition to its mana cost to cast that spell. See rule 118, “Costs,” and rule 601, “Casting Spells.”

Adventurer Card
Cards with a two-part card frame (one part of which is inset on the left) on a single card. See rule 715, “Adventurer Cards.”

Affinity
A keyword ability that reduces how much mana you need to spend to cast a spell. See rule 702.41, “Affinity.”

Afflict
A keyword ability that makes the defending player lose life for blocking. See rule 702.130, “Afflict.”

Afterlife
A keyword ability that leaves behind Spirit creature tokens when certain creatures die. See rule 702.135, “Afterlife.”

Aftermath
A keyword ability that lets a player cast one half of a split card only from their graveyard. See rule 702.127, “Aftermath.”

Alternating Teams Variant
A multiplayer variant played among two or more teams of equal size. See rule 811, “Alternating Teams Variant.”

Alternative Cost
A cost a spell may have that its controller can pay rather than paying its mana cost. See rule 118, “Costs,” and rule 601, “Casting Spells.”

Amass
A keyword action than gives you a Zombie Army creature token or grows an Army you already have. See rule 701.44, “Amass.”

Amplify
A keyword ability than can have a creature enter the battlefield with +1/+1 counters on it. See rule 702.38, “Amplify.”

Anchor Word
A word that precedes one of two abilities a permanent may enter the battlefield with. See rule 614.12b.

Annihilator
A keyword ability that can make a creature particularly brutal when it attacks. See rule 702.86, “Annihilator.”

Ante
1. A zone used only when playing “for keeps.”
2. To put a card into the ante zone.
See rule 407, “Ante.”

Any Target
A spell or ability may require “any target.” “Any target” is the same as “target creature, player, or planeswalker.” See rule 115.4.

APNAP Order
See Active Player, Nonactive Player Order.

Archenemy
1. A casual variant in which a team of players faces off against a single opponent strengthened with powerful scheme cards. See rule 904, “Archenemy.”
2. A player in an Archenemy game who is playing with a scheme deck.

Artifact
A card type. An artifact is a permanent. See rule 301, “Artifacts.”

Artifact Creature
A combination of artifact and creature that’s subject to the rules for both. See rule 301, “Artifacts,” and rule 302, “Creatures.”

Artifact Land
A combination of artifact and land that’s subject to the rules for both. Artifact lands can only be played as lands, not cast as spells. See rule 301, “Artifacts,” and rule 305, “Lands.”

Artifact Type
A subtype that’s correlated to the artifact card type. See rule 301, “Artifacts.” See rule 205.3g for the list of artifact types.

As Though
Text used to indicate that the game, for some specific purpose, treats a condition as true even though it’s not. See rule 609.4.

Ascend
A keyword causing a player to get the designation of the city’s blessing once they control ten permanents. See rule 702.131, “Ascend.”

Assemble
Assemble is a keyword action in the Unstable set that puts Contraptions onto the battlefield. Cards and mechanics from the Unstable set aren’t included in these rules.

Assign Combat Damage
To determine how an attacking or blocking creature will deal its combat damage. See rule 510, “Combat Damage Step.”

Assist
A keyword ability that lets another player help you pay for a spell. See rule 702.132, “Assist.”

At End of Turn (Obsolete)
A trigger condition printed on abilities that triggered at the beginning of the end step (which is not the last thing to happen in the turn). Cards that were printed with that text have received errata in the Oracle card reference to say “at the beginning of the end step” or “at the beginning of the next end step.” See rule 513, “End Step.”

Attach
To move an Aura, Equipment, or Fortification onto another object or player. See rule 701.3, “Attach.”

Attack
To send a creature into combat offensively. A creature can attack a player or a planeswalker. See rule 508, “Declare Attackers Step.”

Attack Alone
A creature “attacks alone” if it’s the only creature declared as an attacker during the declare attackers step. A creature “is attacking alone” if it’s attacking but no other creatures are. See rule 506.5.

Attack Left Option
An option that may be used in certain multiplayer variants. See rule 803, “Attack Left and Attack Right Options.”

Attack Multiple Players Option
An option that may be used in certain multiplayer variants. See rule 802, “Attack Multiple Players Option.”

Attack Right Option
An option that may be used in certain multiplayer variants. See rule 803, “Attack Left and Attack Right Options.”

Attacking Creature
A creature that has either been declared as part of a legal attack during the combat phase (once all costs to attack, if any, have been paid), or a creature that has been put onto the battlefield attacking. It remains an attacking creature until it’s removed from combat or the combat phase ends, whichever comes first. See rule 508, “Declare Attackers Step.”

Attacking Team
The team who can attack during the combat phase of a multiplayer game using the shared team turns option. See rule 805, “Shared Team Turns Option.”

Attacks and Isn’t Blocked
An ability that triggers when a creature “attacks and isn’t blocked” triggers when the creature becomes an unblocked attacking creature. See rule 509.1h.

Aura
An enchantment subtype. Aura spells target objects or players, and Aura permanents are attached to objects or players. See rule 303, “Enchantments,” and rule 702.5, “Enchant.”

Aura Swap
A keyword ability that lets you exchange an Aura on the battlefield with one in your hand. See rule 702.65, “Aura Swap.”

Awaken
A keyword ability that lets you turn a land you control into a creature. See rule 702.113, “Awaken.”

Banding, “Bands with Other”
Banding is a keyword ability that modifies the rules for declaring attackers and assigning combat damage. “Bands with other” is a specialized version of the ability. See rule 702.22, “Banding.”

Base Power, Base Toughness
Effects that change the base power and/or base toughness of a creature set one or both of those values to a specific number. See rule 613, “Interaction of Continuous Effects.”

Basic
A supertype that’s normally relevant on lands. Any land with this supertype is a basic land. See rule 205.4, “Supertypes.”

Basic Landcycling
See Typecycling.

Basic Land Type
There are five “basic land types”: Plains, Island, Swamp, Mountain, and Forest. Each one has a mana ability associated with it. See rule 305, “Lands.”

Battle Cry
A keyword ability that makes other attacking creatures better in combat. See rule 702.91, “Battle Cry.”

Battlefield
A zone. The battlefield is the zone in which permanents exist. It used to be known as the “in-play” zone. See rule 403, “Battlefield.”

Becomes
A word used in some trigger events to indicate a change in status or characteristics. See rule 603.2e.

Beginning of Combat Step
Part of the turn. This step is the first step of the combat phase. See rule 507, “Beginning of Combat Step.”

Beginning Phase
Part of the turn. This phase is the first phase of the turn. See rule 501, “Beginning Phase.”

Bestow
A keyword ability that lets a creature card be cast as an Aura. See rule 702.103, “Bestow.”

Block
To send a creature into combat defensively. A creature can block an attacking creature. See rule 509, “Declare Blockers Step.”

Block Alone
A creature “blocks alone” if it’s the only creature declared as a blocker during the declare blockers step. A creature “is blocking alone” if it’s blocking but no other creatures are. See rule 506.5.

Blocked Creature
An attacking creature that another creature blocks or that an effect causes to become blocked. It remains a blocked creature until it’s removed from combat, an effect says that it becomes unblocked, or the combat phase ends, whichever comes first. See rule 509, “Declare Blockers Step.”

Blocking Creature
A creature that has either been declared as part of a legal block during the combat phase (once all costs to block, if any, have been paid), or a creature that has been put onto the battlefield blocking. It remains a blocking creature until it’s removed from combat or the combat phase ends, whichever comes first. See rule 509, “Declare Blockers Step.”

Bloodthirst
A keyword ability that can have a creature enter the battlefield with +1/+1 counters on it. See rule 702.54, “Bloodthirst.”

Boast
A special kind of activated ability that can be activated only once each turn if the creature with the boast ability attacked that turn. See rule 702.142, “Boast.”

Bolster
A keyword action that puts +1/+1 counters on the weakest creature a player controls. See rule 701.33, “Bolster.”

Booster Pack
A group of unopened Magic cards from a particular expansion. Booster packs are used in Limited formats. See rule 100.2b.

Brawl
An option for the Commander casual variant. See rule 903.12, “Brawl Option.”

Bury (Obsolete)
A term that meant “put [a permanent] into its owner’s graveyard.” In general, cards that were printed with the term “bury” have received errata in the Oracle card reference to read, “Destroy [a permanent]. It can’t be regenerated,” or “Sacrifice [a permanent].”

Bushido
A keyword ability that can make a creature better in combat. See rule 702.45, “Bushido.”

Buyback
A keyword ability of instants and sorceries that can let the spell return to its owner’s hand as it resolves. See rule 702.27, “Buyback.”

Card
The standard component of the game. Magic cards may be traditional or nontraditional. Tokens aren’t considered cards. In the text of spells or abilities, the term “card” is used only to refer to a card that’s not on the battlefield or on the stack, such as a creature card in a player’s hand. See rule 108, “Cards.”

Card Pool
In a Limited format, the cards a player may use, in addition to basic land cards, to build their deck.

Card Type
A characteristic. Except for abilities on the stack, each object has a card type, even if that object isn’t a card. Each card type has its own rules. See rule 205, “Type Line,” and section 3, “Card Types.”

Cascade
A keyword ability that may let a player cast a random extra spell for no cost. See rule 702.85, “Cascade.”

Cast
To take a card from where it is (usually the hand), put it on the stack, and pay its costs, so that it will eventually resolve and have its effect. See rule 601, “Casting Spells.”

Caster (Obsolete)
An obsolete term that referred to the player who cast a spell. In general, cards that were printed with the term “caster” have received errata in the Oracle card reference to say “controller.”

Casting Cost (Obsolete)
An obsolete term for mana cost. Cards printed with this text have received errata in the Oracle card reference.

Champion, Championed
“Champion” is a keyword ability that lets one creature temporarily replace another. A permanent is “championed” by another permanent if the latter exiles the former as the direct result of a champion ability. See rule 702.72, “Champion.”

Change a Target
To choose a new, legal target for a spell or ability. See rule 115.7.

Changeling
A characteristic-defining ability that grants the object it’s on every creature type. See rule 702.73, “Changeling.”

Chaos Ability
An ability of a plane card that triggers “Whenever you roll {CHAOS}” on the planar die in the Planechase casual variant. See rule 309.7.

Chaos Symbol
The chaos symbol {CHAOS} appears on the planar die and in some triggered abilities of plane cards in the Planechase casual variant. See rule 107.12.

Characteristics
Information that defines an object. See rule 109.3.

Characteristic-Defining Ability
A kind of static ability that conveys information about an object’s characteristics that would normally be found elsewhere on that object (such as in its mana cost, type line, or power/toughness box). See rule 604.3.

Cipher
A keyword ability that allows you to encode a card on a creature and cast that card whenever that creature deals combat damage to a player. See rule 702.99, “Cipher.”

City’s Blessing
A designation a player can have. The ascend keyword causes a player to get this designation once they control ten permanents. See rule 702.131, “Ascend.”

Clash
To have a mini-contest involving the top cards of players’ libraries. See rule 701.23, “Clash.”

Cleanup Step
Part of the turn. This step is the second and final step of the ending phase. See rule 514, “Cleanup Step.”

Collector Number
A number printed on most cards that has no effect on game play. See rule 212, “Information Below the Text Box.”

Color
1. A characteristic of an object. See rule 105, “Colors,” and rule 202, “Mana Cost and Color.”
2. An attribute mana may have. See rule 106, “Mana.”

Colorless
1. An object with no color is colorless. Colorless is not a color. See rule 105, “Colors,” and rule 202, “Mana Cost and Color.”
2. A type of mana. See rule 106, “Mana,” and rule 107.4c.

Color Identity
A set of colors that determines what cards may be included in a deck for the Commander casual variant. See rule 903.4.

Color Indicator
A characteristic of an object. See rule 105, “Colors,” and rule 204, “Color Indicator.”

Combat Damage
Damage dealt during the combat damage step by attacking creatures and blocking creatures as a consequence of combat. See rule 510, “Combat Damage Step.”

Combat Damage Step
Part of the turn. This step is the fourth step of the combat phase. See rule 510, “Combat Damage Step.”

Combat Phase
Part of the turn. This phase is the third phase of the turn. See rule 506, “Combat Phase.”

Command
A zone for certain specialized objects that have an overarching effect on the game, yet are not permanents and cannot be destroyed. See rule 408, “Command.”

Commander
1. A casual variant in which each deck is led by a legendary creature. See rule 903, “Commander.”
2. A designation given to one legendary creature card in each player’s deck in the Commander casual variant.

Commander Draft
A casual variant in which players participate in a booster draft and then play multiplayer games. See rule 903.13, “Commander Draft.”

Commander Ninjutsu
A variant of the ninjutsu ability. See rule 702.49, “Ninjutsu.”

Commander Tax
Informal term for the additional cost to cast a commander based on the number of times a player has cast it previously this game. See rule 903.8.

Companion
A keyword ability that allows a player to choose one creature card from outside the game as a companion if the restriction of that card’s companion ability is met. Once a player has chosen a companion, that player may pay {3} to put it into their hand once during the game. See rule 702.139, “Companion.”

Concede
To quit the game. Conceding a game immediately causes that player to leave that game and lose that game. See rule 104, “Ending the Game.”

Conspiracy
A card type used in Limited formats such as Conspiracy Draft. A conspiracy card is not a permanent. See rule 313, “Conspiracies.”

Conspiracy Draft
A casual variant in which players participate in a booster draft and then play multiplayer games. See rule 905, “Conspiracy Draft.”

Conspire
A keyword ability that creates a copy of a spell. See rule 702.78, “Conspire.”

Constructed
A way of playing in which each player creates their own deck ahead of time. See rule 100.2a.

Continuous Effect
An effect that modifies characteristics of objects, modifies control of objects, or affects players or the rules of the game, for a fixed or indefinite period. See rule 611, “Continuous Effects.”

Continuous Artifact (Obsolete)
An obsolete term that appeared on the type line of artifacts without activated abilities. Cards printed with this text have received errata in the Oracle card reference to simply say “Artifact.”

Control, Controller
“Control” is the system that determines who gets to use an object in the game. An object’s “controller” is the player who currently controls it. See rule 108.4.

Control Another Player
To make all choices and decisions that player is allowed to make, or is told to make, by rules or by any objects. See rule 716, “Controlling Another Player.”

Converted Mana Cost (Obsolete)
An obsolete term for mana value. Cards printed with this term have received errata in the Oracle card reference.

Convoke
A keyword ability that lets you tap creatures rather than pay mana to cast a spell. See rule 702.51, “Convoke.”

Copiable Values
Values of an object’s characteristics that are checked by copy effects. See rules 613.2, 706.2, and 706.3.

Copy
1. To create a new object whose copiable values have been set to those of another object.
2. An object whose copiable values have been set to those of another object.
See rule 706, “Copying Objects.”

Cost
An action or payment necessary to take another action or to stop another action from taking place. See rule 118, “Costs.”

Counter
1. To cancel a spell or ability so it doesn’t resolve and none of its effects occur. See rule 701.5, “Counter.”
2. A marker placed on an object or player that modifies its characteristics or interacts with a rule or ability. See rule 122, “Counters.”

Counts As (Obsolete)
Some older cards were printed with text stating that the card “counts as” something. Cards printed with this text have received errata in the Oracle card reference to state that the card actually is that thing.

Create
To create a token is to put a token onto the battlefield. See rule 701.6, “Create.”

Creature
A card type. A creature is a permanent. See rule 302, “Creatures.”

Creature Type
A subtype that’s correlated to the creature card type and the tribal card type. See rule 302, “Creatures,” and rule 308, “Tribals.” See rule 205.3m for the list of creature types.

Crew
A keyword ability that lets you tap creatures to turn a Vehicle into an artifact creature. See rule 301, “Artifacts,” and rule 702.122, “Crew.”

Cumulative Upkeep
A keyword ability that imposes an increasing cost to keep a permanent on the battlefield. See rule 702.24, “Cumulative Upkeep.”

Cycling
A keyword ability that lets a card be discarded and replaced with a new card. See rule 702.29, “Cycling.”

Damage
Objects can deal “damage” to creatures, planeswalkers, and players. This is generally detrimental to the object or player that receives that damage. See rule 120, “Damage.”

Damage Assignment Order
The order, announced during the declare blockers step, that an attacking creature will assign its combat damage among the multiple creatures blocking it, or that a blocking creature will assign its combat damage among the multiple creatures it’s blocking. See rules 509.2 and 509.3.

Dash
A keyword ability that allows creatures to be especially aggressive. See rule 702.109, “Dash.”

Deal
See Damage.

Deathtouch
A keyword ability that causes damage dealt by an object to be especially effective. See rule 702.2, “Deathtouch.”

Deck
The collection of cards a player starts the game with; it becomes that player’s library. See rule 100, “General,” and rule 103, “Starting the Game.”

Declare Attackers
To choose a set of creatures that will attack, declare whether each creature is attacking the defending player or a planeswalker that player controls, and pay any costs required to allow those creatures to attack. See rule 508.1.

Declare Attackers Step
Part of the turn. This step is the second step of the combat phase. See rule 508, “Declare Attackers Step.”

Declare Blockers
To choose a set of creatures that will block, declare which attacking creature each creature is blocking, and pay any costs required to allow those creatures to block. See rule 509.1.

Declare Blockers Step
Part of the turn. This step is the third step of the combat phase. See rule 509, “Declare Blockers Step.”

Defender
A keyword ability that prohibits a creature from attacking. See rule 702.3, “Defender.”

Defending Player
The player who can be attacked, and whose planeswalkers can be attacked, during the combat phase. See rule 506.2. In certain multiplayer games, there may be more than one defending player; see rule 802, “Attack Multiple Players Option,” and rule 805.10.

Defending Team
The team who can be attacked, and whose planeswalkers can be attacked, during the combat phase of a multiplayer game using the shared team turns option. See rule 805, “Shared Team Turns Option.”

Delayed Triggered Ability
An ability created by effects generated when some spells or abilities resolve, or when some replacement effects are applied, that does something later on rather than at that time. See rule 603.7.

Delve
A keyword ability that lets you exile cards from your graveyard rather than pay generic mana to cast a spell. See rule 702.66, “Delve.”

Demonstrate
A triggered ability found on some spells that let its controller copy it and choose an opponent to also copy it. See rule 702.144, “Demonstrate.”

Dependency
A system that may be used to determine in which order continuous effects in the same layer or sublayer are applied. See rule 613.8. See also Timestamp Order.

Deploy Creatures Option
An option that may be used in certain multiplayer variants to pass control of creatures between teammates. See rule 804, “Deploy Creatures Option.”

Destroy
To move a permanent from the battlefield to its owner’s graveyard. See rule 701.7, “Destroy.”

Detain
A keyword action that temporarily stops a permanent from attacking, blocking, or having its activated abilities activated. See rule 701.29, “Detain.”

Dethrone
A keyword ability that puts a +1/+1 counter on a creature when it attacks the player with the most life. See rule 702.105, “Dethrone.”

Devoid
A characteristic-defining ability that makes an object colorless. See rule 702.114, “Devoid.”

Devotion
A numerical value a player has, equal to the number of mana symbols of a certain color among the mana costs of permanents that player controls. See rule 700.5.

Devour
A keyword ability that can have a creature enter the battlefield with +1/+1 counters on it. See rule 702.82, “Devour.”

Dies
A creature or planeswalker “dies” if it is put into a graveyard from the battlefield. See rule 700.4.

Discard
To move a card from its owner’s hand to that player’s graveyard. See rule 701.8, “Discard.”

Double Agenda
A variant of the hidden agenda ability. See rule 702.106, “Hidden Agenda.”

Double Strike
A keyword ability that lets a creature deal its combat damage twice. See rule 702.4, “Double Strike.”

Double-Faced Cards
Cards with two faces, one on each side of the card, and no Magic card back. See rule 711, “Double-Faced Cards.”

Draft
1. A Limited format in which players choose cards one at a time from booster packs, then construct a deck solely from the chosen cards and basic land cards.
2. To choose a card during a draft and put it into your card pool.

Draft Round
Part of a draft in which each player opens an unopened booster pack and the cards in those booster packs are drafted. See rules 905.1a and 905.1b.

Draw
1. To put the top card of a player’s library into their hand as a turn-based action or as the result of an effect that uses the word “draw.” See rule 121, “Drawing a Card.”
2. The result of a game in which neither player wins or loses. See rule 104.4.

Draw Step
Part of the turn. This step is the third and final step of the beginning phase. See rule 504, “Draw Step.”

Dredge
A keyword ability that lets a player return a card from their graveyard to their hand. See rule 702.52, “Dredge.”

During (Obsolete)
Some older cards used the phrase “during [phase], [action].” These abilities were called “phase abilities.” In general, cards that were printed with phase abilities have received errata in the Oracle card reference so they have abilities that trigger at the beginning of a step or phase. “During” still appears in current card text, but only in its normal English sense and not as game terminology.

Echo
A keyword ability that imposes a cost to keep a permanent on the battlefield. See rule 702.30, “Echo.”

EDH (Obsolete)
An older name for the Commander casual variant. See rule 903, “Commander.”

Effect
Something that happens in the game as a result of a spell or ability. See rule 609, “Effects.”

Embalm
A keyword ability that lets a player exile a creature card from their graveyard to create a mummified token version of that card. See rule 702.128, “Embalm.”

Emblem
An emblem is a marker used to represent an object that has one or more abilities, but no other characteristics. See rule 114, “Emblems.”

Emerge
A keyword ability that lets a player cast a spell for less by sacrificing a creature. See rule 702.119, “Emerge.”

Emperor
The middle player on each team in an Emperor game. See rule 809, “Emperor Variant.”

Emperor Variant
A multiplayer variant played among three-player teams. See rule 809, “Emperor Variant.”

Enchant
A keyword ability that defines what an Aura spell can target and what an Aura permanent can be attached to. See rule 303, “Enchantments,” and rule 702.5, “Enchant.”

Enchantment
A card type. An enchantment is a permanent. See rule 303, “Enchantments.” See also Aura.

Enchantment Type
A subtype that’s correlated to the enchantment card type. See rule 303, “Enchantments.” See rule 205.3h for the list of enchantment types.

Encoded
A term that describes the relationship between a permanent and a card exiled by a cipher ability. See rule 702.99, “Cipher.”

Encore
A keyword ability that lets a player exile a creature card from their graveyard to, for each opponent, create a token that’s a copy of that card to attack that opponent.

Encounter
To move a phenomenon card off the top of a planar deck and turn it face up. See rule 310, “Phenomena.”

End of Combat Step
Part of the turn. This step is the fifth and final step of the combat phase. See rule 511, “End of Combat Step.”

End Step
Part of the turn. This step is the first step of the ending phase. See rule 513, “End Step.”

End the Combat Phase
To “end the combat phase” as the result of an effect is to perform an expedited process that skips everything else that would happen that phase. See rule 717, “Ending Turns and Phases.”

End the Turn
To “end the turn” as the result of an effect is to perform an expedited process that skips nearly everything else that would happen that turn. See rule 717, “Ending Turns and Phases.”

Ending Phase
Part of the turn. This phase is the fifth and final phase of the turn. See rule 512, “Ending Phase.”

Energy Symbol
The energy symbol {E} represents one energy counter. To pay {E}, a player removes one energy counter from themselves.

Enters the Battlefield
A nontoken permanent “enters the battlefield” when it’s moved onto the battlefield from another zone. A token “enters the battlefield” when it’s created. See rules 403.3, 603.6a, 603.6d, and 614.12.

Entwine
A keyword ability that lets a player choose all modes for a spell rather than just the number specified. See rule 702.42, “Entwine.”

Epic
A keyword ability that lets a player copy a spell at the beginning of each of their upkeeps at the expense of casting any other spells for the rest of the game. See rule 702.50, “Epic.”

Equip
A keyword ability that lets a player attach an Equipment to a creature they control. See rule 301, “Artifacts,” and rule 702.6, “Equip.”

Equipment
An artifact subtype. Equipment can be attached to creatures. See rule 301, “Artifacts,” and rule 702.6, “Equip.”

Escalate
A keyword ability on some modal spells that adds a cost for choosing additional modes. See rule 702.120, “Escalate.”

Escape
A keyword ability that lets a player cast a card from their graveyard. See rule 702.138, “Escape.”

Eternalize
A keyword ability that lets a player exile a creature card from their graveyard to create an eternalized token version of that card. See rule 702.129, “Eternalize.”

Evasion Ability
An ability that restricts what creatures can block an attacking creature. See rules 509.1b–c.

Event
Anything that happens in a game. See rule 700.1.

Evoke
A keyword ability that causes a permanent to be sacrificed when it enters the battlefield. See rule 702.74, “Evoke.”

Evolve
A keyword ability that lets you put a +1/+1 counter on a creature when a larger creature enters the battlefield under your control. See rule 702.100, “Evolve.”

Exalted
A keyword ability that can make a creature better in combat. See rule 702.83, “Exalted.”

Exchange
To swap two things, such as objects, sets of objects, or life totals. See rule 701.10, “Exchange.”

Exert
A keyword action that stops a permanent from untapping during the next untap step of the player who exerted it. See rule 701.39, “Exert.”

Excess Damage
Damage dealt to a creature greater than what would be lethal damage or damage dealt to a planeswalker greater than its loyalty. See rule 120.4a.

Exile
1. A zone. Exile is essentially a holding area for cards. It used to be known as the “removed-from-the-game” zone.
2. To put an object into the exile zone from whatever zone it’s currently in. An “exiled” card is one that’s been put into the exile zone.
See rule 406, “Exile.”

Expansion Symbol
A card’s expansion symbol is a small icon normally printed below the right edge of the illustration that has no effect on game play. See rule 206, “Expansion Symbol.”

Exploit
A keyword ability that lets you sacrifice a creature for a benefit. See rule 702.110, “Exploit.”

Explore
A keyword action that causes a player to reveal the top card of their library and then to take different actions depending on whether a land card is revealed this way. See rule 701.40, “Explore.”

Extort
A keyword ability that lets you gain life and have opponents lose life whenever you cast a spell. See rule 702.101, “Extort.”

Extra Turn
A turn created by an effect of a spell or ability. See rule 500.7. For rules about extra turns in a multiplayer game using the shared team turns option, see 805.8. For rules about extra turns in a Grand Melee game, see rule 807.4.

Fabricate
A keyword ability that lets you choose whether to create Servo tokens or put +1/+1 counters on a creature. See rule 702.123, “Fabricate.”

Face Down
1. A card is “face down” if it’s physically positioned so the card back is showing. Cards in some zones are normally kept face down. See section 4, “Zones.”
2. A status a permanent may have. See rule 110.5 and rule 702.37, “Morph.”
3. Face-down spells have additional rules. See rule 707, “Face-Down Spells and Permanents,” and rule 702.37, “Morph.”

Face Up
1. A card is “face up” if it’s physically positioned so the card front is showing. Cards in some zones are normally kept face up. See section 4, “Zones.”
2. A default status a permanent may have. See rule 110.5 and rule 702.37, “Morph.”

Fading
A keyword ability that limits how long a permanent remains on the battlefield. See rule 702.32, “Fading.”

Fateseal
To manipulate some of the cards on top of an opponent’s library. See rule 701.22, “Fateseal.”

Fear
A keyword ability that restricts how a creature may be blocked. See rule 702.36, “Fear.”

Fight
When two creatures fight, each deals damage equal to its power to the other. See rule 701.12, “Fight.”

First Strike
A keyword ability that lets a creature deal its combat damage before other creatures. See rule 702.7, “First Strike.”

Flanking
A keyword ability that can make a creature better in combat. See rule 702.25, “Flanking.”

Flash
A keyword ability that lets a player play a card any time they could cast an instant. See rule 702.8, “Flash.”

Flashback
A keyword ability that lets a player cast a card from their graveyard. See rule 702.34, “Flashback.”

Flavor Text
Text in italics (but not in parentheses) in the text box of a card that has no effect on play. See rule 207.2.

Flip Cards
Cards with a two-part card frame (one part of which is printed upside down) on a single card. See rule 709, “Flip Cards.”

Flipped
A status a permanent may have. See rule 110.5 and rule 709, “Flip Cards.” See also Unflipped.

Flipping a Coin
A method of randomization with two possible outcomes of equal likelihood. See rule 705, “Flipping a Coin.”

Flying
A keyword ability that restricts how a creature may be blocked. See rule 702.9, “Flying.”

Food Token
A Food token is a colorless artifact token with “{2}, {T}, Sacrifice this artifact: You gain 3 life.” For more information about predefined tokens, see rule 111.10.

Forecast
A keyword ability that allows an activated ability to be activated from a player’s hand. See rule 702.57, “Forecast.”

Forest
One of the five basic land types. Any land with this subtype has the ability “{T}: Add {G}.” See rule 305.6.

Forestcycling
See Typecycling.

Forestwalk
See Landwalk.

Foretell
A keyword ability that lets a player exile cards from their hand and cast them for an alternative cost on future turns. See rule 702.143, “Foretell.”

Foretold
A card exiled using the foretell special action becomes foretold. Other effects can also make an exiled card foretold. A spell was foretold if it was a foretold card in exile before it was cast.

Fortification
An artifact subtype. Fortifications can be attached to lands. See rule 301, “Artifacts,” and rule 702.67, “Fortify.”

Fortify
A keyword ability that lets a player attach a Fortification to a land they control. See rule 301, “Artifacts,” and rule 702.67, “Fortify.”

Frenzy
A keyword ability that can make a creature better in combat. See rule 702.68, “Frenzy.”

Free-for-All
A multiplayer variant in which a group of players compete as individuals against each other. See rule 806, “Free-for-All Variant.”

Full Party
A player has a full party if the number of creatures in their party is four. See rule 700.8.

Fuse
A keyword ability that allows a player to cast both halves of a split card. See rule 702.102, “Fuse.”

Fused Split Spell
A split card on the stack that has been cast using the fuse ability or a copy of such a card. See rule 702.102, “Fuse.”

General
Any player in the Emperor multiplayer variant who isn’t an emperor. See rule 809, “Emperor Variant.”

Generic Mana
Mana in a cost represented by numerical symbols (such as {1}) or variable symbols (such as {X}) that can be paid with mana of any type. See rule 107.4.

Global Enchantment (Obsolete)
An obsolete term for a non-Aura enchantment. Cards printed with this text have received errata in the Oracle card reference.

Goad
A keyword action that forces a creature to attack and to attack another player if able. See rule 701.38, “Goad.”

Gold Token
A Gold token is a colorless artifact token with “Sacrifice this artifact: Add one mana of any color.” For more information on predefined tokens, see rule 111.10.

Graft
A keyword ability that has a permanent enter the battlefield with +1/+1 counters on it and can move those counters to other creatures. See rule 702.58, “Graft.”

Grand Melee
A multiplayer variant in which a large group of players (usually ten or more) compete as individuals against each other. See rule 807, “Grand Melee Variant.”

Gravestorm
A keyword ability that creates copies of a spell. See rule 702.69, “Gravestorm.”

Graveyard
1. A zone. A player’s graveyard is their discard pile.
2. All the cards in a player’s graveyard.
See rule 404, “Graveyard.”

Hand
1. A zone. A player’s hand is where that player holds cards they have drawn but not played yet.
2. All the cards in a player’s hand.
See rule 402, “Hand.”

Hand Modifier
A characteristic that only vanguards have. See rule 210, “Hand Modifier.”

Haste
A keyword ability that lets a creature ignore the “summoning sickness” rule. See rule 702.10, “Haste,” and rule 302.6.

Haunt
A keyword ability that exiles cards. A card exiled this way “haunts” a creature targeted by the haunt ability. See rule 702.55, “Haunt.”

Hexproof
A keyword ability that precludes a permanent or player from being targeted by an opponent. See rule 702.11, “Hexproof.”

Hidden Agenda
A keyword ability that allows a conspiracy card to be put into the command zone face down. See rule 702.106, “Hidden Agenda.”

Hidden Zone
A zone in which not all players can be expected to see the cards’ faces. See rule 400.2. See also Public Zone.

Hideaway
A keyword ability that lets a player store a secret card. See rule 702.75, “Hideaway.”

Historic
An object is historic if it has the legendary supertype, the artifact card type, or the Saga subtype. See rule 700.6.

Horsemanship
A keyword ability that restricts how a creature may be blocked. See rule 702.31, “Horsemanship.”

Hybrid Card
A card with one or more hybrid mana symbols in its mana cost. See rule 202.2f.

Hybrid Mana Symbols
A mana symbol that represents a cost that can be paid in one of two ways. See rule 107.4.

If
See Intervening “If” Clause.

Illegal Action
An action that violates the rules of the game and/or requirements or restrictions created by effects. See rule 723, “Handling Illegal Actions.”

Illegal Target
A target that no longer exists or no longer meets the specifications stated by the spell or ability that’s targeting it. See rule 608.2b.

Illustration
A picture printed on the upper half of a card that has no effect on game play. See rule 203, “Illustration.”

Illustration Credit
Information printed directly below the text box that has no effect on game play. See rule 212, “Information Below the Text Box.”

Imprint
“Imprint” used to be a keyword ability. It is now an ability word and has no rules meaning. All cards printed with the imprint keyword have received errata in the Oracle card reference.

Improvise
A keyword ability that lets you tap artifacts rather than pay mana to cast a spell. See rule 702.126, “Improvise.”

In Play (Obsolete)
An obsolete term for the battlefield. Cards that were printed with text that contain the phrases “in play,” “from play,” “into play,” or the like are referring to the battlefield and have received errata in the Oracle card reference. See Battlefield.

In Response To
An instant spell that’s been cast, or an activated ability that’s been activated, while another spell or ability is on the stack has been cast or activated “in response to” the earlier spell or ability. See rule 117.7.

Independent
See Dependency.

Indestructible
A keyword ability that precludes a permanent from being destroyed. See rule 702.12.

Infect
A keyword ability that affects how an object deals damage to creatures and players. See rule 702.90, “Infect.”

Ingest
A keyword ability that can exile the top card of a player’s library. See rule 702.115, “Ingest.”

Instant
A card type. An instant is not a permanent. See rule 304, “Instants.”

Instead
Effects that use the word “instead” are replacement effects. The word “instead” indicates what an event will be replaced with. See rule 614, “Replacement Effects.”

Interrupt (Obsolete)
An obsolete card type. All cards printed with this card type are now instants. All abilities that, as printed, said a player could “play as an interrupt” can now be activated like any other activated abilities (unless they’re mana abilities, in which case they follow those rules instead). All relevant cards have been given errata in the Oracle card reference.

Intervening “If” Clause
A specially worded condition checked as a triggered ability would trigger and again as it would resolve. See rule 603.4

Intimidate
A keyword ability that restricts how a creature may be blocked. See rule 702.13, “Intimidate.”

Investigate
A keyword action that creates a Clue artifact token. See rule 701.36, “Investigate.”

Island
One of the five basic land types. Any land with this subtype has the ability “{T}: Add {U}.” See rule 305.6.

Islandcycling
See Typecycling.

Islandhome (Obsolete)
An obsolete keyword ability that meant “This creature can’t attack unless defending player controls an Island” and “When you control no Islands, sacrifice this creature.” Cards printed with this ability have been given errata in the Oracle card reference.

Islandwalk
See Landwalk.

Jump-Start
A keyword ability that lets a player cast a card from their graveyard by discarding a card. See rule 702.133, “Jump-Start.”

Keyword Ability
A game term, such as “flying” or “haste,” used as shorthand for a longer ability or group of abilities. See rule 702, “Keyword Abilities.”

Keyword Action
A verb, such as “destroy” or “cast,” used as a game term rather than as its normal English meaning. See rule 701, “Keyword Actions.”

Keyword Counter
A marker placed on an object that modifies its characteristics by granting it a keyword. See rule 122, “Counters.”

Kicker, Kicked
Kicker is a keyword ability that represents an optional additional cost. A spell has been kicked if its controller declared the intention to pay any or all of its kicker costs. See rule 702.33, “Kicker.”

Land
A card type. A land is a permanent. See rule 305, “Lands.”

Land Type
A subtype that’s correlated to the land card type. See rule 305, “Lands.” See rule 205.3i for the list of land types.

Landwalk
A generic term for a group of keyword abilities that restrict whether a creature may be blocked. See rule 702.14, “Landwalk.”

Last Known Information
Information about an object that’s no longer in the zone it’s expected to be in, or information about a player that’s no longer in the game. This information captures that object’s last existence in that zone or that player’s last existence in the game. See rules 113.7a, 608.2b, 608.2h, and 800.4h.

Layer
A system used to determine in which order continuous effects are applied. See rule 613, “Interaction of Continuous Effects.” See also Dependency, Timestamp Order.

Learn
A keyword ability that lets a player add a Lesson card to their hand from outside the game or discard a card to draw a card. See rule 701.45, “Learn.”

Leaves the Battlefield
A permanent “leaves the battlefield” when it’s moved from the battlefield to another zone, or (if it’s phased in) when it leaves the game because its owner leaves the game. See rules 603.6c and 603.10.

Legal Text
Information printed directly below the text box that has no effect on game play. See rule 212, “Information Below the Text Box.”

Legend (Obsolete)
An obsolete creature type. Cards printed with this subtype have been given errata in the Oracle card reference so they have the legendary supertype instead. See Legendary.

Legendary
A supertype that’s normally relevant on permanents. See rule 205.4, “Supertypes.” See also Legend Rule.

Legend Rule
A state-based action that causes a player who controls two or more legendary permanents with the same name to put all but one into their owners’ graveyards. See rule 704.5j.

Lethal Damage
An amount of damage greater than or equal to a creature’s toughness. See rules 120.4a, 120.6, 510.1, and 704.5g.

Level Symbol
A symbol that represents a keyword ability indicating abilities, power, and toughness a leveler card may have. See rule 107.8 and rule 710, “Leveler Cards.”

Level Up
A keyword ability that can put level counters on a creature. See rule 702.87, “Level Up.”

Leveler Cards
Cards with striated text boxes and three power/toughness boxes. See rule 710, “Leveler Cards.”

Library
1. A zone. A player’s library is where that player draws cards from.
2. All the cards in a player’s library.
See rule 401, “Library.”

Life, Life Total
Each player has an amount of “life,” represented by that player’s “life total.” Life may be gained or lost. See rule 119, “Life.”

Life Modifier
A characteristic that only vanguards have. See rule 211, “Life Modifier.”

Lifelink
A keyword ability that causes a player to gain life. See rule 702.15, “Lifelink.”

Limited
A way of playing in which each player gets a quantity of unopened Magic product and creates their own deck on the spot. See rule 100.2.

Limited Range of Influence
An optional rule used in some multiplayer games that limits what a player can affect. See rule 801, “Limited Range of Influence Option.”

Linked Abilities
Two abilities printed on the same object such that one of them causes actions to be taken or objects to be affected and the other one directly refers to those actions or objects. See rule 607, “Linked Abilities.”

Living Weapon
A keyword ability that creates a creature token and then attaches the Equipment with the ability to that token. See rule 702.92, “Living Weapon.”

Local Enchantment (Obsolete)
An obsolete term for an Aura. Cards printed with this text have received errata in the Oracle card reference.

London Mulligan
Informal term for the current system of mulligan rules. See rule 103.4.

Loop
A set of actions that could be repeated indefinitely. See rule 722, “Taking Shortcuts.”

Lose the Game
There are several ways to lose the game. See rule 104, “Ending the Game,” rule 810.8 (for additional rules for Two-Headed Giant games), rule 809.5 (for additional rules for Emperor games), and rule 903.10 (for an additional rule for Commander games).

Loyalty
1. Part of a card that only planeswalkers have. A planeswalker card’s loyalty is printed in its lower right corner. See rule 209, “Loyalty.”
2. A characteristic that only planeswalkers have. See rule 306.5.

Loyalty Ability
An activated ability with a loyalty symbol in its cost. See rule 606, “Loyalty Abilities.”

Madness
A keyword ability that lets a player cast a card they discard. See rule 702.35, “Madness.”

Main Game
The game in which a spell (or ability) that created a subgame was cast (or activated). See rule 720, “Subgames.”

Main Phase
Part of the turn. The first, or precombat, main phase is the second phase of the turn. The second, or postcombat, main phase is the fourth phase of the turn. See rule 505, “Main Phase.”

Mana
The primary resource in the game. It is spent to pay costs, usually when casting spells and activating abilities. See rule 106, “Mana,” rule 107.4, and rule 202, “Mana Cost and Color.”

Mana Ability
An activated or triggered ability that could create mana and doesn’t use the stack. See rule 605, “Mana Abilities.”

Mana Burn (Obsolete)
Older versions of the rules stated that unspent mana caused a player to lose life; this was called “mana burn.” That rule no longer exists.

Mana Cost
A characteristic, and part of a card. A card’s mana cost is indicated by the mana symbols printed in its upper right corner. See rule 107.4 and rule 202, “Mana Cost and Color.”

Mana Pool
Where mana created by an effect is temporarily stored. See rule 106.4.

Mana Source (Obsolete)
An obsolete card type. All cards printed with this card type are now instants. All abilities that, as printed, said a player could “play as a mana source” are now mana abilities. All relevant cards have been given errata in the Oracle card reference.

Mana Symbol
An icon that represents mana or a mana cost. See rule 107.4.

Mana Value
The total amount of mana in a mana cost, regardless of color. See rule 202.3.

Manifest
A keyword action that puts a card onto the battlefield face down as a 2/2 creature. See rule 701.34, “Manifest,” and rule 707, “Face-Down Spells and Permanents.”

Match
A multiplayer game or a two-player series of games (usually best-two-of-three) played in a tournament. See rule 100.6.

Maximum Hand Size
The number of cards in hand a player must discard down to during their cleanup step. See rule 402.2 and 514.1.

Megamorph
A variant of the morph ability that puts a +1/+1 counter on the creature as it turns face up. See rule 702.37, “Morph.”

Meld
To turn two members of a meld pair so their back faces are up and combined into one oversized Magic card. See rule 701.37, “Meld.”

Meld Cards
Cards with a Magic card face on one side and half of an oversized Magic card face on the other. See rule 712, “Meld Cards.”

Melee
A keyword ability that improves an attacking creature based on the number of opponents you attacked. See rule 702.121, “Melee.”

Menace
An evasion ability that makes creatures unblockable by a single creature. See rule 702.111, “Menace.”

Mentor
A keyword ability that lets your bigger creatures power up your smaller creatures when they attack together. See rule 702.134, “Mentor.”

Merged Permanent
A card or token may merge with a permanent to form a merged permanent. This merged permanent is represented by more than one card and/or token. See rule 721, “Merging with Permanents.”

Mill
To mill a number of cards, a player puts that many cards from the top of their library into their graveyard. See rule 701.13.

Minimum Deck Size
If a rule or effect states that a player’s deck must contain at least a specific number of cards, that number is the player’s minimum deck size.

Miracle
A keyword ability that lets you cast a spell for a reduced cost if it’s the first card you draw in a turn. See rule 702.94, “Miracle.”

Modal, Mode
A spell or ability is “modal” if it has two or more options in a bulleted list preceded by instructions for a player to choose a number of those options, such as “Choose one —.” See rule 700.2.

Modal Double-Faced Cards
One of two kinds of double-faced cards. Modal double-faced cards can be played with either of their two faces up and can’t transform. See rule 711, “Double-Faced Cards.”

Modular
A keyword ability that has a permanent enter the battlefield with +1/+1 counters on it and can move those counters to other artifact creatures. See rule 702.43, “Modular.”

Monarch
A designation a player can have. Some effects instruct a player to become the monarch. The monarch draws a card at the beginning of their end step. Dealing combat damage to the monarch steals the title from that player. See rule 718, “The Monarch.”

Mono Artifact (Obsolete)
An obsolete term that appeared on the type line of artifacts with activated abilities that caused the artifact to become tapped as a cost. Cards printed with this text have received errata in the Oracle card reference to simply say “Artifact,” and those abilities now include the tap symbol in their costs.

Monocolored
An object with exactly one color is monocolored. Colorless objects aren’t monocolored. See rule 105, “Colors,” and rule 202, “Mana Cost and Color.”

Monocolored Hybrid Mana Symbols
See Hybrid Mana Symbols.

Monstrosity
A keyword action that puts +1/+1 counters on a creature and makes it become monstrous. See rule 701.31, “Monstrosity.”

Monstrous
A designation given to a creature whose ability including a monstrosity instruction has resolved. See rule 701.31, “Monstrosity.”

Morph
A keyword ability that lets a card be cast face down as a 2/2 creature. See rule 702.37, “Morph,” and rule 707, “Face-Down Spells and Permanents.”

Mountain
One of the five basic land types. Any land with this subtype has the ability “{T}: Add {R}.” See rule 305.6.

Mountaincycling
See Typecycling.

Mountainwalk
See Landwalk.

Move
To remove a counter from one object and put it on a different object. See rule 122.5.
Some older cards used “move” with respect to Auras; those cards have received errata in the Oracle card reference and now use the word “attach.”

Mulligan
To take a mulligan is to reject a prospective opening hand in favor of a new one. See rule 103.4.

Multicolored
An object with two or more colors is multicolored. Multicolored is not a color. See rule 105, “Colors,” and rule 202, “Mana Cost and Color.”

Multikicker
Multikicker is a variant of the kicker keyword ability. It represents an optional additional cost that may be paid any number of times. See rule 702.33, “Kicker.” See also Kicker.

Multiplayer Game
A game that begins with more than two players. See section 8, “Multiplayer Rules.”

Mutate
A keyword that lets a creature card be cast as a mutating creature spell. See rule 702.140, “Mutate.”

Mutating Creature Spell
A creature spell cast using the mutate keyword ability. As it resolves, if its target creature is legal, it merges with the target creature. The resulting creature has all characteristics of the topmost component and has the abilities of each component. See rule 702.140, “Mutate,” and rule 721, “Merging with Permanents.”

Myriad
Myriad is a triggered ability that effectively lets a creature attack in all possible directions. See rule 702.116, “Myriad.”

Name
A characteristic, and part of a card. A card’s name is printed in its upper left corner. See rule 201, “Name.”

Ninjutsu
A keyword ability that lets a creature suddenly enter combat. See rule 702.49, “Ninjutsu.”

Nonbasic Land
Any land that doesn’t have the supertype “basic.” See rule 205.4, “Supertypes.”

Nontraditional Magic Card
An oversized Magic card that has a Magic card back but not a “Deckmaster” back. See rule 108.2.

Object
An ability on the stack, a card, a copy of a card, an emblem, a token, a spell, or a permanent. See rule 109, “Objects.”

Offering
A keyword ability that modifies when you can cast a spell and how much mana you need to spend to do it. See rule 702.48, “Offering.”

One-Shot Effect
An effect that does something just once and doesn’t have a duration. See rule 610, “One-Shot Effects.” See also Continuous Effects.

Ongoing
A supertype that appears only on scheme cards. See rule 205.4, “Supertypes.”

Opening Hand
The hand of cards a player starts the game with, once the player has decided not to take any further mulligans. See rule 103.4.

Opponent
Someone a player is playing against. See rules 102.2 and 102.3.

Option
An additional rule or set of rules that can be used in a multiplayer game. See rule 800.2.

Oracle
The reference that contains the up-to-date wordings (in English) for all tournament-legal cards. A card’s Oracle text can be found using the Gatherer card database at Gatherer.Wizards.com. See rule 108.1.

Outlast
A keyword ability that allows a creature to grow larger over time. See rule 702.107, “Outlast.”

Outside the Game
An object is “outside the game” if it isn’t in any of the game’s zones. See rule 400.11.

Overload
A keyword ability that allows a spell to affect either a single target or many objects. See rule 702.96, “Overload.”

Owner
The player who (for purposes of the game) a card, permanent, token, or spell belongs to. See rules 108.3, 110.2, 111.2, and 112.2.

Paired
A term that describes a creature that’s been affected by a soulbond ability. See rule 702.95, “Soulbond.”

Paris Mulligan
Informal term for a previous system of taking a mulligan. Using the Paris mulligan, a player who took a mulligan shuffled their hand into their library and drew one fewer card. For current mulligan rules, see rule 103.4.

Partner, “Partner with [name]”
A keyword ability that lets two legendary creatures or planeswalkers be your commander in the Commander variant rather than one. “Partner with [name]” is a specialized version of the ability that works even outside of the Commander variant to help two cards reach the battlefield together. See rule 702.124, “Partner,” and rule 903, “Commander.”

Party
Some cards refer to the number of creatures in your party. A player’s party includes up to one each of Cleric, Rogue, Warrior, and Wizard. See rule 700.8.

Pass
To decline to take any action (such as casting a spell or activating an ability) when you have priority. See rule 117, “Timing and Priority.”

Pass in Succession
All players “pass in succession” if each player in the game (starting with any one of them) opts not to take an action upon receiving priority. See rule 117, “Timing and Priority.”

Pay
To perform the actions required by a cost. This often means, but is not restricted to, spending resources such as mana or life. See rule 118, “Costs.”

Permanent
A card or token on the battlefield. See rule 110, “Permanents.”

Permanent Card
A card that could be put onto the battlefield. See rule 110.4a.

Permanent Spell
A spell that will enter the battlefield as a permanent as part of its resolution. See rule 110.4b.

Permanently (Obsolete)
An obsolete term used to indicate that a continuous effect has no duration and thus lasts until the end of the game. Cards printed with this term have received errata in the Oracle card reference to delete it.

Persist
A keyword ability that can return a creature from the graveyard to the battlefield. See rule 702.79, “Persist.”

Phase
1. A subsection of a turn. See section 5, “Turn Structure.”
2. A permanent “phases in” when its status changes from phased out to phased in. A permanent “phases out” when its status changes from phased in to phased out. See rule 702.26, “Phasing.”

Phased In, Phased Out
A status a permanent may have. Phased-in is the default status. Phased-out permanents are treated as though they do not exist. See rule 110.5 and rule 702.26, “Phasing.” (“Phased-out” was a zone in older versions of the rules.)

Phasing
A keyword ability that causes a permanent to sometimes be treated as though it does not exist. See rule 702.26, “Phasing.”

Phenomenon
A card type seen only on nontraditional Magic cards in the Planechase casual variant. A phenomenon card is not a permanent. See rule 310, “Phenomena.”

Phyrexian Mana Symbol
A mana symbol that represents a cost that can be paid either by spending colored mana or by paying life. See rule 107.4.

Phyrexian Symbol
A symbol used in rules text to represent any of the five Phyrexian mana symbols. See rule 107.4g.

Pile
A temporary grouping of cards. See rule 700.3.

Placed
(Obsolete) Some spells and abilities previously referred to a counter being “placed” on a permanent. These cards have received errata in the Oracle card reference to use the term “put” instead. Due to a rules change, these cards continue to function as they did before. See rule 122, “Counters.”

Plains
One of the five basic land types. Any land with this subtype has the ability “{T}: Add {W}.” See rule 305.6.

Plainscycling
See Typecycling.

Plainswalk
See Landwalk.

Planar Deck
A deck of at least ten plane cards needed to play the Planechase casual variant. See rule 901.3.

Planar Die
A specialized six-sided die needed to play the Planechase casual variant. See rule 901.3.

Plane
A card type seen only on nontraditional Magic cards in the Planechase casual variant. A plane card is not a permanent. See rule 309, “Planes.”

Planechase
A casual variant in which plane cards and phenomenon cards add additional abilities and randomness to the game. See rule 901, “Planechase.”

Planeswalk
To put each face-up plane card or phenomenon card on the bottom of its owner’s planar deck face down, then move the top card of your planar deck off that planar deck and turn it face up in a Planechase game. See rule 701.24, “Planeswalk.”

Planeswalker
A card type. A planeswalker is a permanent. See rule 306, “Planeswalkers.”

Planeswalker Symbol
The Planeswalker symbol {PW} appears on the planar die in the Planechase casual variant. See rule 107.11.

Planeswalker Type
A subtype that’s correlated to the planeswalker card type. See rule 306, “Planeswalkers.” See rule 205.3j for the list of planeswalker types.

Planeswalker Uniqueness Rule (Obsolete)
Older versions of the rules stated that a player who controlled two or more planeswalkers with the same planeswalker type would put all but one of those planeswalkers into their owners’ graveyards. This rule was called the “planeswalker uniqueness rule” and no longer exists.

Play
1. To play a land is to put a land onto the battlefield as a special action. See rule 116, “Special Actions,” and rule 305, “Lands.”
2. To play a card is to play that card as a land or cast that card as a spell, whichever is appropriate. See rule 601, “Casting Spells.”
3. (Obsolete) Casting a spell used to be known as playing a spell. Cards with that text have received errata in the Oracle card reference. See Cast.
4. (Obsolete) Activating an activated ability used to be known as playing an activated ability. Cards with that text have received errata in the Oracle card reference. See Activate.
5. (Obsolete) The battlefield used to be known as the in-play zone. Cards that were printed with text that contains the phrases “in play,” “from play,” “into play,” or the like are referring to the battlefield and have received errata in the Oracle card reference. See Battlefield.

Player
One of the people in the game. See rule 102, “Players.”

Poison Counter
A counter that may be given to a player. See rule 122, “Counters,” and rule 704.5c.

Poisoned
Having one or more poison counters. See rule 122, “Counters.”

Poisonous
A keyword ability that causes a player to get poison counters. See rule 702.70, “Poisonous.”

Poly Artifact (Obsolete)
An obsolete term that appeared on the type line of artifacts with activated abilities that didn’t cause the artifact to be tapped as a cost. Cards printed with this text have received errata in the Oracle card reference to simply say “Artifact.”

Populate
A keyword action that creates a copy of a creature token you control. See rule 701.30, “Populate.”

Postcombat Main Phase
A main phase that occurs after a combat phase. See Main Phase.

Power
1. Part of a card that only creatures have. A creature card’s power is printed before the slash in its lower right corner. See rule 208, “Power/Toughness.”
2. A characteristic that only creatures have. See rule 302.4.

Precombat Main Phase
The first main phase of a turn. See Main Phase.

Prevent
A word used by prevention effects to indicate what damage will not be dealt. See rule 615, “Prevention Effects.”

Prevention Effect
A kind of continuous effect that watches for a damage event that would happen and completely or partially prevents the damage that would be dealt. See rule 615, “Prevention Effects.”

Priority
Which player can take actions at any given time is determined by a system of “priority.” See rule 117, “Timing and Priority.”

Proliferate
To give an additional counter to any number of players and/or permanents of each kind they already have. See rule 701.27, “Proliferate.”

Protection
A keyword ability that provides a range of benefits against objects with a specific quality. See rule 702.16, “Protection.”

Provoke
A keyword ability that can force a creature to block. See rule 702.39, “Provoke.”

Prowess
A keyword ability that causes a creature to get +1/+1 whenever its controller casts a noncreature spell. See rule 702.108, “Prowess.”

Prowl
A keyword ability that may allow a spell to be cast for an alternative cost. See rule 702.76, “Prowl.”

Public Zone
A zone in which all players can be expected to see the cards’ faces. See rule 400.2. See also Hidden Zone.

Rampage
A keyword ability that can make a creature better in combat. See rule 702.23, “Rampage.”

Range of Influence
See Limited Range of Influence.

Reach
A keyword ability that allows a creature to block an attacking creature with flying. See rule 702.17, “Reach.” See also Flying.

Rebound
A keyword ability that allows an instant or sorcery spell to be cast a second time. See rule 702.88, “Rebound.”

Recover
A keyword ability that lets a player return a card from their graveyard to their hand. See rule 702.59, “Recover.”

Redirect (Obsolete)
Some older cards were printed with the term “redirect” to indicate a redirection effect. Such cards have received errata in the Oracle card reference so they explicitly state that damage that would be dealt to one object or player is dealt “instead” to another. See Redirection Effect.

Redirection Effect
A kind of replacement effect that causes damage that would be dealt to one creature, planeswalker, or player to be dealt instead to another creature, planeswalker, or player. See rule 614.9.

Reflexive Triggered Ability
An ability that triggers based on actions taken earlier during a spell or ability’s resolution. See rule 603.12.

Regenerate
To replace a permanent’s destruction with an alternate sequence of events. See rule 701.15, “Regenerate.”

Reinforce
A keyword ability that lets a player put +1/+1 counters on a creature. See rule 702.77, “Reinforce.”

Reminder Text
Parenthetical text in italics in the text box of a card that summarizes a rule that applies to that card, but is not actually rules text and has no effect on play. See rule 207.2.

Removed from Combat
Certain events can cause an attacking or blocking creature, or a planeswalker that’s being attacked, to be “removed from combat.” A permanent that’s removed from combat has no further involvement in that combat phase. See rule 506.4.

Remove from the Game, Removed, Removed-from-the-Game Zone (Obsolete)
“Remove [something] from the game” is an obsolete term for “exile [something].” “The removed card” is an obsolete term for “the exiled card.” The removed-from-the-game zone is an obsolete term for the exile zone. Cards with that text have received errata in the Oracle card reference. See Exile.

Renown
A keyword ability that makes a creature stronger after it deals combat damage to a player. See rule 702.112, “Renown.”

Renowned
A designation given to a permanent as a result of the renown ability. See rule 702.112, “Renown.”

Replacement Effect
A kind of continuous effect that watches for a particular event that would happen and completely or partially replaces that event with a different event. See rule 614, “Replacement Effects.”

Replicate
A keyword ability that creates copies of a spell. See rule 702.56, “Replicate.”

Requirement
An effect that forces one or more creatures to attack or block. See rules 508.1d and 509.1c.

Resolve
When the spell or ability on top of the stack “resolves,” its instructions are followed and it has its effect. See rule 608, “Resolving Spells and Abilities.”

Restart the Game
To immediately end the current game and restart it. See rule 104, “Ending the Game.”

Respond
To cast an instant spell or activate an ability while another spell or ability is already on the stack. See rule 117.7.

Restriction
An effect that precludes one or more creatures from attacking or blocking. See rules 508.1c and 509.1b.

Retrace
A keyword ability that lets a player cast a card from their graveyard. See rule 702.81, “Retrace.”

Reveal
To show a card to all players for a brief time. See rule 701.16, “Reveal.”

Riot
A keyword ability that lets a player choose whether certain creatures enter the battlefield with haste or with a +1/+1 counter. See rule 702.136, “Riot.”

Ripple
A keyword ability that may let a player cast extra cards from their library for no cost. See rule 702.60, “Ripple.”

Rules Text
A characteristic that defines a card’s abilities. See rule 207.1.

Sacrifice
To move a permanent you control to its owner’s graveyard. See rule 701.17, “Sacrifice.”

Saga
An enchantment subtype. Sagas have a number of chapter abilities that take effect over a number of turns to tell a story. See rule 714, “Saga Cards.” 

Scavenge
A keyword ability that allows you to exile a creature card from your graveyard to put +1/+1 counters on a creature. See rule 702.97, “Scavenge.”

Scheme
A card type seen only on nontraditional Magic cards in the Archenemy casual variant. A scheme card is not a permanent. See rule 312, “Schemes.”

Scry
To manipulate some of the cards on top of your library. See rule 701.18, “Scry.”

Search
To look at all cards in a stated zone and possibly find a card that matches a given description. See rule 701.19, “Search.”

Set Aside (Obsolete)
“Set [something] aside” is an obsolete term for “exile [something].” Cards with that text have received errata in the Oracle card reference. See Exile.

Set in Motion
To move a scheme card off the top of your scheme deck and turn it face up. See rule 701.25, “Set in Motion.”

Shadow
A keyword ability that restricts how a creature may be blocked and which creatures it can block. See rule 702.28, “Shadow.”

Shard Token
A Shard token is a colorless enchantment token with “{2}, Sacrifice this enchantment: Scry 1, then draw a card.” For more information on predefined tokens, see rule 111.10.

Shared Life Total
In the Two-Headed Giant multiplayer variant, each team has a “shared life total” rather than each player having an individual life total. See rule 810, “Two-Headed Giant Variant.”

Shared Team Turns Option
An option that may be used in certain multiplayer variants, such as Two-Headed Giant and Archenemy. See rule 805, “Shared Team Turns Option.”

Shortcut
A mutually understood way for the game to advance forward a number of game choices (either taking an action or passing priority) without players needing to explicitly identify each such choice. See rule 722, “Taking Shortcuts.”

Shroud
A keyword ability that precludes a permanent or player from being targeted. See rule 702.18, “Shroud.”

Shuffle
To randomize the cards in a deck (before a game) or library (during a game). See rule 103.2.

Sideboard
Extra cards that may be used to modify a deck between games of a match. See rules 100.4.

Silver-Bordered
Cards in certain sets and certain promotional cards are printed with a silver border. Silver-bordered cards are intended for casual play and may have features and text that aren’t covered by these rules.

Skip
Effects that use the word “skip” are replacement effects. The word “skip” indicates what events, steps, phases, or turns will be replaced with nothing. See rule 614, “Replacement Effects.”

Skulk
A keyword ability that restricts how a creature may be blocked. See rule 702.118, “Skulk.”

Slivercycling
See Typecycling.

Snow
A supertype that’s normally relevant on permanents. See rule 205.4, “Supertypes.”

Snow Mana Symbol
The snow mana symbol {S} represents a cost that can be paid with one mana produced by a snow source. It can also represent mana from a snow source that was spent to pay a cost. See rule 107.4h.

Snow-Covered (Obsolete)
Some older cards were printed with the term “snow-covered” in their rules text. Except when referencing card names, such cards have received errata in the Oracle card reference to reference the supertype “snow” instead. See Snow.

Sorcery
A card type. A sorcery is not a permanent. See rule 307, “Sorceries.”

Soulbond
A keyword ability that makes creatures better by pairing them together. See rule 702.95, “Soulbond.”

Soulshift
A keyword ability that lets a player return a card from their graveyard to their hand. See rule 702.46, “Soulshift.”

Source of an Ability
The object that generated that ability. See rule 113.7.

Source of Damage
The object that dealt that damage. See rule 609.7.

Source of Mana
The spell that produced mana or the source of the ability that produced mana. See rule 106.3.

Special Action
An action a player may take that doesn’t use the stack. See rule 116, “Special Actions.”

Spectacle
A keyword ability that allows certain spells to be cast for an alternative cost if an opponent has lost life. See rule 702.137, “Spectacle.”

Spell
A card on the stack. Also a copy (of either a card or another spell) on the stack. See rule 112, “Spells.”

Spell Ability
A kind of ability. Spell abilities are abilities that are followed as instructions while an instant or sorcery spell is resolving. See rule 113.3a.

Spell Type
A subtype that’s correlated to the instant card type and the sorcery card type. See rule 304, “Instants,” and rule 307, “Sorceries.” See rule 205.3k for the list of spell types.

Splice
A keyword ability that lets a player add a card’s rules text onto another spell. See rule 702.47, “Splice.”

Split Cards
Cards with two card faces on a single card. See rule 708, “Split Cards.”

Split Second
A keyword ability that makes it nearly impossible for a player to respond to a spell. See rule 702.61, “Split Second.”

Stack
A zone. The stack is the zone in which spells, activated abilities, and triggered abilities wait to resolve. See rule 405, “Stack.”

Starting Deck
After a player has set aside their sideboard, their remaining deck becomes their starting deck. See rule 103.2.

Starting Hand Size
The number of cards a player draws as a game begins. In most games, each player’s starting hand size is seven. See rule 103.4.

Starting Life Total
The amount of life a player has as a game begins. In most games, each player’s starting life total is 20. See rule 103.3.

Starting Player
The player chosen to take the first turn of a game. See rule 103.1.

Starting Team
The team chosen to take the first turn of a game using the shared team turns option. See rule 103.1.

State-Based Actions
Game actions that happen automatically whenever certain conditions are met. See rule 704, “State-Based Actions.”

State Trigger
A triggered ability that triggers when a game state is true rather than triggering when an event occurs. See rule 603.8.

Static Ability
A kind of ability. Static abilities do something all the time rather than being activated or triggered. See rule 113, “Abilities,” and rule 604, “Handling Static Abilities.”

Status
The physical state of a permanent. See rule 110.5.

Step
A subsection of a phase. See section 5, “Turn Structure.”

Storm
A keyword ability that creates copies of a spell. See rule 702.40, “Storm.”

Subgame
A completely separate Magic game created by an effect. See rule 720, “Subgames.”

Substitute Card
A game supplement with a Magic card back that can be used to represent a double-faced card or meld card. See rule 713, “Substitute Cards.”

Subtype
A characteristic that appears after the card type and a long dash on a card’s type line. See rule 205.3, “Subtypes.”

Successfully Cast (Obsolete)
A term that was printed on some older cards. In general, cards that referred to a spell being “successfully cast” have received errata in the Oracle card reference to simply refer to a spell being “cast.”

Summon (Obsolete)
Older creature cards were printed with “Summon [creature type]” on their type lines. All such cards have received errata in the Oracle card reference to say “Creature — [creature type].” (Many of these cards’ creature types have also been updated.) See Creature.

Summoning Sickness Rule
Informal term for a player’s inability to attack with a creature or to activate its abilities that include the tap symbol or the untap symbol unless the creature has been under that player’s control since the beginning of that player’s most recent turn. See rule 302.6. See also Haste.

Sunburst
A keyword ability that can have a permanent enter the battlefield with +1/+1 counters or charge counters on it. See rule 702.44, “Sunburst.”

Supertype
A characteristic that appears before the card type on a card’s type line. Most cards don’t have a supertype. See rule 205.4, “Supertypes.”

Supervillain Rumble
A Free-for-All game in which each player is an archenemy. See rule 806, “Free-for-All,” and rule 904, “Archenemy.”

Support
A keyword action that lets you put +1/+1 counters on creatures. See rule 701.35, “Support.”

Surge
A keyword ability that provides an alternative cost to cast a card if you or one of your teammates has cast another spell in the same turn. See rule 702.117, “Surge.”

Surveil
To manipulate some of the cards on top of your library, sending some of them to your graveyard and rearranging the rest. See rule 701.42, “Surveil.”

Suspend
A keyword ability that provides an alternative way to play a card. See rule 702.62, “Suspend.” A card is “suspended” if it’s in the exile zone, has suspend, and has a time counter on it.

Swamp
One of the five basic land types. Any land with this subtype has the ability “{T}: Add {B}.” See rule 305.6.

Swampcycling
See Typecycling.

Swampwalk
See Landwalk.

Tap
To turn a permanent sideways from an upright position. See rule 701.21, “Tap and Untap.”

Tapped
A status a permanent may have. See rule 110.5 and rule 701.21, “Tap and Untap.” See also Untapped.

Tap Symbol
The tap symbol {T} in an activation cost means “Tap this permanent.” See rule 107.5.

Target
A preselected object or player a spell or ability will affect. See rule 115, “Targets.”

Team
A group of players who share a common victory condition in a multiplayer game. See rule 808, “Team vs. Team Variant,” rule 809, “Emperor Variant,” rule 810, “Two-Headed Giant Variant,” and rule 811, “Alternating Teams Variant.”

Teammate
In a multiplayer game between teams, a player’s teammates are the other players on their team. See rule 102.3.

Team vs. Team Variant
A multiplayer variant played among two or more teams, each of which sits together. See rule 808, “Team vs. Team Variant.”

Text Box
Part of a card. The text box is printed on the lower half of the card and contains the card’s rules text, reminder text, and flavor text. See rule 207, “Text Box.”

Text-Changing Effect
A continuous effect that changes the text that appears in an object’s text box and/or type line. See rule 612, “Text-Changing Effects.”

Threshold
“Threshold” used to be a keyword ability. It is now an ability word and has no rules meaning. All cards printed with the threshold keyword have received errata in the Oracle card reference.

Timestamp Order
A system used to determine in which order continuous effects in the same layer or sublayer are applied. See rule 613.7. See also Dependency.

Token
A marker used to represent any permanent that isn’t represented by a card. See rule 111, “Tokens.”

Tombstone Icon
An icon that appears in the upper left of some Odyssey block cards that has no effect on game play. See rule 107.9.

Total Casting Cost (Obsolete)
An obsolete term for mana value. Cards printed with this term have received errata in the Oracle card reference.

Total Cost
What a player actually has to pay, in practical terms, to cast a spell or activated ability: the mana cost, activation cost, or alternative cost, plus all cost increases (including additional costs) and minus all cost reductions. See rule 601.2f.

Totem Armor
A keyword ability that allows an Aura to protect the permanent it’s enchanting. See rule 702.89, “Totem Armor.”

Toughness
1. Part of a card that only creatures have. A creature card’s toughness is printed after the slash in its lower right corner. See rule 208, “Power/Toughness.”
2. A characteristic that only creatures have. See rule 302.4.

Tournament
An organized play activity where players compete against other players. See rule 100.6.

Tournament Rules
Additional rules that apply to games played in a sanctioned tournament. See rule 100.6.

Traditional Magic Card
A Magic card that measures approximately 2.5 inches (6.3 centimeters) by 3.5 inches (8.8 centimeters). See rule 108.2.

Trample
A keyword ability that modifies how a creature assigns combat damage. See rule 702.19, “Trample.”

Transfigure
A keyword ability that lets a player search their library for a replacement creature card. See rule 702.71, “Transfigure.”

Transform
To turn a double-faced card so its other face is up. See rule 701.28, “Transform.”

Transforming Double-Faced Cards
One of two kinds of double-faced cards. Transforming double-faced cards default to their front faces but can transform to their back faces in some way. See rule 711, “Double-Faced Cards.”

Transmute
A keyword ability that lets a player search their library for a replacement card. See rule 702.53, “Transmute.”

Treasure Token
A Treasure token is a colorless artifact token with “{T}, Sacrifice this artifact: Add one mana of any color.” For more information about predefined tokens, see rule 111.10.

Tribal
A card type. Whether or not a tribal is a permanent depends on its other card type. See rule 308, “Tribals.”

Tribute
A keyword ability that allows an opponent to choose between a creature entering the battlefield with +1/+1 counters or an additional ability. See rule 702.104, “Tribute.”

Trigger
Whenever a game event or game state matches a triggered ability’s trigger event, that ability automatically “triggers.” That means its controller puts it on the stack the next time a player would receive priority. See rule 603, “Handling Triggered Abilities.”

Trigger Condition
The first part of a triggered ability, consisting of “when,” “whenever,” or “at” followed by a trigger event. See rule 603, “Handling Triggered Abilities.”

Triggered Ability
A kind of ability. Triggered abilities begin with the word “when,” “whenever,” or “at.” They’re written as “[Trigger condition], [effect].” See rule 113, “Abilities,” and rule 603, “Handling Triggered Abilities.”

Trigger Event
The event that a triggered ability looks for. Whenever the trigger event occurs, the triggered ability triggers. See rule 603, “Handling Triggered Abilities.”

Turn-Based Actions
Game actions that happen automatically when certain steps or phases begin, or when each step or phase ends. See rule 703, “Turn-Based Actions.”

Turn Markers
Markers used to keep track of which players are taking turns in a Grand Melee game. See rule 807.4.

Two-Headed Giant Variant
A multiplayer variant played among two-player teams that each have a shared life total and take a simultaneous turn. See rule 810, “Two-Headed Giant Variant.”

Type
1. An object’s card type or, more broadly, its card type, subtype, and/or supertype. See rule 205, “Type Line,” and section 3, “Card Types.”
2. An attribute mana has. See rule 106, “Mana.”

Type Icon
An icon that appears in the upper left of some Future Sight cards that has no effect on game play. See rule 107.10.

Type Line
Part of a card. The type line is printed directly below the illustration and contains the card’s card type(s), subtype(s), and/or supertype(s). See rule 205, “Type Line.”

Type-Changing Effect
An effect that changes an object’s card type, subtype, and/or supertype. See rules 205.1a–b, 305.7, and 613.1d.

Typecycling
A variant of the cycling ability. See rule 702.29, “Cycling.”

Unattach
To move an Equipment away from the creature it’s attached to so that the Equipment is on the battlefield but is not equipping anything. See rule 701.3d.

Unblockable (Obsolete)
A term that meant “can’t be blocked.” Cards that used this term have received errata in the Oracle card reference.

Unblocked Creature
An attacking creature once no creature has been declared as a blocker for it, unless an effect has caused it to become blocked. It remains an unblocked creature until it’s removed from combat or the combat phase ends, whichever comes first. See rule 509, “Declare Blockers Step.”

Undaunted
A keyword ability that reduces the cost of a spell based on the number of opponents you have. See rule 702.125, “Undaunted.”

Undying
A keyword ability that can return a creature from the graveyard to the battlefield. See rule 702.93, “Undying.”

Unearth
A keyword ability that lets a player return a creature card from their graveyard to the battlefield. See rule 702.84, “Unearth.”

Unflipped
A default status a permanent may have. See rule 110.5 and rule 709, “Flip Cards.” See also Flipped.

Unleash
A keyword ability that allows a creature to enter the battlefield with a +1/+1 counter on it and stops it from blocking if it has a +1/+1 counter on it. See rule 702.98, “Unleash.”

Unless
A word used to indicate a certain style of cost. See rule 118.12a.

Untap
To rotate a permanent back to the upright position from a sideways position. See rule 701.21, “Tap and Untap.”

Untap Step
Part of the turn. This step is the first step of the beginning phase. See rule 502, “Untap Step.”

Untap Symbol
The untap symbol {Q} in an activation cost means “Untap this permanent.” See rule 107.6.

Untapped
A default status a permanent may have. See rule 110.5 and rule 701.21, “Tap and Untap.” See also Tapped.

Upkeep Step
Part of the turn. This step is the second step of the beginning phase. See rule 503, “Upkeep Step.”

Vancouver Mulligan
Informal term for a previous system of taking a mulligan. Using the Vancouver mulligan, a player who took a mulligan shuffled their hand into their library and drew one fewer card. After choosing to not mulligan, a player who took a mulligan looked at the top card of their library and could put it on the bottom of their library. For current mulligan rules, see rule 103.4.

Vanguard
1. A casual variant in which each player plays the role of a famous character. See rule 902, “Vanguard.”
2. A card type seen only on nontraditional Magic cards in the Vanguard casual variant. A vanguard card is not a permanent. See rule 311, “Vanguards.”

Vanishing
A keyword ability that limits how long a permanent remains on the battlefield. See rule 702.63, “Vanishing.”

Variant
An additional set of rules that determines the style of a multiplayer game. See rule 800.2.

Vehicle
An artifact subtype. Vehicles can become artifact creatures. See rule 301, “Artifacts,” and rule 702.122, “Crew.”

Vigilance
A keyword ability that lets a creature attack without tapping. See rule 702.20, “Vigilance.”

Vote
Some cards instruct players to vote from among given options. See rule 701.32, “Vote.”

Walker Token
A Walker token is a 2/2 black Zombie creature token named Walker. For more information on predefined tokens, see rule 111.10.

Wall
A creature type with no particular rules meaning. Older cards with the Wall creature type but without defender had an unwritten ability that precluded them from attacking. Those cards have received errata in the Oracle card reference to have defender. Some older cards that referenced the Wall creature type have also received errata. See Defender.

Ward
A triggered ability that can counter spells or abilities that target the permanent with ward. See rule 702.21, “Ward.”

Win the Game
There are several ways to win the game. See rule 104, “Ending the Game,” and rules 810.8 (for additional rules for Two-Headed Giant games) and rule 809.5 (for additional rules for Emperor games).

Wither
A keyword ability that affects how an object deals damage to a creature. See rule 702.80, “Wither.”

Wizardcycling
See Typecycling.

World
A supertype that’s normally relevant on enchantments. See rule 205.4, “Supertypes.” See also World Rule.

World Rule
A state-based action that causes all permanents with the world supertype except the one that has had the world supertype for the shortest amount of time are put into their owners’ graveyards. See rule 704.5k.

X
A placeholder for a number that needs to be determined. See rule 107.3.

Y
See X.

You, Your
Words that refer to an object’s controller, its would-be controller (if a player is attempting to cast or activate it), or its owner (if it has no controller). See rule 109.5.

Zone
A place where objects can be during a game. See section 4, “Zones.”

Zone-Change Triggers
Trigger events that involve objects changing zones. See rule 603.6.


Credits

Magic: The Gathering Original Game Design: Richard Garfield
Comprehensive Rules Design and Development: Paul Barclay, Mark L. Gottlieb, Beth Moursund, Bill Rose, Eli Shiffrin, and Matt Tabak, with contributions from Charlie Cátinò, John Carter, Elaine Chase, Laurie Cheers, Stephen D’Angelo, Dave DeLaney, Brady Dommermuth, Mike Donais, Skaff Elias, Mike Elliott, Richard Garfield, Dan Gray, Robert Gutschera, Collin Jackson, William Jockusch, Jeff Jordan, Yonemura Kaoru, Russell Linnemann, Jim Lin, Steve Lord, Sheldon Menery, Michael Phoenix, Mark Rosewater, David Sachs, Lee Sharpe, Henry Stern, Donald X. Vaccarino, Thijs van Ommen, Ingo Warnke, Tom Wylie, and Bryan Zembruski
Editing: Del Laugel (lead), Gregg Luben, Nat Moes, Matt Tabak, Michael Zhang, and Hans Ziegler
Magic Rules Management: Jess Dunks, Eli Shiffrin, and Matt Tabak

The Magic: The Gathering game was designed by Richard Garfield, with contributions from Charlie Cátinò, Skaff Elias, Don Felice, Tom Fontaine, Jim Lin, Joel Mick, Chris Page, Dave Pettey, Barry “Bit” Reich, Bill Rose, and Elliott Segal. The mana symbols were designed by Christopher Rush.

Thanks to all our project team members and the many others too numerous to mention who have contributed to this product.












These rules are effective as of April 22, 2021.

Published by Wizards of the Coast LLC, PO Box 707, Renton, WA 98057-0707, USA. Wizards of the Coast, Magic: The Gathering, Magic, their respective logos, Mirrodin, Kamigawa, Lorwyn, Zendikar, Innistrad, Ravnica, Khans of Tarkir, Magic Origins, Magic: The Gathering—Conspiracy, Ixalan, Unglued, Unstable, Dominaria, Ikoria, Kaldheim, and Planeswalker Decks are trademarks of Wizards of the Coast LLC in the USA and other countries. ©2021 Wizards. U.S. Pat. No. RE 37,957.

`}  
               </p>
          </content> 
     )
}

export default Content