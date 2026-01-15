import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NaniteAndLumen = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Rendering/NaniteAndLumen';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Nanite & Lumen" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NaniteAndLumen;
