const conexao = (): boolean => {
    //inserir o intuito da função
    return true;
}

export const login = (email: string, password: string): boolean => {
    if(conexao()){
        return true;
    }
    return false;
}
