import "./GenreForm.css";

import { useState, useEffect } from "react";

import GenreService from "../../../api/services/GenreService";
import { Genre, GenreBody } from "../../../api/types/genre";
import { GenreForm as IGenreForm, GenreFormProps } from "./types";

const GenreForm = ({
  emptyGenre,
  genreFormState,
  setGenreFormState,
  getAllGenres,
  closeGenreForm,
}: GenreFormProps) => {
  // 📌 default input values

  const [defaultInputValues, setDefaultInputValues] = useState<IGenreForm>({
    name: "",
  });

  useEffect(() => {
    setDefaultInputValues({ name: genreFormState.name });
  }, [genreFormState]);

  const getNameInput = () => defaultInputValues.name;

  // 📌 handleChange

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setGenreFormState({ ...genreFormState, [name]: e.target.value });
  };

  // 📌 handleKeyPress

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitGenreForm();
    }
  };

  // 📌 submitGenreForm

  const submitGenreForm = async () => {
    const { id, name } = genreFormState;

    const genreBody: GenreBody = { name: name };

    id
      ? await GenreService.update(id, genreBody)
      : await GenreService.create(genreBody);

    setGenreFormState(emptyGenre);
    closeGenreForm();
    getAllGenres();
  };

  // 📌📌📌🚨 GenreForm return

  return (
    <>
      <section className="admin-section admin-genres-container">
        <div className="admin-section-header">
          <div className="admin-header-wrapper">
            <h2>genres</h2>

            <div className="admin-header-icon-wrapper">
              <div
                className="admin-header-icon clickable"
                onClick={() => closeGenreForm()}
              >
                <i className="bi bi-x-lg"></i>
              </div>
            </div>
          </div>
        </div>
        <form className="genre-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="genre"
            required
            defaultValue={getNameInput()}
            placeholder="genre"
            autoComplete="off"
            autoFocus={true}
            onChange={(e) => handleChange(e, "name")}
            onKeyUp={(e) => handleKeyPress(e)}
          />

          <div
            className="admin-header-icon clickable"
            onClick={() => submitGenreForm()}
          >
            <i className="bi bi-check-circle"></i>
          </div>
        </form>
      </section>
    </>
  );
};

export default GenreForm;
