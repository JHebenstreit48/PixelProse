import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AudioTranslationLayer = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Audio/AudioTranslationLayer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Audio Translation Layer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AudioTranslationLayer;
