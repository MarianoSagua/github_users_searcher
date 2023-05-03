export const getUsers = async (user)=>{
    try {
        const URL = `https://api.github.com/users/${user}`;
        const response = await fetch(URL);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.log(error);
    }
}