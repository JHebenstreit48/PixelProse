import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TemplatesAndPlatforms = () => {
  const markdownFilePath = 'Engines/Godot/Tools/ExportAndDeploy/TemplatesAndPlatforms';

  return (
    <>
      <PageLayout>
        <PageTitle title="Templates & Platforms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplatesAndPlatforms;
