import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AnimationAndTransitions = () => {
  const markdownFilePath = 'Engines/Unity/Basics/UI/AnimationAndTransitions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Animation & Transitions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AnimationAndTransitions;
