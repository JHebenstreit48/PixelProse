import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FlowAndPacing = () => {
  const markdownFilePath = 'Design/Levels/Basics/Principles/FlowAndPacing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Flow & Pacing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlowAndPacing;
