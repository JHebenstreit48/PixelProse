import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
