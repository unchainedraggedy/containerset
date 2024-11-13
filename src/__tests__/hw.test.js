import Team from '../hw'

test('create a team', () => {
    const team = new Team();
    expect(team).toBeInstanceOf(Team);
})

test('add a member in team', () => {
    const team = new Team();
    team.add("oleg")
    expect(team.members.has("oleg")).toBe(true)
})

test('checking adding same member', () => {
    const team = new Team();
    team.addAll(['oleg', 'oleg', 'oleg'])
    expect(team.members.size).toBe(1)
})

test('returning array of different members', () => {
    const team = new Team();
    team.addAll(['oleg', 'kseniya', 'sasha'])
    expect(team.toArray()).toEqual(['oleg', 'kseniya', 'sasha'])
})