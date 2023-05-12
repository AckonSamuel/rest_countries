import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Card from '../components/Card';

it('renders correctly', () => {
    const countries = [
            {
                "name": {
                    "common": "Spain",
                    "official": "Kingdom of Spain",
                    "nativeName": {
                        "spa": {
                            "official": "Reino de España",
                            "common": "España"
                        }
                    }
                },
                "capital": [
                    "Madrid"
                ],
                "region": "Europe",
                "population": 47351567,
                "flags": {
                    "png": "https://flagcdn.com/w320/es.png",
                    "svg": "https://flagcdn.com/es.svg",
                    "alt": "The flag of Spain is composed of three horizontal bands of red, yellow and red, with the yellow band twice the height of the red bands. In the yellow band is the national coat of arms offset slightly towards the hoist side of center."
                },
            },
            {
                "name": {
                    "common": "Afghanistan",
                    "official": "Islamic Republic of Afghanistan",
                    "nativeName": {
                        "prs": {
                            "official": "جمهوری اسلامی افغانستان",
                            "common": "افغانستان"
                        },
                        "pus": {
                            "official": "د افغانستان اسلامي جمهوریت",
                            "common": "افغانستان"
                        },
                        "tuk": {
                            "official": "Owganystan Yslam Respublikasy",
                            "common": "Owganystan"
                        }
                    }
                },
                "capital": [
                    "Kabul"
                ],
                "region": "Asia",
                "population": 40218234,
                "flags": {
                    "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
                    "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
                    "alt": "The flag of the Islamic Emirate of Afghanistan has a white field with Arabic inscriptions — the Shahada — in black across its center."
                },
            },

        ];

  const filteredSearch = 'All';
  const searchText = '';

  const tree = renderer
    .create(
        <BrowserRouter>
      <Card countries={countries} filteredSearch={filteredSearch} searchText={searchText} />,
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
