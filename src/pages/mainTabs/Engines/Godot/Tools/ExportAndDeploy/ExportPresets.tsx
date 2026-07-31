import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ExportPresets = () => {
  const markdownFilePath = 'Engines/Godot/Tools/ExportAndDeploy/ExportPresets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Export Presets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExportPresets;
