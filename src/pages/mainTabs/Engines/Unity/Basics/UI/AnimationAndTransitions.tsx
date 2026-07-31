import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
