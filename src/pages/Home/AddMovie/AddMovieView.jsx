import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Upload } from "antd";
import {
  ADD_MOVIE_FORM,
  FORM_ITEM_LAYOUT,
  FORM_LANGUAGE,
  FORM_MOVIE_TYPE,
  ROUTE_CONFIG,
} from "../../../constant/Constant";
import { UploadOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addMovieData, setIsAddUpdateMoviesSuccess, updateUser } from "../../../store/slices/AddMovieSlice";
import dayjs from "dayjs";

const AddMovieView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { moviesId } = useParams();
  const { addMovieState, isAddUpdateMoviesSuccess } = useSelector(({ AddMovieReducer }) => AddMovieReducer);
  const [form] = Form.useForm();
  const [movieForm, setMovieForm] = useState(ADD_MOVIE_FORM);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (moviesId) {
      const movieToUpdate = addMovieState?.find((movie) => movie.id === moviesId);
      if (movieToUpdate) {
        setMovieForm(movieToUpdate);
        form.setFieldsValue({
          imageUrl: movieToUpdate?.imageUrl,
          title: movieToUpdate?.title,
          director: movieToUpdate?.director,
          releaseDate: movieToUpdate?.releaseDate ? dayjs(movieToUpdate?.releaseDate) : null,
          endDate: movieToUpdate?.endDate ? dayjs(movieToUpdate?.endDate) : null,
          budget: movieToUpdate?.budget,
          rating: movieToUpdate?.rating,
          language: movieToUpdate?.language,
          movieType: movieToUpdate?.movieType,
          preview: movieToUpdate?.preview,
        });
        // setImageUrl(movieToUpdate?.imageUrl)
      }
    }
  }, [form, moviesId, addMovieState]);

  useEffect(() => {
    if (isAddUpdateMoviesSuccess) {
      dispatch(setIsAddUpdateMoviesSuccess(false));
      setMovieForm(ADD_MOVIE_FORM);
      navigate(ROUTE_CONFIG?.MOVIE);
      setImageUrl(null);
    }
  }, [dispatch, navigate, isAddUpdateMoviesSuccess]);

  const handleChange = useCallback(
    (data) => {
      const a = { ...movieForm, ...data };
      setMovieForm(a);
      // if (id) {
      //   dispatch(editMovieData(a))
      // }
    },
    [movieForm]
  );

  const handleSubmit = useCallback(
    (values) => {
      if (moviesId) {
        // const editedMovie = {...movieForm, id: moviesId, imageUrl: imageUrl};
        const updatedMovies = addMovieState.map((movie) =>
          movie.id === moviesId ? { ...movie, ...movieForm, imageUrl: imageUrl || movie.imageUrl } : movie
        );
        dispatch(updateUser(updatedMovies));
        // isAddUpdateMoviesSuccess(false)
      } else {
        const newMovie = { ...values, imageUrl };
        dispatch(addMovieData(newMovie));
      }
    },
    [dispatch, imageUrl, movieForm, moviesId, addMovieState]
  );

  const handleFileUpload = useCallback((info) => {
    const file = info.file.originFileObj;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo, "errorInfo");
  };

  return (
    <>
      <h1 style={{ justifyContent: "center", display: "flex" }}>{moviesId ? "Update Details" : "Add Details"}</h1>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Form
          {...FORM_ITEM_LAYOUT}
          variant="filled"
          form={form}
          style={{
            maxWidth: 900,
          }}
          initialValues={movieForm}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Upload Image"
            name="imageUrl"
            // initialValue={movieForm?.image}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Upload
              accept=".jpg"
              maxCount={1}
              name="imageUrl"
              onChange={(e) => {
                handleFileUpload(e);
              }}
              listType="text"
            >
              {movieForm?.imageUrl || imageUrl ? (
                <img src={moviesId ? movieForm.imageUrl : imageUrl} alt="Image" style={{ width: "100%" }} />
              ) : (
                <>
                  <UploadOutlined /> upload{" "}
                </>
              )}
            </Upload>
          </Form.Item>

          <Form.Item
            label="Title"
            name="title"
            // initialValue={movieForm?.title}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
              {
                max: 15,
                message: "Title must be less than 15 characters!",
              },
              {
                min: 3,
                message: "Title must be more than 3 characters!",
              },
              {
                pattern: /^[a-zA-Z0-9]+$/,
                message: "Title can only contain letters and numbers!",
              },
            ]}
          >
            <Input onChange={(e) => handleChange({ title: e?.target?.value })} />
          </Form.Item>

          <Form.Item
            label="Director"
            name="director"
            // initialValue={movieForm?.director}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
              {
                max: 15,
                message: "Director name must be less than 15 characters!",
              },
              {
                min: 3,
                message: "Director name must be more than 3 characters!",
              },
              {
                pattern: /^[a-zA-Z0-9]+$/,
                message: "Director name can only contain letters and numbers!",
              },
            ]}
          >
            <Input onChange={(e) => handleChange({ director: e?.target?.value })} />
          </Form.Item>

          <Form.Item
            label="Release-Date"
            name="releaseDate"
            // initialValue={movieForm?.releaseDate ? moment(movieForm?.releaseDate) : undefined}
            rules={[
              {
                required: true,
                message: "Please select a release date!",
              },
            ]}
          >
            <DatePicker
              showTime={{ format: "HH:mm" }}
              format="YYYY-MM-DD HH:mm"
              onChange={(date) => {
                handleChange({ releaseDate: date });
              }}
              /*  disabledDate={(currentDate) =>
                form.getFieldValue("endDate") && currentDate && currentDate.isAfter(form.getFieldValue("endDate"), "day")
              } */
            />
          </Form.Item>

          <Form.Item
            label="End-Date"
            name="endDate"
            // initialValue={movieForm?.endDate ? moment(movieForm?.endDate) : undefined}
            rules={[
              {
                required: true,
                message: "Please select an end date!",
              },
            ]}
          >
            <DatePicker
              showTime={{ format: "HH:mm" }}
              format="YYYY-MM-DD HH:mm"
              onChange={(date) => handleChange({ endDate: date })}
              disabledDate={(currentDate) =>
                form.getFieldValue("releaseDate") &&
                currentDate &&
                currentDate.isBefore(form.getFieldValue("releaseDate"), "day")
              }
            />
          </Form.Item>

          <Form.Item
            label="Budget"
            name="budget"
            // initialValue={movieForm?.budget}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
              {
                type: "number",
                message: "Please input a valid budget with up to 5 decimal places.",
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
              }}
              onChange={(e) => handleChange({ budget: e })}
            />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            // initialValue={movieForm?.rating}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
              {
                type: "number",
                message: "Please input a valid rating.",
              },
              {
                pattern: /^[0-9]$/,
                message: "Rating must be a single digit!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
              }}
              onChange={(value) => handleChange({ rating: value })}
            />
          </Form.Item>

          <Form.Item
            label="Language"
            name="language"
            // initialValue={movieForm?.language}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Checkbox.Group
              options={FORM_LANGUAGE}
              // defaultValue={["1"]}
              onChange={(checked) => {
                handleChange({ language: checked });
              }}
            />
          </Form.Item>

          <Form.Item
            label="Movie Type"
            name="movieType"
            // initialValue={movieForm?.movieType}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Checkbox.Group
              options={FORM_MOVIE_TYPE}
              // defaultValue={["1"]}
              onChange={(checked) => handleChange({ movieType: checked })}
            />
          </Form.Item>

          <Form.Item
            label="Preview"
            name="preview"
            // initialValue={movieForm?.preview}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
              {
                max: 50,
                message: "Title must be 50 characters!",
              },
            ]}
          >
            <Input.TextArea onChange={(e) => handleChange({ preview: e?.target?.value })} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              {moviesId ? "Updated" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddMovieView;
