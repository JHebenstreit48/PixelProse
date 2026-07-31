import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
