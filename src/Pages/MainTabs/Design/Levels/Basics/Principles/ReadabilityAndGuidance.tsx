import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReadabilityAndGuidance = () => {
  const markdownFilePath = 'Design/Levels/Basics/Principles/ReadabilityAndGuidance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Readability & Guidance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReadabilityAndGuidance;
