/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};

    resData.data = {
      "Gemüseabteilung": {
        "Zwiebeln": "3x",
        "Rote Zwieben": "2x",
        "Knoblauch": "1 Zehe",
        "Paprika": "4x",
        "Limette": "1x",
        "Avocados": "2x",
        "Tomaten": "1x",
        "Petersilie": "1 EL",
      },
      "Dosenabteilung": {
        "Kidneybohnen": "950g",
        "Eingelegtes, scharfes (Pepperoni, Chilli, Reinholz-Aktion)": "1x",
        "ÖL": "124ml"
      },
      "Zwischengang": {
        "Milch 3.5%": "1L",
        "Mehl": "1KG",
        "Panko": "250g",
        "Instant-Hefe": "1 Packung"
      },
      "Kalte Abteilung": {
        "Eier": "6x",
        "Cheddar": "1 Packung"
      },
      "Getränke Abteilung": "OHL"
    };
    
    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
}