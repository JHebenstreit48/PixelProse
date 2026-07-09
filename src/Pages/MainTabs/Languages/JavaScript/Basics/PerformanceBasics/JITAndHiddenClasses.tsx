import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JITAndHiddenClasses = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/PerformanceBasics/JITAndHiddenClasses';

  return (
    <>
      <PageLayout>
        <PageTitle title="JIT & Hidden Classes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JITAndHiddenClasses;
