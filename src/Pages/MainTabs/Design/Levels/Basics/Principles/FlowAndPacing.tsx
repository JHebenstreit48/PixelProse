import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FlowAndPacing = () => {
  const markdownFilePath = 'Design/Levels/Basics/Principles/FlowAndPacing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Flow & Pacing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlowAndPacing;
