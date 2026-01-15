import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExportPresets = () => {
  const markdownFilePath = 'Engines/Godot/Tools/ExportAndDeploy/ExportPresets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Export Presets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExportPresets;
