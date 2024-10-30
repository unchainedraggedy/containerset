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