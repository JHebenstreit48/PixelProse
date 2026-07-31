import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
