# cicd-projeto

## Testes
- Configuração do pipeline, funcionamento correto por meio do Actions.
- Alteração proposital em um teste para demonstrar a falha:
```
expect(response.body).toEqual({
    status: "online"
});
```
Mudança de status em app.test.js de "online" para "offline". 
