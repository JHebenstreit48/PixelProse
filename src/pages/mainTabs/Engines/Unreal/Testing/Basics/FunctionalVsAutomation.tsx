import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FunctionalVsAutomation = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/Basics/FunctionalVsAutomation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Functional vs Automation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FunctionalVsAutomation;
