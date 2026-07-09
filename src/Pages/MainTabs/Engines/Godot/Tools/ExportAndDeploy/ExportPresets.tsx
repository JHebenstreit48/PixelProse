import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
