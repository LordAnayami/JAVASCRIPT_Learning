import { useRef } from "react";
import Card from "@/ui/Card";
import {
  FormContainer,
  Wrapper,
  Button,
} from "@/styles/meetups/MeetupFormStyle";

function NewMeetupForm({ onAddMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <FormContainer onSubmit={submitHandler}>
        <Wrapper>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </Wrapper>
        <Wrapper>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </Wrapper>
        <Wrapper>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </Wrapper>
        <Wrapper>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </Wrapper>
        <Button>
          <button>Add Meetup</button>
        </Button>
      </FormContainer>
    </Card>
  );
}

export default NewMeetupForm;
