import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
