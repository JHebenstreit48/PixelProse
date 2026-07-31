import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const NaniteAndLumen = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Rendering/NaniteAndLumen';

  return (
    <>
      <PageLayout>
        <PageTitle title="Nanite & Lumen" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NaniteAndLumen;
