import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
