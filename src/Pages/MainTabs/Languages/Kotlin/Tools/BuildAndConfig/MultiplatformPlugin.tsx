import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MultiplatformPlugin = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/BuildAndConfig/MultiplatformPlugin';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Multiplatform Plugin" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiplatformPlugin;
