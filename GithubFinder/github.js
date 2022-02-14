class Github {

constructor(){
    this.reposCount = 5;
    this.reposSort = 'created:asc'
}

    async getUsers (user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}`)
     
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
profile ,
repos
        }
        
    }
}