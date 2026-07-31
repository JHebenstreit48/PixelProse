import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Metatables = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Metaprogramming/Metatables';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metatables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metatables;
