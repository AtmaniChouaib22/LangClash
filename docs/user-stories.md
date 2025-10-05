# LangClash MVP User Stories

## Epic 1: Authentication

### User Story 1.1: User Registration & Login

**As a** new user  
**I want** to create an account and log in  
**So that** I can play quiz games and track my progress

**Scenario 1: User registration**

```gherkin
Given I am on the registration page
When I enter a valid email and password
And I click "Register"
Then I should be logged in automatically
And I should be redirected to the dashboard
```

**Scenario 2: User login**

```gherkin
Given I have an existing account
And I am on the login page
When I enter my correct email and password
And I click "Login"
Then I should be logged in
And I should be redirected to the dashboard
```

**Scenario 3: Invalid login**

```gherkin
Given I am on the login page
When I enter incorrect credentials
And I click "Login"
Then I should see an error message
And I should remain on the login page
```

**Acceptance Criteria:**

- [ ] User can register with email and password via Supabase Auth
- [ ] User can log in with valid credentials
- [ ] User session persists across browser sessions
- [ ] User can log out
- [ ] Error messages shown for invalid inputs

---

## Epic 2: Quick Match

### User Story 2.1: Find Opponent

**As a** player  
**I want** to quickly find an opponent  
**So that** I can start playing immediately

**Scenario 1: Successful matchmaking**

```gherkin
Given I am logged in and on the dashboard
When I click "Quick Match"
Then I should enter the matchmaking queue
And I should see "Looking for opponent..." message
And I should be matched with another player within 30 seconds
And I should see "Opponent found! Game starting..."
```

**Scenario 2: No opponent found - Bot fallback**

```gherkin
Given I am in the matchmaking queue for 15 seconds
And no human opponent is available
When the timeout occurs
Then I should be matched with a bot
And I should see "Playing against AI opponent"
And the game should start normally
```

**Scenario 3: Cancel matchmaking**

```gherkin
Given I am in the matchmaking queue
When I click "Cancel"
Then I should exit the queue
And I should return to the dashboard
```

**Acceptance Criteria:**

- [ ] User can click "Quick Match" to find opponent
- [ ] Matchmaking shows waiting status
- [ ] User can cancel while waiting
- [ ] Bot opponent as fallback after 15 seconds
- [ ] Game starts automatically when match found

---

## Epic 3: Quiz Gameplay

### User Story 3.1: Play Quiz Game

**As a** player  
**I want** to answer quiz questions against my opponent  
**So that** I can test my knowledge and try to win

**Scenario 1: Answer question correctly**

```gherkin
Given I am in an active quiz game
And I see the question "What is 'hello' in Spanish?"
And the options are "Hola", "Bonjour", "Guten Tag", "Ciao"
When I click "Hola" within 15 seconds
Then I should see a green checkmark
And my score should increase by 100 points
And the next question should appear
```

**Scenario 2: Answer question incorrectly**

```gherkin
Given I am in an active quiz game
And I see a Spanish vocabulary question
When I select the wrong answer
Then I should see a red X mark
And I should see the correct answer highlighted
And my score should remain the same
And the next question should appear after 2 seconds
```

**Scenario 3: Time runs out**

```gherkin
Given I am viewing a quiz question
And the timer shows 15 seconds
When the timer reaches 0
And I haven't selected an answer
Then the question should be marked as incorrect
And I should see the correct answer
And the game should move to the next question
```

**Scenario 4: Complete game**

```gherkin
Given I am on question 5 of 5
When I answer the final question
Then I should see "Game Complete!" message
And I should be redirected to the results page
```

**Acceptance Criteria:**

- [ ] Game has exactly 5 multiple choice questions
- [ ] Each question has 4 options with 1 correct answer
- [ ] 15 seconds timer per question
- [ ] 100 points for correct answers
- [ ] Visual feedback for correct/incorrect answers
- [ ] Automatic progression to next question
- [ ] Real-time score updates

### User Story 3.2: See Opponent Progress

**As a** player  
**I want** to see my opponent's progress  
**So that** I know how I'm doing compared to them

**Scenario 1: Real-time opponent updates**

```gherkin
Given I am in an active quiz game
And both players are on question 2
When my opponent answers their question
Then I should see their score update immediately
And I should see they moved to question 3
And I should see their current question number
```

**Scenario 2: Score comparison**

```gherkin
Given I am in an active quiz game
And my current score is 200 points
And my opponent's score is 300 points
When I look at the scoreboard
Then I should see "You: 200" and "Opponent: 300"
And I should see that I'm behind
```

**Acceptance Criteria:**

- [ ] Live scoreboard showing both players' scores
- [ ] Real-time updates when opponent answers
- [ ] Current question number for both players
- [ ] Visual indication of who's ahead

---

## Epic 4: Game Results

### User Story 4.1: View Game Results

**As a** player  
**I want** to see the final results after a game  
**So that** I know who won and how I performed

**Scenario 1: Win the game**

```gherkin
Given the quiz game has ended
And my final score is 400 points
And my opponent's final score is 300 points
When I am on the results page
Then I should see "You Won!" message
And I should see "Your Score: 400"
And I should see "Opponent Score: 300"
And I should see a breakdown of my answers (3/5 correct)
```

**Scenario 2: Lose the game**

```gherkin
Given the quiz game has ended
And my final score is 200 points
And my opponent's final score is 400 points
When I am on the results page
Then I should see "You Lost!" message
And I should see both final scores
And I should see my performance summary
```

**Scenario 3: Tie game**

```gherkin
Given the quiz game has ended
And both players have 300 points
When I am on the results page
Then I should see "It's a Tie!" message
And I should see both scores are equal
```

**Scenario 4: Return to dashboard**

```gherkin
Given I am viewing game results
When I click "Play Again"
Then I should return to the dashboard
And I should be able to start a new quick match
```

**Acceptance Criteria:**

- [ ] Clear winner/loser/tie announcement
- [ ] Both players' final scores displayed
- [ ] Summary of correct/incorrect answers
- [ ] Questions breakdown (which ones were right/wrong)
- [ ] "Play Again" button to return to dashboard

---

## Technical Requirements (MVP)

### Core Features

- [ ] Supabase Auth for user authentication
- [ ] Socket.IO for real-time game communication
- [ ] PostgreSQL database for questions and user data
- [ ] Simple question bank with Spanish/English questions

### Performance

- [ ] Game loads in under 5 seconds
- [ ] Real-time updates under 200ms latency
- [ ] Support for 20+ concurrent players

### Game Logic

- [ ] 5 questions per game
- [ ] 15 seconds per question
- [ ] 100 points per correct answer
- [ ] No penalty for wrong answers
- [ ] Bot opponent fallback system

### UI/UX

- [ ] Simple, clean interface
- [ ] Mobile responsive design
- [ ] Clear visual feedback for answers
- [ ] Timer countdown display
- [ ] Score display

---

## MVP Definition of Done

For the MVP to be complete:

- [ ] User can register and login
- [ ] User can find opponent (human or bot)
- [ ] User can play 5-question quiz
- [ ] User can see real-time opponent progress
- [ ] User can view final results
- [ ] All features work on mobile and desktop
- [ ] Basic error handling implemented
- [ ] Game state persists during connection issues
