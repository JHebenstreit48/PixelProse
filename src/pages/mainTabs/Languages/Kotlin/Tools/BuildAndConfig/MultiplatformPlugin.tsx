import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MultiplatformPlugin = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/BuildAndConfig/MultiplatformPlugin';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multiplatform Plugin" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiplatformPlugin;
