import { useState } from 'react';
import RadioGroup from 'components/RadioGroup/RadioGroup';
import './feedback-page.css';

const FeedbackPage = () => {
    const [formValue, setFormValue] = useState({
        rating: 0,
        comments: ''
    });
    const onSubmit = (e:any) => {
        e.preventDefault();
        console.log('Form submitted:', formValue);
        localStorage.setItem('feedback', JSON.stringify(formValue));
    };

     const ratingOptions = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },   
    ];

    const onRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            rating: Number(e.target.value),
        });
    };

    const onCommentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormValue({
            ...formValue,
            comments: e.target.value,
        });
    };

    return (
        <div className='feedback-wrapper'>
            <form onSubmit={onSubmit} className='feedback'>
                <h2>Leave your feedback:</h2>
                <RadioGroup
                    name='rating'
                    options={ratingOptions}
                    onChange={onRatingChange}
                    selectedValue={formValue.rating}
                    legend='* Rate the website:'
                    />

                    <div>
                        <textarea
                            className='comments'
                            value={formValue.comments}
                            onChange={onCommentsChange}
                            placeholder="Leave a comment..."
                            rows={4}
                        />
                    </div>
        
                <button className='submit-button' type="submit" disabled={!formValue.rating}>Submit</button>
            </form>
        </div>
    );
}

export default FeedbackPage;

// Feedback page with a form for feedback on your site: 
// please, create the form in survey style with some simple questions. 
// Implement form submitting mechanism and save it in localStorage. 
// For now don't bother yourself saving form data in DB.