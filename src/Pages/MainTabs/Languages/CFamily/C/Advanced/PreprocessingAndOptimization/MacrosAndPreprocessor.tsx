import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MacrosAndPreprocessor = () => {
  const markdownFilePath = 'Languages/CFamily/C/Advanced/PreprocessingAndOptimization/MacrosAndPreprocessor';

  return (
    <>
      <PageLayout>
        <PageTitle title="Macros & Preprocessor" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MacrosAndPreprocessor;
