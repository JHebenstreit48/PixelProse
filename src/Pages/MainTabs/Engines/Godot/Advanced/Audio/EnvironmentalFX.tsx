import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvironmentalFX = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Audio/EnvironmentalFX';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Environmental FX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvironmentalFX;
