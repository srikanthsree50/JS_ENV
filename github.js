class Github {
    async getUsers (user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`)
        const profile = await profileResponse.json();

        return {
profile
        }
        
    }
}