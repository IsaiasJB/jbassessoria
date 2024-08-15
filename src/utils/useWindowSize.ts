import {useEffect, useState} from "react";

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

export function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Função para atualizar o tamanho da janela
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Adiciona o event listener para monitorar o resize
        window.addEventListener('resize', handleResize);

        // Chama a função pela primeira vez para setar o tamanho inicial
        handleResize();

        // Remove o event listener ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}