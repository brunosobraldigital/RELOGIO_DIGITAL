function updateTime() {
            const timeElement = document.getElementById('data');
            const now = new Date();
            const sema = now.getDay().toString().padStart(1, '0');
            const dia = now.getDate().toString().padStart(2, '0');
            const mes = now.getMonth().toString().padStart(1, '0');
            const ano = now.getFullYear().toString().padStart(2, '0');
            const semana = new Array(6); 
                    semana[0]='Domingo';
                    semana[1]='Segunda';
                    semana[2]='Terça';
                    semana[3]='Quarta';
                    semana[4]='Quinta';
                    semana[5]='Sexta';
                    semana[6]='Sábado';

            const meses = new Array(11);
                    meses[0]='Janeiro #01#';
                    meses[1]='Fevereiro #02#';
                    meses[2]='Março #03#';
                    meses[3]='Abril #04#';
                    meses[4]='Maio #05#';
                    meses[5]='Junho #06#';
                    meses[6]='Julho #07#';
                    meses[7]='Agosto #08#';
                    meses[8]='Setembro #09#';
                    meses[9]='Outubro #10#';
                    meses[10]='Novembro #11#';
                    meses[11]='Dezembro #12#';
            const dateString = `${semana[sema]} - ${dia} de ${meses[mes]} de ${ano}`;
            timeElement.textContent = dateString;
        }
        
        
        updateTime(); // Chama a função para exibir o tempo atual imediatamente