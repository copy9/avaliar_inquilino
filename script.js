document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');

    // Animação suave para seções na página inicial
    if (document.querySelector('.section')) {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            setTimeout(() => {
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Alerta no link de contato
    const contatoLink = document.querySelector('a[href="contato.html"]');
    if (contatoLink) {
        contatoLink.addEventListener('click', (e) => {
            window.location.href = 'contato.html';
        });
    }

    // Validação do formulário de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            alert('Login realizado com sucesso! Redirecionando para o dashboard...');
            window.location.href = 'dashboard.html';
        });
    }

    // Validação do formulário de cadastro
    const cadastroForm = document.getElementById('cadastro-form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (!nome || !email || !password || !confirmPassword) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            if (password !== confirmPassword) {
                alert('As senhas não coincidem.');
                return;
            }
            alert('Cadastro realizado com sucesso! Redirecionando para o login...');
            window.location.href = 'login.html';
        });
    }

    // Lógica do Dashboard
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Deseja sair da sua conta?')) {
                alert('Logout realizado com sucesso!');
                window.location.href = 'login.html';
            }
        });
    }

    const editProfileBtn = document.querySelector('.btn-edit');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            alert('Funcionalidade de edição de perfil em desenvolvimento!');
        });
    }

    // Simulação de banco de dados de inquilinos
    let inquilinosDB = [
        {
            id: 1,
            nome: 'Maria Oliveira',
            cpf: '123.456.789-00',
            bomPagador: 90,
            higiene: 85,
            convivênciaVizinhos: 80,
            contasAtrasadas: 5,
            numeroAvaliacoes: 12,
            pagamentosEmDia: 95,
            danosImovel: 2,
            pontuacaoGeral: 87,
            data: '01/03/2025',
            comentario: 'Inquilina responsável, sempre mantém o imóvel em bom estado.',
            tipoAvaliacao: 'Positiva',
            fotos: [
                { url: 'https://via.placeholder.com/150?text=Melhorias+1', legenda: 'Pintura nova na sala' },
                { url: 'https://via.placeholder.com/150?text=Melhorias+2', legenda: 'Jardim bem cuidado' }
            ]
        },
        {
            id: 2,
            nome: 'Pedro Santos',
            cpf: '987.654.321-00',
            bomPagador: 60,
            higiene: 70,
            convivênciaVizinhos: 50,
            contasAtrasadas: 15,
            numeroAvaliacoes: 8,
            pagamentosEmDia: 65,
            danosImovel: 5,
            pontuacaoGeral: 62,
            data: '15/02/2025',
            comentario: 'Teve problemas com vizinhos e atrasos frequentes no pagamento.',
            tipoAvaliacao: 'Negativa',
            fotos: [
                { url: 'https://via.placeholder.com/150?text=Dano+1', legenda: 'Parede riscada' },
                { url: 'https://via.placeholder.com/150?text=Dano+2', legenda: 'Porta quebrada' }
            ]
        }
    ];

    // Função de análise de inquilino
    const analisarForm = document.getElementById('analisar-form');
    if (analisarForm) {
        analisarForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('inquilino-nome').value.trim();
            const cpf = document.getElementById('inquilino-cpf').value.trim();
            const resultadoDiv = document.getElementById('analise-resultado');
            const detalhesDiv = document.getElementById('resultado-detalhes');

            if (!nome || !cpf) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            const inquilino = inquilinosDB.find(
                (inq) => inq.nome.toLowerCase() === nome.toLowerCase() && inq.cpf === cpf
            );

            if (!inquilino) {
                detalhesDiv.innerHTML = '<p>Inquilino não encontrado na base de dados.</p>';
                resultadoDiv.style.display = 'block';
                return;
            }

            detalhesDiv.innerHTML = `
                <p><strong>Nome:</strong> <span>${inquilino.nome}</span></p>
                <p><strong>CPF:</strong> <span>${inquilino.cpf}</span></p>
                <p><strong>Bom Pagador:</strong> <span>${inquilino.bomPagador}%</span></p>
                <p><strong>Higiene:</strong> <span>${inquilino.higiene}%</span></p>
                <p><strong>Convivência com Vizinhos:</strong> <span>${inquilino.convivenviaVizinhos}%</span></p>
                <p><strong>Contas Atrasadas:</strong> <span>${inquilino.contasAtrasadas}</span></p>
                <p><strong>Número de Avaliações:</strong> <span>${inquilino.numeroAvaliacoes}</span></p>
                <p><strong>Pagamentos em Dia:</strong> <span>${inquilino.pagamentosEmDia}%</span></p>
                <p><strong>Danos ao Imóvel:</strong> <span>${inquilino.danosImovel}</span></p>
                <p><strong>Pontuação Geral:</strong> <span>${inquilino.pontuacaoGeral}%</span></p>
            `;
            resultadoDiv.style.display = 'block';
        });
    }

    // Exibir detalhes da avaliação no modal
    const viewButtons = document.querySelectorAll('.btn-view');
    const modal = document.getElementById('avaliacao-modal');
    const modalClose = document.querySelector('#avaliacao-modal .modal-close');
    const detalhesDiv = document.getElementById('avaliacao-detalhes');

    viewButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const id = row.getAttribute('data-id');
            const inquilino = inquilinosDB.find((inq) => inq.id == id);

            if (inquilino) {
                const fotosHTML = inquilino.fotos.map(
                    (foto) => `
                        <div class="foto-item">
                            <img src="${foto.url}" alt="${foto.legenda}">
                            <p>${foto.legenda}</p>
                        </div>
                    `
                ).join('');

                detalhesDiv.innerHTML = `
                    <div class="detalhes-grid">
                        <p><strong>Nome:</strong> <span>${inquilino.nome}</span></p>
                        <p><strong>CPF:</strong> <span>${inquilino.cpf}</span></p>
                        <p><strong>Data:</strong> <span>${inquilino.data}</span></p>
                        <p><strong>Tipo:</strong> <span>${inquilino.tipoAvaliacao}</span></p>
                        <p><strong>Bom Pagador:</strong> <span>${inquilino.bomPagador}%</span></p>
                        <p><strong>Higiene:</strong> <span>${inquilino.higiene}%</span></p>
                        <p><strong>Convivência:</strong> <span>${inquilino.convivenviaVizinhos}%</span></p>
                        <p><strong>Contas Atrasadas:</strong> <span>${inquilino.contasAtrasadas}</span></p>
                        <p><strong>Pagamentos em Dia:</strong> <span>${inquilino.pagamentosEmDia}%</span></p>
                        <p><strong>Danos ao Imóvel:</strong> <span>${inquilino.danosImovel}</span></p>
                        <p><strong>Pontuação Geral:</strong> <span>${inquilino.pontuacaoGeral}%</span></p>
                    </div>
                    <p class="comentario"><strong>Comentário:</strong> <span>${inquilino.comentario}</span></p>
                    <div class="fotos-section">
                        <h3>${inquilino.tipoAvaliacao === 'Positiva' ? 'Fotos de Melhorias' : 'Fotos de Danos'}</h3>
                        <div class="fotos-grid">${fotosHTML}</div>
                    </div>
                `;
                modal.style.display = 'flex';
            }
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Validação do formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }

    // Lógica do Formulário de Avaliação
    const avaliarModal = document.getElementById('avaliar-modal');
    const openAvaliarBtn = document.getElementById('open-avaliar-modal');
    const closeAvaliarModal = document.getElementById('close-avaliar-modal');
    const avaliarForm = document.getElementById('avaliar-form');
    const fotosInput = document.getElementById('avaliar-fotos');
    const fotosPreview = document.getElementById('fotos-preview');
    const historicoTbody = document.getElementById('historico-tbody');

    // Abrir o modal de avaliação
    if (openAvaliarBtn) {
        openAvaliarBtn.addEventListener('click', () => {
            avaliarModal.style.display = 'flex';
            iniciarEstrelas();
        });
    }

    // Fechar o modal de avaliação
    if (closeAvaliarModal) {
        closeAvaliarModal.addEventListener('click', () => {
            avaliarModal.style.display = 'none';
            avaliarForm.reset();
            fotosPreview.innerHTML = '';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === avaliarModal) {
            avaliarModal.style.display = 'none';
            avaliarForm.reset();
            fotosPreview.innerHTML = '';
        }
    });

    // Sistema de estrelas
    function iniciarEstrelas() {
        const estrelasContainers = document.querySelectorAll('.estrelas');
        estrelasContainers.forEach((container) => {
            container.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                const estrela = document.createElement('span');
                estrela.classList.add('estrela');
                estrela.innerHTML = '★';
                estrela.dataset.valor = i + 1;
                estrela.addEventListener('click', () => {
                    const valor = parseInt(estrela.dataset.valor);
                    container.querySelectorAll('.estrela').forEach((e, index) => {
                        e.classList.toggle('ativa', index < valor);
                    });
                    container.dataset.valor = valor;
                });
                container.appendChild(estrela);
            }
        });
    }

    // Preview de fotos
    if (fotosInput) {
        fotosInput.addEventListener('change', () => {
            fotosPreview.innerHTML = '';
            const files = fotosInput.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    const fotoItem = document.createElement('div');
                    fotoItem.classList.add('foto-item');
                    fotoItem.appendChild(img);
                    fotosPreview.appendChild(fotoItem);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Enviar avaliação
    if (avaliarForm) {
        avaliarForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('avaliar-nome').value.trim();
            const cpf = document.getElementById('avaliar-cpf').value.trim();
            const comentario = document.getElementById('avaliar-comentario').value.trim();
            const fotos = fotosInput.files;

            const estrelas = {
                bomPagador: parseInt(document.querySelector('.estrelas[data-campo="bomPagador"]').dataset.valor || 0) * 20,
                higiene: parseInt(document.querySelector('.estrelas[data-campo="higiene"]').dataset.valor || 0) * 20,
                convivênciaVizinhos: parseInt(document.querySelector('.estrelas[data-campo="convivênciaVizinhos"]').dataset.valor || 0) * 20,
                pagamentosEmDia: parseInt(document.querySelector('.estrelas[data-campo="pagamentosEmDia"]').dataset.valor || 0) * 20,
                danosImovel: parseInt(document.querySelector('.estrelas[data-campo="danosImovel"]').dataset.valor || 0)
            };

            if (!nome || !cpf || !comentario || !estrelas.bomPagador) {
                alert('Por favor, preencha todos os campos obrigatórios e avalie pelo menos "Bom Pagador".');
                return;
            }

            const pontuacaoGeral = Math.round(
                (estrelas.bomPagador + estrelas.higiene + estrelas.convivenviaVizinhos + estrelas.pagamentosEmDia) / 4
            );
            const tipoAvaliacao = pontuacaoGeral >= 60 ? 'Positiva' : 'Negativa';
            const data = new Date().toLocaleDateString('pt-BR');
            const contasAtrasadas = estrelas.pagamentosEmDia < 80 ? Math.floor((100 - estrelas.pagamentosEmDia) / 10) : 0;

            const fotosArray = [];
            for (let i = 0; i < fotos.length; i++) {
                fotosArray.push({
                    url: URL.createObjectURL(fotos[i]),
                    legenda: `${tipoAvaliacao === 'Positiva' ? 'Melhoria' : 'Dano'} ${i + 1}`
                });
            }

            const novaAvaliacao = {
                id: inquilinosDB.length + 1,
                nome,
                cpf,
                bomPagador: estrelas.bomPagador,
                higiene: estrelas.higiene,
                convivênciaVizinhos: estrelas.convivenviaVizinhos,
                contasAtrasadas,
                numeroAvaliacoes: 1,
                pagamentosEmDia: estrelas.pagamentosEmDia,
                danosImovel: estrelas.danosImovel,
                pontuacaoGeral,
                data,
                comentario,
                tipoAvaliacao,
                fotos: fotosArray
            };

            inquilinosDB.push(novaAvaliacao);

            // Atualizar histórico
            const novaLinha = document.createElement('tr');
            novaLinha.setAttribute('data-id', novaAvaliacao.id);
            novaLinha.innerHTML = `
                <td>${nome}</td>
                <td>${data}</td>
                <td>${tipoAvaliacao}</td>
                <td><button class="btn-view">Ver Detalhes</button></td>
            `;
            historicoTbody.appendChild(novaLinha);

            // Reassociar eventos aos novos botões "Ver Detalhes"
            novaLinha.querySelector('.btn-view').addEventListener('click', () => {
                const id = novaLinha.getAttribute('data-id');
                const inquilino = inquilinosDB.find((inq) => inq.id == id);
                const fotosHTML = inquilino.fotos.map(
                    (foto) => `
                        <div class="foto-item">
                            <img src="${foto.url}" alt="${foto.legenda}">
                            <p>${foto.legenda}</p>
                        </div>
                    `
                ).join('');

                detalhesDiv.innerHTML = `
                    <div class="detalhes-grid">
                        <p><strong>Nome:</strong> <span>${inquilino.nome}</span></p>
                        <p><strong>CPF:</strong> <span>${inquilino.cpf}</span></p>
                        <p><strong>Data:</strong> <span>${inquilino.data}</span></p>
                        <p><strong>Tipo:</strong> <span>${inquilino.tipoAvaliacao}</span></p>
                        <p><strong>Bom Pagador:</strong> <span>${inquilino.bomPagador}%</span></p>
                        <p><strong>Higiene:</strong> <span>${inquilino.higiene}%</span></p>
                        <p><strong>Convivência:</strong> <span>${inquilino.convivenviaVizinhos}%</span></p>
                        <p><strong>Contas Atrasadas:</strong> <span>${inquilino.contasAtrasadas}</span></p>
                        <p><strong>Pagamentos em Dia:</strong> <span>${inquilino.pagamentosEmDia}%</span></p>
                        <p><strong>Danos ao Imóvel:</strong> <span>${inquilino.danosImovel}</span></p>
                        <p><strong>Pontuação Geral:</strong> <span>${inquilino.pontuacaoGeral}%</span></p>
                    </div>
                    <p class="comentario"><strong>Comentário:</strong> <span>${inquilino.comentario}</span></p>
                    <div class="fotos-section">
                        <h3>${inquilino.tipoAvaliacao === 'Positiva' ? 'Fotos de Melhorias' : 'Fotos de Danos'}</h3>
                        <div class="fotos-grid">${fotosHTML}</div>
                    </div>
                `;
                modal.style.display = 'flex';
            });

            alert('Avaliação enviada com sucesso!');
            avaliarModal.style.display = 'none';
            avaliarForm.reset();
            fotosPreview.innerHTML = '';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (código existente permanece intacto)

    // Lógica da Calculadora de Economia Melhorada
    const calcularForm = document.getElementById('calcular-form');
    if (calcularForm) {
        calcularForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const valorAluguel = parseFloat(document.getElementById('valor-aluguel').value);
            const mesesLocacao = parseInt(document.getElementById('meses-locacao').value);
            const perfilInquilino = document.getElementById('inquilino-perfil').value;
            const resultadoDiv = document.getElementById('resultado-calculo');
            const detalhesDiv = document.getElementById('calculo-detalhes');

            if (!valorAluguel || !mesesLocacao || !perfilInquilino) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // Dados baseados nos inquilinos do banco fictício
            const inquilinoBom = {
                bomPagador: 90,
                pagamentosEmDia: 95,
                contasAtrasadas: 5,
                danosImovel: 2,
                convivênciaVizinhos: 80
            };
            const inquilinoMau = {
                bomPagador: 60,
                pagamentosEmDia: 65,
                contasAtrasadas: 15,
                danosImovel: 5,
                convivênciaVizinhos: 50
            };

            // Cálculo aprimorado
            const aluguelTotal = valorAluguel * mesesLocacao;
            const perfil = perfilInquilino === 'mau' ? inquilinoMau : inquilinoBom;

            // Inadimplência
            const inadimplenciaPercent = (100 - perfil.pagamentosEmDia) / 100;
            const perdaInadimplencia = aluguelTotal * inadimplenciaPercent;

            // Danos ao imóvel (R$500 por ponto + variação por gravidade)
            const custoDanoBase = 500;
            const perdaDanos = perfil.danosImovel * custoDanoBase * (perfil.danosImovel > 3 ? 1.5 : 1);

            // Custos extras (multas/processos por convivência baixa)
            const custoConvivencia = perfil.convivenviaVizinhos < 60 ? (mesesLocacao * 200) : 0; // R$200/mês se convivência < 60%

            // Prejuízo total
            const prejuizoTotal = perdaInadimplencia + perdaDanos + custoConvivencia;

            // Economia (comparação com o mau inquilino)
            let economia = 0;
            let mensagemExtra = '';
            if (perfilInquilino === 'mau') {
                const prejuizoBom = (aluguelTotal * (100 - inquilinoBom.pagamentosEmDia) / 100) + 
                                   (inquilinoBom.danosImovel * custoDanoBase) + 
                                   (inquilinoBom.convivenviaVizinhos < 60 ? (mesesLocacao * 200) : 0);
                economia = prejuizoTotal - prejuizoBom;
                mensagemExtra = `<p class="highlight">VOCÊ ECONOMIZOU R$ ${economia.toFixed(2)} ao evitar este inquilino com nossa plataforma!</p>`;
            } else {
                mensagemExtra = `<p class="highlight">Com um bom inquilino, seu prejuízo é mínimo. Use nossa plataforma para garantir isso sempre!</p>`;
            }

            // Exibir resultado
            detalhesDiv.innerHTML = `
                <p><strong>Aluguel Total Previsto:</strong> R$ ${aluguelTotal.toFixed(2)}</p>
                <p><strong>Perda por Inadimplência:</strong> R$ ${perdaInadimplencia.toFixed(2)} (${(inadimplenciaPercent * 100).toFixed(1)}%)</p>
                <p><strong>Perda por Danos ao Imóvel:</strong> R$ ${perdaDanos.toFixed(2)} (${perfil.danosImovel} incidentes)</p>
                <p><strong>Custos Extras (Convivência):</strong> R$ ${custoConvivencia.toFixed(2)}</p>
                <p><strong>Prejuízo Total Estimado:</strong> R$ ${prejuizoTotal.toFixed(2)}</p>
                ${mensagemExtra}
            `;
            resultadoDiv.style.display = 'block';
            resultadoDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Atualizar resumo do pedido dinamicamente
document.addEventListener('DOMContentLoaded', () => {
    const planSelect = document.getElementById('plan');
    const paymentMethod = document.getElementById('payment-method');
    const creditCardFields = document.getElementById('credit-card-fields');
    const selectedPlan = document.getElementById('selected-plan');
    const totalAmount = document.getElementById('total-amount');

    const plans = {
        'individual': { name: 'Pesquisa Individual', price: 20.00 },
        'basico-mensal': { name: 'Básico Mensal (10 pesquisas)', price: 150.00 },
        'intermediario-mensal': { name: 'Intermediário Mensal (25 pesquisas)', price: 300.00 },
        'avancado-mensal': { name: 'Avançado Mensal (50 pesquisas)', price: 500.00 },
        'basico-anual': { name: 'Básico Anual (120 pesquisas)', price: 1350.00 },
        'intermediario-anual': { name: 'Intermediário Anual (300 pesquisas)', price: 2700.00 },
        'avancado-anual': { name: 'Avançado Anual (600 pesquisas)', price: 4500.00 },
        '2000-pesquisas': { name: '2.000 Pesquisas', price: 16000.00 },
        '5000-pesquisas': { name: '5.000 Pesquisas', price: 35000.00 },
        'ilimitado': { name: 'Ilimitado (12 meses)', price: 50000.00 }
    };

    // Atualizar resumo ao mudar plano
    planSelect.addEventListener('change', () => {
        const selectedValue = planSelect.value;
        if (plans[selectedValue]) {
            selectedPlan.textContent = plans[selectedValue].name;
            totalAmount.textContent = `R$ ${plans[selectedValue].price.toFixed(2).replace('.', ',')}`;
        } else {
            selectedPlan.textContent = 'Nenhum plano selecionado';
            totalAmount.textContent = 'R$ 0,00';
        }
    });

    // Mostrar/esconder campos do cartão de crédito
    paymentMethod.addEventListener('change', () => {
        if (paymentMethod.value === 'credit-card') {
            creditCardFields.style.display = 'block';
        } else {
            creditCardFields.style.display = 'none';
        }
    });

    // Prevenir envio padrão e simular confirmação
    document.getElementById('payment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Pagamento confirmado! Você será redirecionado em breve.');
        // Aqui você integraria com uma API de pagamento real (ex.: Stripe, PagSeguro)
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Verificação de Conta Recolhível
    const toggleButton = document.getElementById('toggle-verification');
    const verificationContent = document.getElementById('verification-content');
    const verificationStatus = document.getElementById('verification-status');
    const verificationForm = document.getElementById('verification-form');

    let isVerified = verificationStatus.textContent === 'Verificado';
    if (isVerified) {
        verificationContent.classList.add('collapsed');
        toggleButton.textContent = '+';
    } else {
        verificationContent.classList.remove('collapsed');
        toggleButton.textContent = '−';
    }

    toggleButton.addEventListener('click', () => {
        verificationContent.classList.toggle('collapsed');
        toggleButton.textContent = verificationContent.classList.contains('collapsed') ? '+' : '−';
    });

    verificationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Documentos enviados para verificação! Aguarde aprovação.');
        verificationStatus.textContent = 'Em Análise';
        verificationStatus.style.color = '#f39c12';
    });

    // Simulação de Notificações
    const notificationCount = document.getElementById('notification-count');
    let notifications = 2;
    notificationCount.textContent = notifications;

    document.getElementById('notifications').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Avisos da plataforma:\n1. Complete sua verificação de conta.\n2. Novo plano disponível!');
    });

    // Lógica existente do dashboard (modais, etc.) continua aqui...
});

