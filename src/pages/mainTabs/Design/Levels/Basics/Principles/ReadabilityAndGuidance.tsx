import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReadabilityAndGuidance = () => {
  const markdownFilePath = 'Design/Levels/Basics/Principles/ReadabilityAndGuidance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Readability & Guidance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReadabilityAndGuidance;
