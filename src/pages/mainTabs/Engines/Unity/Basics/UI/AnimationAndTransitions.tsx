import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AnimationAndTransitions = () => {
  const markdownFilePath = 'Engines/Unity/Basics/UI/AnimationAndTransitions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Animation & Transitions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AnimationAndTransitions;
