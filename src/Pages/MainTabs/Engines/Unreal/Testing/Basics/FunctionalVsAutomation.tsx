import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
