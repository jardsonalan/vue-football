import { ref } from "vue";
import axios from "axios";

interface Video {
  readonly id: number;
  title: string;
  embed: string;
}

interface Partida {
  title: string;
  competition: string;
  matchviewUrl: string;
  competitionUrl: string;
  thumbnail: string;
  date: string;
  videos: Video[];
}

interface ApiResponse {
  response: Partida[];
}

// Token da Aplicação
const token = 'MTk4MDEzXzE3MzkyMDY1MzVfYTc2NzI2NmYxM2I4ZDI5OGM5ZTQyOGI0MjMzZDFiOTRiODU5YjMzOA==';

// Listas de Objetos com os atributos da API
export const partidas = ref<Partida[]>([]);
export const videos = ref<Video[]>([]);

// Função para buscar as últimas publicações do Feed
export async function getFeed() {
  await axios.get<ApiResponse>(`https://www.scorebat.com/video-api/v3/feed/?token=${token}`)
  .then(response => {
    const data = response.data;

    data.response.forEach((partida: Partida) => {
      partidas.value.push(partida);

      partida.videos.forEach((video: Video) => {
        videos.value.push(video);
      })
    })
  })
  .catch(error => {
    console.error('Erro ao consumir os dados: ', error);
  })
}
