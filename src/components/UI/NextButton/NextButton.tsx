import { useMutation, useQueryClient } from '@tanstack/react-query';
import getJoke from '../../../services/getJoke';
import Button from '../Button/Button';
import classes from './NextButton.module.scss';

const NextButton = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: getJoke,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['joke'] });
    },
  });

  const generateNewJoke = () => {
    mutation.mutate();
  };

  return (
    <Button className={classes['next-btn']} onClick={generateNewJoke}>
      Next
    </Button>
  );
};

export default NextButton;
