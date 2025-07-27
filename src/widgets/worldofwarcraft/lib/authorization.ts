export interface characterData {
  id: number;
  name: string;
  race: string;
  level: number;
  class: string
  specialization: string;
  faction: string;
  gender: string;
}

export interface realmData {
  id: number;
  name: string;
  status: string;
}

export async function getAuthToken(): Promise<string> {
  try {
    const response = await fetch('https://us.battle.net/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${import.meta.env.VITE_BLIZZZARD_CLIENT_ID}:${import.meta.env.VITE_BLIZZARD_CLIENT_SECRET}`)}`
      },
      body: new URLSearchParams({
        'grant_type': 'client_credentials'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch auth token');
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error fetching auth token:', error);
    throw error;
  }

}


export async function fetchCharacterData(characterName: string, realm: string): Promise<characterData> {
  try {
    const accessToken = await getAuthToken();

    const response = await fetch(`https://us.api.blizzard.com/profile/wow/character/${realm}/${characterName}?namespace=profile-us&locale=en_US`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch character list');
    }

    const data = await response.json();

    const character: characterData = {
      id: Math.random(), // Using a random ID for now, as the API does not provide an ID in this endpoint
      name: data.name,
      race: data.race.name,
      level: data.level,
      class: data.character_class.name,
      specialization: data.active_spec.name,
      faction: data.faction.name,
      gender: data.gender.name
    };

    return character;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error fetching character data for ${characterName} on realm ${realm}: ${err.message}`);
    } else {
      throw new Error(`Error fetching character data for ${characterName} on realm ${realm}: ${String(err)}`);
    }
  }
}

export async function getWowRealmStatus(): Promise<realmData> {
  try {
    const accessToken = await getAuthToken();

    const response = await fetch('https://us.api.blizzard.com/data/wow/connected-realm/1185?namespace=dynamic-us&locale=en_US', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch realm status');
    }

    const data = await response.json();

    if (!data) {
      throw new Error('No data received from the API');
    }

    const realmStatus = { id: Math.random(), name: data.realms[0].name, status: data.status.name };

    return realmStatus;

  } catch (error) {
    console.error('Error fetching realm status:', error);
    throw error;
  }
}
