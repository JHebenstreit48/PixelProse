import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TemplatesAndPlatforms = () => {
  const markdownFilePath = 'Engines/Godot/Tools/ExportAndDeploy/TemplatesAndPlatforms';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Templates & Platforms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplatesAndPlatforms;
