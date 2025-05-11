 

export function redirectByRole(): string{ 
    const loggedData =  localStorage.getItem("role");
    if(loggedData =='admin') {
        return 'life-cycle';
    } else {
       return 'view-encap';
    }
}